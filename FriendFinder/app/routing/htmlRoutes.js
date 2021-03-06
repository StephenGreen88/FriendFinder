// Require necessary dependencies
var path = require('path');

// Two HTML Routes
module.exports = function (app) {
    // GET route to display the survey page
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });

    // USE route to display the home page
    app.get('/home', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });

    // If no matching route is found default to home page
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });


};