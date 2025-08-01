A system to help T-Company's marketing team expand customer accounts by visualizing organizational structure from a corporate number.

![Dashboard view](public/posts/project-eview/treeview.png) 

## Project Summary

- Client: T-Company — a B2B platform that stores and organizes educational videos for workers in the med-to-large manufacturing companies.
- Goal: Enable strategic expansion within client companies. 
- Example: We know Department A at Toyota Shokki — how do we expand to Department B? 
- Challenge: The client had no map of the target organization's structure and no clear starting point.
### Solution

- The marketing team inputs a corporate number.
- The system scrapes organization data, then visualizes the hierarchy as a node graph.
- This allows the marketing team to identify logical expansion targets inside large organizations.

## My Contribution

- Conducted requirement analysis through direct interviews with marketing and sales teams.
- Built an API endpoint to scrape organizational data from a corporate number.
- Built a second API endpoint to structure scraped data into a node graph format for frontend visualization.

## Reflection: What I’d Do Better

If I encountered this project again, I would reduce analysis time and focus on faster delivery.

### What Happened

- Spent 2 months (April–June) in analysis paralysis:
  - Overthought JSON structure.
  - Debated what each node should display.
  - Delayed prototyping.
- The client shared 9–10 requirements (some hidden), such as:
  - "Each department should be color-coded."
  - "Clicking a node should show contact info."
  - "Flag whether we already have a contact."

### What I Should Have Done

- Force clarity: Get 1–2 core requirements in one round.
- Quickly ship a prototype, ideally deployed to cloud.
- Ignore secondary requests until real feedback arrives.

## Musk's 5-Step Thinking (Should Have Applied)
The below image implies the thinking. 

See raptor 3, it delivers 290 ton-force of thrust, compared to 230 tf for raptor 2. 

The whole progress involves 1) questioning whether a thrust's sub component is really required 2)  delete if not 3) simplify the structure of thrust 4) & 5) use them in starship. 
![Dashboard view](public/posts/project-eview/raptor.jpeg) 

Applying those ideas in our project : 
1. **Make the requirement less dumb**  
   Don’t take client specs at face value.  
   Ask: "Why do you need this?" Most clients, especially in Japanese companies, aren’t clear on their own goals.

2. **Delete part of the process**  
   Example: The node was supposed to do 5 things.  
   → We only needed 1–2. Cut the rest.

3. **Simplify or optimize the design**  
   Example: Focus on fast backend response for visualizing nodes, instead of stuffing features into each node.

4. **Accelerate cycle time**  
   Build → show → feedback → improve. Faster loops, fewer assumptions.

5. **Automate where possible**  
   Reduce manual work early — from data scraping to formatting to deployment.

“Smart engineers optimize things that shouldn’t even exist.”  
One team spent 8 months optimizing a rocket component…  
Only to realize it wasn’t needed at all.  
Always ask: **"Should this exist in the first place?"**
