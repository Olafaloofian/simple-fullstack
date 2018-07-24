// This file is where you set up a session for the user. If there's not already a session, it will create one and make an object filled with data specific to the user's session
module.exports = function (req, res, next) {
    if (!req.session.user) {
        req.session.user = {
            objectKey: value
        }
    }
    next() // Next is used when middleware is applied
}