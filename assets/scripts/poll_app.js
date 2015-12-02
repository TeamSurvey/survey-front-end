'use strict';

var user = {
  username: null
};


//$(document).ready(...
$(function() {


  // register event handler
  $('#register').on('submit', function(e) {
    var credentials = form2object(this);
    console.log(credentials);

    poll_api.register(credentials, regCb);
    e.preventDefault();
  });

  // login event handler
  $('#login').on('submit', function(e) {
    var credentials = form2object(this);
    console.log(credentials);

    poll_api.login(credentials, loginCb);
    e.preventDefault();
    // add user feedback
    $(".messages-container h4").html("Welcome, " + credentials.username);
  });

  // logout event handler -- stretch goal
  $('#logout').on('submit', function(e) {
    var credentials = form2object(this);

    poll_api.login(credentials, logoutCb);
    e.preventDefault();
  });



  // handlers requiring authentication



  // create new poll handler



  // edit poll title handler



  // showPoll a handler




  // delete poll event handler





}); // end doc ready function
