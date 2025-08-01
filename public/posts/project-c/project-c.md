### The Problem

Our client, an IT job platform, uses keyword-based recommendations that miss semantic meaning—resulting in poor matches and lower user retention.

See sample recommendation : 
![Dashboard view](/posts/project-c/jobpost.png) 


### The Solution
We built a pipeline that recommends relevant projects to freelancers using semantic matching via vector search. The steps are:
1. Input: The freelancer uploads their resume.
2. Parsing: We extract and structure key information into four categories:
    - [SKILLS]
    - [EXPERIENCE]
    - [DETAIL WORK]
    - [PROJECT SUITABILITY]

3. Matching: The structured data is converted into vector embeddings and compared against a project database using vector search to return semantically relevant matches.

When freelancer and project descriptions are written with common information and structure, the recommendation increase significantly. See the sample below : 
![Dashboard view](/posts/project-c/sample.png) 


 


 