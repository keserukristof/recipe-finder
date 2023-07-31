# **Project Scope and Features**


> This is a pet project and as such, the scope and features outlined above are subject to change as the project evolves. The goal is to create a functional application to showcase a specific technical skill set. Changes may occur as needed to meet the project's goals, adapt to new learning, or experiment with different approaches.


## 1. **Project Scope**

The application is intended to serve as a Recipe Finder, providing users with recipe suggestions based on the ingredients they currently have at hand. It should facilitate users in viewing detailed information about each recipe and saving their favourite recipes for future reference. The project involves the development of both the front-end and back-end of the application.


## 2. **Features**

### 2.1. **Ingredient Input:** 
Users should have a feature to input or select the ingredients they currently possess. This could be a simple form or a more advanced auto-suggest input field that suggests ingredients as the users type.
    
### 2.2.  **Recipe Suggestions:** 
Once the users input their ingredients, the application is designed to query the custom API to fetch recipes that incorporate those ingredients. The API can implement a ranking or sorting logic to rank recipes based on the number of input ingredients they use.
    
### 2.3.  **Recipe Details:** 
When a user selects a recipe, the application is designed to query the custom API for more detailed information about that recipe. This could include cooking instructions, a full list of ingredients (highlighting the ones the user already has), preparation time, and any other information stored in the database.
    
### 2.4.  **Save Favourite Recipes:** 
The application is designed to allow users to save their favourite recipes. These could be stored in a user-specific table in the database, which implies that user authentication will need to be implemented in the API.
    
### 2.5.  **Search and Filter Recipes:** 
The application should permit users to search for recipes by name or filter by certain criteria (e.g., preparation time, cuisine type, etc.). This functionality will need to be supported by the custom API.
    
### 2.6.  **Custom API:** 
The custom API, built with Node.js and Nest.js, will support all of the above operations. The database schema needs to be designed to store recipes and their associated information. If user authentication is implemented, user information should be stored securely. Best practices for RESTful API development, including appropriate status codes and error messages, should be adhered to.
    
### 2.7.  **User Authentication (Optional):**
If users are allowed to save their favourite recipes, user authentication will need to be implemented. This could be as simple as username/password authentication, or OAuth could be used to allow users to authenticate with a third-party service like Google or Facebook.