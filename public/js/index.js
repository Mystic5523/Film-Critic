$(document).ready(function() {
  var username = $("#user_name_signup");
  var email = $("#email");
  var password = $("#password_signup");

  $(document).on("click", "#agree", signupData);
  $(document).on("");

  //Click event for the log in modal
  $(document).on("click", "#loginModal", loginData);

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
  function loginData(event) {
    event.preventDefault;
    loginUser({
      username: $("#user_name_login")
        .val()
        .trim(),
      password: $("#password_login")
        .val()
        .trim()
    });
  }
  //Function for checking the credentials against the database
  function loginUser(userInfo) {
    $.post("/api/logindata", userInfo).then(getUserInfo);
  }

  function createUser(userInfo) {
    $.post("/api/userdata", userInfo).then(getUserInfo);
  }
});
