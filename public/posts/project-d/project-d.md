### Problem
Our client, a solar power company, asked us to refactor legacy MATLAB code used to evaluate solar plant health and expected output.
Midway, the goal shifted to building a web service where clients can assess solar panel health by uploading:
1. Panel configuration
2. Hourly weather data

The service outputs estimated lost generation, calculated as:

```Power Lost = Expected Generation − Actual Generation```



### Inputs & Data Samples
- Site: Chiba, Japan

Panel Configuration : 
![Dashboard view](/posts/project-d/input-panel.png) 

Hourly Weather Data : 
![Dashboard view](/posts/project-d/input-hour-data.png) 

Actual Annual Power Generation : 
![Dashboard view](/posts/project-d/input-actual-power.png) 

 
### Overview 

Overview of old codebase 
- ~10,000 lines of unstructured MATLAB code in a flat, Jupyter-like format
- Mix of internal logic and external dependencies (e.g., use AWS for some compute)

Overview of operations 
![Dashboard view](/posts/project-d/operation.png) 

Snapshot of old code 
![Dashboard view](/posts/project-d/snapshot.png) 




### Challenges & Solution
We tackled several key challenges with creative LLM-driven strategies:
1. No Documentation, No Structure → Used long-context LLMs to infer and define modular structure from the 10k-line codebase.

2. LLMs Struggle with Multi-File Integration → Predefined each module with a clear purpose and expected subcomponents to guide code generation.

3. Targeting Specific Computations → Needed a way to point LLMs to the right parts of the legacy code when rewriting complex logic (e.g., calculating shading factor based on sun position).

    We tested two approaches:

    Option 1:
    Vectorized all 10k lines and retrieved relevant blocks based on query

    ❌ LLM often missed full context—code chunks were incomplete or fragmented. Often goes into infinite loop. 

    ```
    # entire code block 
    for i=1:numel(dn) %1898
    alpharad(:,i) = asin(sin(NL0)*sin(dl0(i))+cos(NL0)*cos(dl0(i))*cos(hrad(:,i)));  
    for j=1:numel(time0)
        psirad(j,i) = atan(cos(NL0)*cos(dl0(i))*sin(hrad(j,i))/(sin(NL0)*sin
        if hrad(j,i)<0 && psirad(j,i)>0
    ```

    Option 2 (Effective):
    Removed code, kept only comments. 
    Asked LLM to extract keywords for the target computation. 
    Mapped those keywords to specific comment lines and returned a clean range of relevant comments. this range will get relevant block of code. 

    ```
    # headings | code line | comments 
    h2 1980: %% From this point onward, shadow coefficient calculation ★★★★★★★★★★★★★★
    h3 1981: % Up to 1935
    h4 1982: % Initial values of array shadow are all set to 1; handling cases be calculated
    h4 1983: %% Reading variables (11/16)
    ```

4. No Link Between Input and Test Case Creation → Built a pipeline to map client CSV data to relevant code parameters using LLM extraction.
    ```
    client data in csv + relevant generated code (python)
    ↓ 
    LLM # extract relevant input data for a specific code 
    ↓ 
    {'function_spec_name': 's', 'client_parameter': 'panel_count', 'value': 720}
    ```

5.  No Ground Truth for Testing → Reconstructed scientific calculations (e.g., solar declination angle) from scratch to manually derive expected outputs.

    ![Dashboard view](/posts/project-d/ground-truth-cal.png) 

    This was one of the most difficult technical challenges we faced.
    We had two options to generate ground truth:

    (1) give the LLM access to existing software that performs the computation and returns the correct output, or
     
    (2) guide the LLM to manually derive the ground truth step by step.

6. Validating Scientific Computation → Once we had sample inputs and ground truth values, we built an automated pipeline to test accuracy. It runs the generated code, test scripts, input data, and ground truth inside a Docker container for isolated, repeatable evaluation.


# Submodule Refactoring & Validation Pipeline

This pipeline refactors a **single scientific submodule** — for example, computing how much shading affects solar panels based on sun position — from legacy MATLAB code into tested, modular Python.

![Dashboard view](/posts/project-d/solution.png) 

It automates:
- Translating MATLAB logic to Python
- Decomposing the submodule into multiple sub-functions
- Generating and validating test cases in a Dockerized environment

---

## 📁 Inputs

The following input files must be placed in the `data/` folder:

- `calculate_shade_factor.m`:  
  MATLAB source code containing the original submodule logic

- `predefined_module.json`:  
  Defines the target module’s structure (e.g., expected function names, hierarchy)

- `client_input_data.json`:  
  Real-world input data used to format test inputs

> All generated data — logic, test cases, outputs — is stored temporarily in the **Database** directory.  
> Each blue box in the diagram corresponds to a standalone processing agent.

---

## 🔁 Pipeline Steps

### 1. `generate_code.py`

Generates Python code by combining:
- Function structure (`predefined_module.json`)
- Relevant MATLAB logic (`calculate_shade_factor.m`)

📦 **Output:**  
A folder containing 6–7 Python files, including:
- One main entry point
- Several sub-functions with isolated responsibilities

---

### 2. `format_client_input.py`

Formats input data for each generated sub-function.

🔧 **What it does:**
- Iterates through generated code
- Extracts the corresponding input fields from `client_input_data.json`
- Prepares inputs for testing

---

### 3. `get_ground_truth.py`

Uses an LLM to estimate expected outputs (ground truth).

🧠 **What it does:**
- Iterates over logic code + input data
- Calculates expected outputs using AI

---

### 4. `executor/`

Builds and runs the tests inside Docker.

🧪 **What it does:**
- Combines logic, inputs, and ground truth
- Generates test code + `requirements.txt`
- Executes inside a Docker container
- Performs an auto-fix loop if tests fail

📤 **Outputs:**
- Test results
- Execution logs
- Summary report

---

### 5. `build_final_outputs.py`

Finalizes and archives results.

📦 **What it does:**
- Saves all input, intermediate, and output files to `archived_module/`
- Clears the `data/` folder (keeping the folder structure) for the next run
