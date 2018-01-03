//Dependency for NPM Path
var path = require("path");

module.exports = function(app) {
	// Route to home page
	app.get("/", function(req, res) {
	    res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	//Route to survey
	app.get("/survey", function(req, res) {
	    res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	//Route to the friends API
	app.get("/api/friends", function(req, res) {
	    res.sendFile(path.join(__dirname, "../data/friends.js"));
	});

};


