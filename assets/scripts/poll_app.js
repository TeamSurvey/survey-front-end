'use strict';



$(document).ready(function() {

  // animate on register/login containers
  $('.register-a').on('click', function() {
    $('.API-register').fadeIn().removeClass('hidden');
  });

  $('.login-a').on('click', function() {
    $('.API-login').fadeIn().removeClass('hidden');
  });

  $('.register-a2').on('click', function() {
    $('.API-login').slideUp(300);
    $('.API-register').delay(600).slideDown(300).removeClass('hidden');
  });

  $('.login-a2').on('click', function() {
    $('.API-register').slideUp(300);
    $('.API-login').delay(600).slideDown(300).removeClass('hidden');
  });


  // create-new (poll) button click handler
  $('.user-messages').on('click', '.create-new', function() {
    console.log('clicked');
    $('#poll-creation-container').fadeIn().removeClass('hidden');

    // replace or hide user messages text

    // Create form fades in input fields fade in (for each)? Message instruct enter poll question and options.

    // On create poll click, if viewing a rendered poll, poll container fades out and poll creation container fades up
  });

  // or

 $('#create-edit-del-button-dashboard').on('click', '.create-new', function() {
    console.log('clicked');
    $('#poll-creation-container').fadeIn().removeClass('hidden');
  });



  // edit poll button click handler
  $('#create-edit-del-button-dashboard').on('click', '.edit', function() {
    console.log('clicked');
    $('#poll-edit-container').fadeIn().removeClass('hidden');
  });




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

    // fade up user-messages and create-poll button
    $('.user-messages').fadeIn().removeClass('hidden');
    $('.user-messages').html('<p>Welcome, ' + credentials.username + '. Create a poll!</p><button class="create-new">Create New Poll</button>');

    // add user feedback
    $('.messages-container h4').html('Welcome, ' + credentials.username);
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

    var newPollLink = $('<li><a href="#" data-poll-id="' + poll_url + '" class="load-poll">' + data.title + '</a></li>');

    $('#poll-list').append(newPollLink);


    $(this).fadeOut();
    // On submit, msg fades out, create form fades out, message with URL (let's vote on it) fades in, GET request created poll data, Li with a-tag of poll w data-poll-id fades in poll list ul, poll container fades up, dates populated in (for each)? Buttons populate on.

  });


  // edit poll title handler
  $('#edit-poll').on('submit', function(e) {
    e.preventDefault();

    var data = form2object(this);
     console.log('the form will send ' + JSON.stringify(data, null, 4));

    poll_api.editPoll(data, editPollCb);

    // On submit click, title patch request and populate title in the p tag.

    $(this).fadeOut();

  });



// km -- begin showPoll handler


  // showPoll handler for user poll list (READ)
    $('#show-poll').on('submit', function(e) {
    e.preventDefault();
    console.log('clicked');
<<<<<<< HEAD

    console.log('poll id is ' + JSON.stringify(poll.id, null, 4));

    poll_api.editPoll(poll.id, showPollCb);

    // On submit click, title patch request and populate title in the p tag.

    $(this).fadeOut();

=======

    console.log('poll id is ' + JSON.stringify(poll.id, null, 4));

    poll_api.editPoll(poll.id, showPollCb);

    // On submit click, title patch request and populate title in the p tag.

    $(this).fadeOut();

>>>>>>> km_feature_connect_API
  });

  //   On click of URL, URL populates in address bar, and if poll container visible, poll container repopulates. If hidden, poll container shows and populates.

  // Each option and li will have hover and active actions

// km -- end showPoll handler



  // vote button click handler (put with AJAX request section)
  $('#vote-results-button-dashboard').on('click', '.vote', function() {
    console.log('clicked');

    var data = form2object(this);
     console.log('the form will send ' + JSON.stringify(data, null, 4));

    poll_api.votePoll(data, votePollCb);
    $('.user-messages').html('<p>Successful poll deletion</p>');
  });

  // On vote click, message container updates with "thanks for your vote, your vote is [answer]. Do you want to <see poll results>?



  // see results button click handler (put with AJAX request)
//   On See Results button click, pollAnswers GET req, rendered poll fades out, poll results container fades in. Poll data from rendered poll populates here and count data fades in.

// If no poll results, fade in "nobody's taken the poll, do you want to?" Yes/no. Yes... fade out poll res container, fade in rendered poll container.

// Add X buttons to close windows.



  // delete poll event handler
  $('#create-edit-del-button-dashboard').on('click', '.delete', function() {
    console.log('clicked');

    poll_api.deletePoll(poll.id, deletePollCb);

  });


}); // end doc ready function










