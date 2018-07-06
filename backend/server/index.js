// Here at the top, make sure to require all the packages pulled from yarn/npm
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()

const controller = require(__dirname + './controller'); //Doing a controller is an optional but good way to organize code

const port = 3000; //Set Port #

app.listen( port, () => { console.log(`Server listening on port ${port}.`); } ); //Console log to indicate app's port status

const app = express(); //Set express called to a variable for easy later use.

app.use(express.static(__dirname + '/../public/build')) //Serves up static express files for frontend

app.use( bodyParser.json() ); //Here, body-parser is used as middleware for express.

massive( process.env.CONNECTION_STRING ).then( dbInstance => { //This code finds CONNECTION_STRING from .env and lets massive use it to access the database.
app.set('db', dbInstance) // The database is stored in 'db' for later use.
}).catch( err => console.log('------error: massive', err) ); //Catches and logs any errors in the process of connecting Massive

app.post( '/api/tablename', controller.create ); //This code will do full CRUD for the table 'tablename' in the linked database
app.get( '/api/tablename', ontroller.read );
app.put( '/api/tablename/:id', controller.update );
app.delete( '/api/tablename/:id', controller.delete );