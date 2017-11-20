# Rorsachs Journal

This is a Web Application to allow Users to Create,View, Edit Blogs of various Categories

## Development server

Run `npm install` to install all dependencies which include [concurrently](https://www.npmjs.com/package/concurrently), [json-server](https://www.npmjs.com/package/json-server) among others.

To start the app `package.json` has already been modified to use `json-server` at `Port:3000` to serve up the `blogs` and at `Port:4000` to serve up the `users`.

Please install both concurrently and json-server packages to correctly run the npm start command without any errors.

After that Just type in `npm-start` in your terminal to start up the app.

## How to Use Rorsachs Journal

The Home Page Displays all the Blogs present in the Database. The Blogs are static and the user cannot interact with them.
The Blog Card Displays:

      - Blog Title
      - Blog Content 
      - Blog Rating indicated by Star Icon
      - Blog Category indicated by Flag Icon
      - Published By indicated by User Icon

The Title Bar consists of Blog Logo, Blog Title which is clickable hyperlink redirecting User to Home Page of the Blog, and 4 icons, namely:

- User Icon
  It is used to display a page that allows user to search for his her Blogs and present options to edit/ delete blog.
  
  Upon clicking the **Edit** Button the User is redirected to **Edit** Component where he/she can edit his/her blog.
  
  
- Star Icon
  It is used to display favourite blogs sorted according to their Star Ratings
  
- Search Icon
  It is used to Search for Blogs according to Title or Category.
  While Typing in the Text Box Search by Title Happens and happens on the fly.
  While for Searching by Category The User needs to select the Category Radio Button and then click the Search Button.The Category needs   to **match Category case i.e 'Technology' and not 'technology' or 't$chnology', etc.** 
  
  However Title of the blog is **case agnostic**
  
 - Add Icon
   It is used to add a New Blog. The Form is validated and hence all the Text Boxes need to filled to proceed to add new Blog. The Errors    (if any) will be shown there only in a clear and legible format for the user. 
   
   Clicking on the Add Button Adds the blog and redirects to Home Page which shows all the blogs.
   
   Clicking **I have Changed My Mind** also redirects back to the home page.
   
  
 ## Known Issues
   
   - Currently **No User Authentication Mechanism is in place**.
   - Currently **No User Sign Up Page Exists**
   - Currently **Deleting the Blog** deletes the blog but no Appropriate Message is shown to the User.
  
  ## Authors
  
  Anmol Arora
  
  ## Acknowledgements
  
  I would like to thank [Aayush Arora](https://twitter.com/angularboy?lang=en) for his valuable guidance and help for building this Web     App
   
