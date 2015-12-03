'use strict';

var user = {
  username: null
};


//$(document).ready(...
$(function() {


  // register event handler
  $('#register').on('submit', function(e) {
    e.preventDefault();
    var credentials = form2object(this);
    poll_api.register(credentials, regCb);
  });

  // login event handler
  $('#login').on('submit', function(e) {
    e.preventDefault();
    var credentials = form2object(this);
    console.log(credentials);
    poll_api.login(credentials, loginCb);
    // add user feedback
    $(".messages-container h4").html("Welcome, " + credentials.username);
  });

  // logout event handler -- stretch goal
  $('#logout').on('submit', function(e) {
    e.preventDefault();
    var credentials = form2object(this);

    poll_api.login(credentials, logoutCb);
  });



  // handlers requiring authentication



  // create new poll handler
  $('#create-poll').on('submit', function(e) {
    e.preventDefault();

    var data = form2object(this);
     console.log('the form will send ' + JSON.stringify(data, null, 4));

    poll_api.createPoll(data, createPollCb);

  });


  // edit poll title handler



  // showPoll a handler




  // delete poll event handler





}); // end doc ready function
