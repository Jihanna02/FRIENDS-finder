//NPM Dependencies
var express = require("express");
var bodyParser = require("body-parser");

//Express server set-up
var app = express();
var PORT = process.env.PORT || 3000;

//Body Parser set-up
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//API and HTML Routing
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Port Listener
app.listen(PORT, function() {
  console.log("Now listening on: " + PORT);
});
