'use strict';



$(document).ready(function() {

  // animate on register/login containers
  $('.register-a').on('click', function() {
    $('.API-register').fadeIn();
    $('.API-register').removeClass('hidden');
  });

  $('.login-a').on('click', function() {
    $('.API-login').fadeIn();
    $('.API-login').removeClass('hidden');
  });

  $('.register-a2').on('click', function() {
    $('.API-login').slideUp(300);
    $('.API-register').delay(600).slideDown(300);
    $('.API-register').removeClass('hidden');
  });

  $('.login-a2').on('click', function() {
    $('.API-register').slideUp(300);
    $('.API-login').delay(600).slideDown(300);
    $('.API-login').removeClass('hidden');
  });


  // create button click handler
  //   On create but click, p tag text fades out? Message fades out?

  // Create form fades in input fields fade in (for each)? Message instruct enter poll question and options.

  // On create poll click, if viewing a rendered poll, poll container fades out and poll creation container fades up


  // edit button click handler

  // On edit click, edit title container fades up.


  // vote button click handler (put with AJAX request section)
  // On vote click, message container updates with "thanks for your vote, your vote is [answer]. Do you want to <see poll results>?



  // see results button click handler (put with AJAX request)
//   On See Results button click, pollAnswers GET req, rendered poll fades out, poll results container fades in. Poll data from rendered poll populates here and count data fades in.

// If no poll results, fade in "nobody's taken the poll, do you want to?" Yes/no. Yes... fade out poll res container, fade in rendered poll container.

// Add X buttons to close windows.




  // register event handler
  $('#register').on('submit', function(e) {
    e.preventDefault();
    var credentials = form2object(this);
    poll_api.register(credentials, regCb);

     // hide register container
    $('.API-register').slideUp();
  });





  // login event handler
  $('#login').on('submit', function(e) {
    e.preventDefault();
    var credentials = form2object(this);
    console.log(credentials);
    poll_api.login(credentials, loginCb);

    // hide login container
    $('.API-login').slideUp();

    // change text in #hero p tag (user message box?), add create button

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

    //create form fades in, user message box gives instructions

    // On submit, msg fades out, create form fades out, message with URL (let's vote on it) fades in, GET request created poll data, Li with a-tag of poll w data-poll-id fades in poll list ul, poll container fades up, dates populated in (for each)? Buttons populate on.

  });


  // edit poll title handler

  // On submit click, title patch request and populate title in the p tag.



  // showPoll a handler

  //   On click of URL, URL populates in address bar, and if poll container visible, poll container repopulates. If hidden, poll container shows and populates.

  // Each option and li will have hover and active actions




  // delete poll event handler
  // On delete click, rendered poll container fades out, message feedback, successful deletion.





}); // end doc ready function










