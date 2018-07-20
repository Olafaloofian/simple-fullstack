# Here you are, at the backend of the project. Things get kind of technical around here, but it's not too bad to figure out. Let's go.

To set up a server using the terminal, run [npm init -y]. This will create a package.json and fill it out for you.

Net, run [npm i/yarn add express body-parser massive dotenv express-session]. This terminal command will add the packages Express, Body-Parser, Massive, DotEnv, and Express-Session to the project. All are necessary for backend production. A file named package-lock.json/yarn.lock will also be made at this point.

If you plan on using [nodemon] for development (yes, you should), make sure to adjust the "main" property in package.json. It will probably need to be set to "server/index.js".

Set up a proxy in package.json so your ports dont interfere with each other.

Creating and initially modifying tables in the database will require the use of a separate program. At this point, SQL Tabs is a perfect tool. Just link up Heroku's URI and SQL your way to glory.

For testing backend without a built frontend, use a program like Postman.

When you are a good spot in backend development, run [npm build] to get production-ready frontend files.

Follow the folder and file path set up here in /simple-fullstack/backend. More information is present in each file. Get at it! 😃