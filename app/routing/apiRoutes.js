//Dependency for NPM Path
var path = require("path");

//Access to friends data object
var friendsList = require("../data/friends.js");

//Exports json objects based on get/post requests
module.exports = function(app) {
  //modal?
  app.get("/api/friends", function(req, res) {
    //loads friends object when you go to that route
    res.json(friendsList);
  });

  //adds form data to FriendsList object
  app.post("/api/friends", function(req, res) {

      friendsList.push(req.body);
    
  });

};
