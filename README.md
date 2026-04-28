# purpose of this repo

- This is the second project inside of the node.js module in the odin project.

- This is a project that goes over the concepts learned about the MVC (model-view-controller) pattern. The use of the routing, view, and controller concepts are used in this project to help organize/standardize code.

## project requirements

- 2 routes, the index route (/) and a
  form for new messages in the new route (/new).

## notes to myself

- Try to organize the project in respect to the MVC pattern.

- When doing routers, make sure to destruct the "router" function
  out from the imported express to actually create a router.

- Remember that express is in CommonJS, so instead of ES6 import/export, its module.exports and require().

- import express and EJS into the project and test the router is working by running the server into the index path first before doing anything else.

- When using the view templates, since the relative path is defined with app.set("views", path.join(\_\_dirname, "views));, routers in the routes folder can automatically find the view template when calling res.render(), so no need to include the absolute path in the first parameter of the .render function.

- For the index view, the relative path even nested does not need to be defined because express finds the index.ejs view by default, but a differently named view (like the form.ejs) needs to have a relative path defined because its not one of the default files that express finds.

- Form has two attributes, method which describes the HTTP method used upon submission and action describes where the data is sent to a specific URL path.

- When a post request is created, I can access the contents of the form with the request object and the body attribute. The "name" attribute I give to the inputs inside the form are inside the body object.

        ex:

        if the <input name = "input1"> then the req.body would be:

        req.body.input1, and so on.

- In order to use the req.body method above, I need to define an express app-level-middleware that parses the incoming form request and makes it available to the req.body object with express.urlencoded().

        ex:
        <!-- causes app to use express.urlencoded middleware to parse form data. The {extended: true} option just defines what library is used to parse the data -->

        app.use(express.urlencoded({extended: true}));

- For the messageDetails.ejs route, I went to the index.ejs view template and added a link that href's to a constructed const variable made in the template that adds query params to the link so that I can access req.query variables to display a different message detail on different messages

## Run project

- In CLI in the same directory as the project, run:

  node app.js

  or

  node --watch app.js

- Go to localhost:3000 in the browser and the server should route to the correct root path.

## Hosting

- My plan is to host this website on Railway.com, which is a hosting website that allows the quick deployment of the backend website.

- The hosting requires a connection to my github account which I gave it.

- https://railway.com/

## Environment variables

- For railway, in order to setup a default port for railway I have to go to the setting of the project and add environment variables.

- As discussed in a previous lesson, environment variables are made to hide sensitive data from the public but also allows the backend to
  use process.env.VARIABLE to access different variables on different machines.

- Environment variables can be created with a .env, but since environment variables change on each environment, I would have to specifically
  define them on the hosting website (Railway).

- MAKE SURE NOT TO COMMIT/PUSH THE .env LOCAL FILE TO GITHUB. THAT WOULD DEFEAT THE PURPOSE OF IT BEING HIDDEN. INCLUDE .env or .env\* (all environment files) IN THE .gitignore FILE.

      note: Make sure to make the .gitignore file first before making a .env file, or else the .gitignore will not track and prevent the .env file from getting added to the github repo.

## database addon

- in the "Using postgreSQL" lesson in the odin project, the assignment section says to go back to this project and convert the static
array of data and convert it into a SQL database with postgreSQL and the hosting website.  (done)

      - Add this SQL functionality to the hosting website (not done)

- initial table creation and initial message data should be done via a setup script. (done)

- add required environment variables to connect to host database service, but test the database initially with local postgreSQL. (done)

      - Add environment variables to the hosting website (not done) 

- also add server side validation (expresss-validator) (not done)
