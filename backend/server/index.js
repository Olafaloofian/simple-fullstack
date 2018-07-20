// Here at the top, make sure to require all the packages pulled from yarn/npm
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
// If you want to use sessions, this is required
const session = require('express-session')
// Not required for sessions but may be used
const setInitialState = require('./middlewares/session')
const middlewareFunction = require('./middlewares/middleware_function')
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

// This is how you set up a session
console.log(process.env.SESSION_SECRET) // Makes sure you have a connection to your session secret
app.use(session ({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    // If you want a cookie:
    cookie: {
        maxAge: 1000 * 60 * 2 // Do some math here to set the expiration time. It starts out in milliseconds
    }
}))
// Use the function built in session.js as middleware to set an initial session state
app.use( setInitialState )
// Use a special function as middleware for the user
app.use((req, res, next) => {
    if (req.method === "TYPE" || req.method === "TYPE") { // An example of a way to choose which methods to use middleware on
        middlewareFunction (req, res, next) // This is the function you import from the middlewares folder
    } else {
        next()
    }
}) 

app.post( '/api/tablename', controller.create ); // This code will do full CRUD for the table 'tablename' in the linked database
app.get( '/api/tablename', controller.read );
app.put( '/api/tablename/:id', controller.update ); // Parameter
app.delete( `/api/tablename?id=${id}`, controller.delete ); // Query

// Below is setup for Auth0. It's a lot, I know. More steps are required externally - head to https://github.com/Olafaloofian/auth0-mini for more instruction.
app.get('/auth/callback', (req, res) => {
    // The payload you will be providing to Auth0 for a token
    const payload = {
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }
    // Trading a token for an access code at Auth0
    function tradeCodeForAccessToken() {
        return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, payload)
    }
    // Trading a token for user info at Auth0
    function exchangeAccessTokenForUserInfo(response) {
        const accessToken = response.data.access_token
        return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo?access_token=${accessToken}`)
    }
    // This function will take the returned user info, determine whether a user is logged in, and store their info in the database if they are new.
    function storeUserInfoInDatabase (response) {
        const auth0Id = response.data.sub // .sub is short for 'subject' on Auth0
        const db = req.app.get('db')
        return db.read_user(auth0Id).then(users => {
            if (users.length) {
                const user = users[0]
                req.session.user = user // Using sessions with Auth0
                res.redirect('/profile')
            } else {
                const createUserData = [
                    auth0Id,
                    response.data.email,
                    response.data.name,
                    response.data.picture
                ]
            return db.create_user(createUserData).then(newUsers => {
                const user = newUsers[0]
                req.session.user = user // Here is session again
                res.redirect('/profile')
                })
            }
        })
    }
    //Here is where all the above functions are chained together.
    tradeCodeForAccessToken()
    .then(exchangeAccessTokenForUserInfo)
    .then(storeUserInfoInDatabase)
    .catch(error => {
        console.log('---------- error', error)
        res.status(500).json({message: "Auth0 error in server!"})
    })
})