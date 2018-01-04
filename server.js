//NPM Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express server set-up
var app = express();
var PORT = process.env.PORT || 3000;

//Body Parser set-up
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Makes public & data files accessable
app.use(express.static(path.join(__dirname, 'app/public')));
app.use(express.static(path.join(__dirname, 'app/data')));

//API and HTML Routing
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Port Listener
app.listen(PORT, function() {
  console.log("Now listening on: " + PORT);
});
