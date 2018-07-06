//More modules may be needed for specific functionality, but this is basic CRUD for backend. The modules may need to be adjusted, or separate variables set (such as a counter or empty array to push data into).
module.exports = {
create: ( req, res, next ) => { //Takes a request body and uses create.sql to put it in the database
    const dbInstance = req.app.get('db');
    const { column2, column3, column4, column5 } = req.body;

    dbInstance.create([ column2, column3, column4, column5 ])
    .then( () => res.sendStatus(200) ) //Sends success status 200
    .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err) //Catches and sends an error when failure occurs
    } );
},

read: ( req, res, next ) => {
    const dbInstance = req.app.get('db'); //Retrieves database with 'db' set in index.js

    dbInstance.read() //Calls read.sql to return table
    .then( tablename => res.status(200).send( tablename ) )
    .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
    } );
},

update: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params, query } = req; //Takes a query and assignes it to id parameter

    dbInstance.update([ params.id, query.desc ])
    .then( () => res.sendStatus(200) )
    .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
    } );
},

delete: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req; //Takes a parameter and deletes the corresponding table item

    dbInstance.delete([ params.id ])
    .then( () => res.sendStatus(200) )
    .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
    } );
}
};