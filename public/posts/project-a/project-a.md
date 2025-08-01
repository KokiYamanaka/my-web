### The Problem
As busy university students, we kept rotating the same 2–3 meals each week. Grocery planning was tedious, cooking felt repetitive, and ordering food was too expensive to do regularly.

This led us to a bigger question:

**How can we eat diverse, tasty, quick, and affordable meals each week—without the hassle?** 

### Why Not HelloFresh?
We tried meal kits like HelloFresh, hoping for a simple fix. But the recipes lacked flavor, portions were small, cooking took too long, and most importantly—it cost more than just buying groceries.

![Dashboard view](/posts/project-a/hellofresh-issue.png) 

### The Solution
An AI-powered app that plans your weekly meals and delivers ingredients to your door — all based on your preferences.
Just type in your taste and preferred protein, and it returns:
- 4 tailored recipes
- A ready-to-order shopping cart

You type in your taste and main meat, then it gives you back the recipes ands shopping cart link. 
![Dashboard view](/posts/project-a/app.png) 

### How it Benefits?
It doesn't just recommend, it benefits you by giving recipes that's 
- Diverse – Adapts to your taste while rotating meals to prevent boredom
- Delicious – Curated from authentic Japanese recipes on Cookpad
- Fast – All meals are ready in under 15 minutes
- Efficient – Maximizes ingredient overlap to cut grocery costs


### How It Works

- The user types in a taste preference (e.g. "I want something like bulgogi")
- An LLM generalizes the input to a broader flavor concept (e.g. "sweet beef"), avoiding overfitting to specific dishes
- A vector database retrieves the top 20 semantically similar recipes
- These recipes are then re-ranked based on ingredient overlap with the top result, using bipartite matching with vector similarity to prioritize those with shared substitutable ingredients


### Market Feedback 
Shared on Reddit (r/hellofresh, r/collegecooking).
40 users interacted, but sessions averaged ~20s — the problem may not feel urgent or the value isn’t clear.

Real Criticisms :

- Free alternatives already exist.
- Meal planning is highly competitive.
- A niche like gym-goers seeking tasty, high-protein meals could work better.

### Key Takeaways
After sharing the MVP with people in business, marketing, and tech, three clear lessons emerged:
1. Go niche – Broad solutions lack traction.
2. Know your users deeply – Success depends on understanding behavior, needs, and context before building.
3. Start with a sharp pain point – Don’t chase vague problems. Identify what's truly missing and solve that.
4. Use State of Art Marketing Stategy- Don't let your app sit in github. Two best strategies so far : [Cal AI](https://www.youtube.com/watch?v=wMk_t8F1rOc&t=25s), [Oishii](https://www.youtube.com/watch?v=L6RnmiAfcvQ)

This second point rings especially true. Even at NovaTrade, we had to dig into client needs well before building—otherwise, you risk wasting time on the wrong solution.
![Dashboard view](/posts/project-a/talk-agri-ai.jpg) 
 