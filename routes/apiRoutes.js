var db = require("../models");
var userInfo = require("../data/userInfo");
// var allPosts = require("../data/userInfo");

module.exports = function(app) {
  app.get("/api/allposts", function(req, res) {
    db.Post.findAll({}).then(function(data1) {
      res.json(data1);
    });
  });

  app.get("/api/loggedin", function(req, res) {
    db.Post.findAll({ where: { UserId: userInfo } }).then(function(data) {
      res.json(data);
    });
  });

  app.post("/api/posts", function(req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });
  // Create a new example
  app.post("/api/userdata", function(req, res) {
    db.User.create(req.body).then(function(newUser) {
      res.json(newUser);
    });
  });

  app.delete("/api/loggedin/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Post.destroy({ where: { id: req.params.id } }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  //Get User matched against database
  app.post("/api/logindata", function(req) {
    db.User.findOne({ where: { username: req.body.username } }).then(function(
      data
    ) {
      console.log(data);
      if (data !== null) {
        console.log("Password is: " + data.dataValues.password);
        var pw = data.dataValues.password;
        if (pw === req.body.password) {
          console.log("logged in");
          userInfo.splice(0, 2, data.dataValues.id);
        }
      }
    });
  });

  app.get("/api/loggedin1", function(req, res) {
    console.log("now");
    res.json(userInfo);
  });
};
