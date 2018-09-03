var db = require("../models");
var userInfo = require("../data/userInfo");
var allPosts = require("../data/userInfo");

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

  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
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

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    //prettier-ignore
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  //Get User matched against database
  app.post("/api/logindata", function(req, res) {
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
