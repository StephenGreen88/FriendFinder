// Require in the necessary dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Set express equal to the app variable for ease of use
// =============================================================
var app = express();

// Set up the port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require in the necessary routes
// =============================================================
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  