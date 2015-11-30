'use strict';

var user = {
  id: null,
  token: null
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
  });

  // logout event handler
  $('#logout').on('submit', function(e) {
    var credentials = form2object(this);

    poll_api.login(credentials, logoutCb);
    e.preventDefault();
  });



  // handlers requiring authentication



  // create new poll handler



  // voteOnPoll a poll handler




  // delete poll event handler





}); // end doc ready function
