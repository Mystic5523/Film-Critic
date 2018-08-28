$(document).ready(function() {
  // Get references to page elements
  // var $exampleText = $("#example-text");
  // var $exampleDescription = $("#example-description");
  // var $submitBtn = $("#submit");
  // var $exampleList = $("#example-list");
  var username = $("#user_name_signup");
  var email = $("#email");
  var password = $("#password_signup");

  $(document).on("click", "#agree", signupData);

  //Click event for the log in modal
  $(document).on("click", "#loginModal", loginData);

  // The API object contains methods for each kind of request we'll make
  // var API = {
  //   saveExample: function(example) {
  //     return $.ajax({
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       type: "POST",
  //       url: "api/examples",
  //       data: JSON.stringify(example)
  //     });
  //   },
  //   getExamples: function() {
  //     return $.ajax({
  //       url: "api/examples",
  //       type: "GET"
  //     });
  //   },
  //   deleteExample: function(id) {
  //     return $.ajax({
  //       url: "api/examples/" + id,
  //       type: "DELETE"
  //     });
  //   }
  // };

  // // refreshExamples gets new examples from the db and repopulates the list
  // var refreshExamples = function() {
  //   API.getExamples().then(function(data) {
  //     var $examples = data.map(function(example) {
  //       var $a = $("<a>")
  //         .text(example.text)
  //         .attr("href", "/example/" + example.id);

  //       var $li = $("<li>")
  //         .attr({
  //           class: "list-group-item",
  //           "data-id": example.id
  //         })
  //         .append($a);

  //       var $button = $("<button>")
  //         .addClass("btn btn-danger float-right delete")
  //         .text("ｘ");

  //       $li.append($button);

  //       return $li;
  //     });

  //     $exampleList.empty();
  //     $exampleList.append($examples);
  //   });
  // };

  // // handleFormSubmit is called whenever we submit a new example
  // // Save the new example to the db and refresh the list
  // var handleFormSubmit = function(event) {
  //   event.preventDefault();

  //   var example = {
  //     text: $exampleText.val().trim(),
  //     description: $exampleDescription.val().trim()
  //   };

  //   if (!(example.text && example.description)) {
  //     alert("You must enter an example text and description!");
  //     return;
  //   }

  //   API.saveExample(example).then(function() {
  //     refreshExamples();
  //   });

  //   $exampleText.val("");
  //   $exampleDescription.val("");
  // };

  // // handleDeleteBtnClick is called when an example's delete button is clicked
  // // Remove the example from the db and refresh the list
  // var handleDeleteBtnClick = function() {
  //   var idToDelete = $(this)
  //     .parent()
  //     .attr("data-id");

  //   API.deleteExample(idToDelete).then(function() {
  //     refreshExamples();
  //   });
  // };

  $(document).ready(function() {
    $(".sidenav").sidenav();
  });

  $(document).ready(function() {
    $(".modal").modal();
  });
  $(document).on("click", "#reviews", function(event) {
    event.preventDefault();
    $("#welcome").hide();
    $("#reviews-list").show();
  });

  function signupData(event) {
    event.preventDefault;
    createUser({
      username: username.val().trim(),
      email: email.val().trim(),
      password: password.val().trim()
    });
  }

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
    $("#welcome").hide();
    $("#logged-in").show();
    $("#reviews-list").hide();
  }

  function createUser(userInfo) {
    $.post("/api/userdata", userInfo).then(getUserInfo);
  }

  //Function for checking the credentials against the database
  function loginUser(userInfo) {
    $.post("/api/logindata", userInfo).then(getUserInfo);
  }
});
