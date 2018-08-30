var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/reviews", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reviews.html"));
  });

  app.get("/loggedin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/loggedin.html"));
  });

  // Render 404 page for any unmatched routes
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });
};
