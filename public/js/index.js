$(document).ready(function() {
  var username = $("#user_name_signup");
  var email = $("#email");
  var password = $("#password_signup");
  var title = $("#film-name");
  var body = $("#review-text");
  var rating = $("#test5");

  $(document).on("click", "#agree", signupData);
  $(document).on("");

  //Click event for the log in modal
  $(document).on("click", "#loginModal", myFunction);

  function myFunction(event) {
    event.preventDefault();
    loginData();
    setTimeout(Query1, 1500);
  }

  $(document).on("click", "#submit-review", postData);

  $(document).ready(function() {
    $(".sidenav").sidenav();
  });

  $(document).ready(function() {
    $(".modal").modal();
  });

  function signupData(event) {
    event.preventDefault;
    createUser({
      username: username.val().trim(),
      email: email.val().trim(),
      password: password.val().trim()
    });
  }

  //Function for getting thwe username and password when they login
  function loginData() {
    loginUser({
      username: $("#user_name_login")
        .val()
        .trim(),
      password: $("#password_login")
        .val()
        .trim()
    });
  }

  function postData(event) {
    event.preventDefault;
    createPost({
      title: title.val().trim(),
      body: body.val(),
      rating: rating.val()
    });
  }

  //Function for checking the credentials against the database
  function loginUser(userInfo) {
    $.post("/api/logindata", userInfo);
  }

  function createUser(userInfo) {
    $.post("/api/userdata", userInfo);
  }

  function createPost(postInfo) {
    console.log(postInfo);
    $.post("/api/posts", postInfo);
  }

  function Query1() {
    var currentURL = window.location.origin;
    // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
    $.ajax({ url: currentURL + "/api/loggedin1", method: "GET" }).then(function(
      userInfo
    ) {
      console.log(userInfo);
      if (userInfo == "") {
        $("#login").click();
        $(".modal-content").css("color", "red");
        $(".modal-content").prepend("<h4>Invalid Credentials! Try Again!<h4>");
      } else {
        window.location.href = "/loggedin";
      }
    });
  }
});
