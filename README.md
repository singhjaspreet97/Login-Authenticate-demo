# Login-Authenticate-demo
A Login System in which user can log-in or register if you are a new user. After logging in dashboard appears with entries of database in the table. After that user can simply logout and details are stored in the database.

Clone this Repository

$npm install

Middleware packages will be installed :-
    "bcrypt": "^2.0.1",
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.18.3",
    "connect-flash": "^0.1.1",
    "ejs": "^2.6.1",
    "express": "^4.16.3",
    "express-handlebars": "^3.0.0",
    "express-messages": "^1.0.1",
    "express-session": "^1.15.6",
    "express-validator": "^5.2.0",
    "mongodb": "^3.1.0",
    "mongoose": "^5.1.7",
    "passport": "^0.4.0",
    "passport-http": "^0.3.0",
    "passport-local": "^1.0.0"

$npm start

I used MongoDb database for this project

Open bin folder of the MongoDb and run $mongo and $mongod

About the code :-

 => app.js

Main file for the project

1.Firstly imported all the packages, then connection with mongoose using
 mongoose.connect('mongodb://localhost/loginapp');
 var db = mongoose.connection;

2.Then, created objects for specifying routes
  i.e routes, users

3.Initialize app using: var app = express();

4.Joined view engine with views directory and set-up handlebar view engine with default Layout at layout.handlebars

5.Used bodyParser middleware for parsing json objects

6.Set static folder to public directory

7.Express session initialized

8.Passport middleware initialized for authentication

9.Express validator used for validating errors ike namespace by using errorFormatter

10.Flash is used formessage defaulting the type to info.

11.Global variables passed

12.Set up route endpoints and localhost at 3000


Routes folder :-

=> index.js :

1.Parse express and route onject for routing incoming requests

2. Endpoint ('/') will be routed or rendered to index.handlebars

3.Function ensureAuthenticated to check for route authentication. If user is not authenticated , it ill be redirected to login portal.

=> users.js:

1.Parse express and route onject for routing incoming requests

2.Object User will route to the user.js in the models directory for database operations.

3.Register and login route are used for accessing respective portals using get requests.

4.Register post request are used for parsing entered information in the onjects.After that validation of these objects is done to maintain that user doesn't leave them empty.

5.Checking for errors is done and the credentials are passed in the database vie User onject. If registration is successfull asuccess message "You are registered and can now login" appears and user is routed to the login portal.

6.Passport middleware and LocalStrategy is used for Comparing password and matching user by username using getUserByUsername and comparePassword functions and they uses User object for checking credentials from the database.

7.SerializeUser used which determines, which data of the user object should be stored in the session. DeserializeUser corresponds to the key of the user object that was given to the done function.

8.Post request for login is done.If status is success user will be rendered to dashboard and a success message appears. If failure then it will redirect to login portal again.

9.Logout get request route user to the login portal with a success message of 'You are logged out'.

10.get-data get request is used by User onject to parse credentials od userSchema for displaying them in table in index.handlebars.

Models => user.js:

1.Mongoose middleware is parsed for parsing json onjects and credentials and bcrypt is used for hashing passwords.

2.UserSchema is created and credentials in this schema are modelled into User objects by using module.exports.

3.createUser, getUserByUsername, getUserById , comparePassword fucntions are used to checking or comparing password from the Mongodb database and their results are exported using module.exports to the User onject.

Public => css : styling of the pages is done using different css styles and bootstrap classes.
       => js
            => DataView.js: jQuery is used and userData array is created. Ajax operations are used, if thier is success data will be parsed in the table in index.handlebars.
           
Views => Layouts diretory
               => layout.handlebars : Navigation bar is created. User is logged in then only dashboard and logout button will appear.
                                      If user is logged out then, login and register button will appear.In between the main content will appear,if success , then success message will appear, if error then error message in the form of flash message. A footer has been at set at the botom of page
                                     
      => login.handlebars : A form is created with heading account login and has fields for username and password and submit button.
      => register.handlebars : Register form consists of fields Name, Username, Email, Password Confirm Password and Submit button.
                               If user is already their a message 'Username has taken already try new' will apear. If email has already taken then a message wilh 'Email has taken already try new' will appear.
      => index.handlebars : Dashboard page which appears after user is logged in. It consists of table a table which has shows name, email, and username of all the users who has a account. 
                            A jQuery script is passed and the table accesses these values form DataView.js.
                            
  
  This Project is created for demo purposes only for assignment, for my round of internship with Venturesky in Web Development.
                               
            
           






