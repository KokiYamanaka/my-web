### Project Summary
- **T-Company**: A platform that stores and organizes educational videos and materials for amateurs in the manufacturing industry  
- **Business model**: Manufacturing companies like Asahi, Nissan, and Toyota subscribe to the Tebiki platform through monthly subscriptions  
- **Project goal**: Reduce churn rate among existing subscribed customers  
- **Solution**:  
  - Build a model to predict the churn rate of existing customers  
  - Enable the internal marketing/sales team to actively engage customers with the highest predicted churn rate  
  - Prioritize customer engagement based on churn risk ranking  

### My Contribution
- Conducted requirements analysis  
- Extracted, Clean raw data from the CRM platform (HubSpot)  
- Performed EDA and cohort analysis  
- Transformed fields and created new variables:  
  - **Frequency**: Engagement rate calculated by dividing access count by the number of unique amateur users  
  - **Recency**: Time since the last user activity (monthly)  
  - **Video Rate**: Number of educational videos uploaded (monthly)  
  - Example: Created a recency metric by calculating the time between the last activity date and the current month  
- Built a Gradient Boosting model with these three variables

### Thoughts
- A lot of time was spent on:
  - Identifying the right requirements  
  - Running analysis in parallel while uncovering business needs  
  - Specifically: the business lead at Tebiki needed to define which issues to scope and how they could improve overall sales  
- He also mentioned that it would have been much better if I were on-site, as it would allow me to dig into issues more effectively and apply my data science experience and knowledge more directly
 
### Gallery  
![Dashboard view](public/posts/project-churn/gallery.png)

