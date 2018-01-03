//Access to friends data object
var friendsList = require("../data/friends.js");

//Exports json objects based on get/post requests
module.exports = function(app) {
  //modal?
  app.get("../data/friends", function(req, res) {
    //loads friends object when you go to that route
    res.json(friendsList);
  });

  app.post("/survey", function(req, res) {
    //adds form data to FriendsList object
    friendsList.push(req.body);
      res.json(true);
    });

};
