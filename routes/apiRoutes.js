var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
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
    //console.log(req.body.username);
    db.User.findOne({ where: { username: req.body.username } }).then(function(data, res) {
      //console.log(data);
      console.log("Password is: " + data.dataValues.password);
      var pw = data.dataValues.password;
      if (pw === req.body.password) {
        console.log("logged in");
      } else {
        console.log("invalid credentials");
      }
    });
  });
}
