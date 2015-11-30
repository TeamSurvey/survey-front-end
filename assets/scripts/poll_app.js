'use strict';

var user = {
  id: null,
  token: null
};


//$(document).ready(...
$(function() {

  // list all polls
  // poll_api.listAllPolls(listAllPollsCb);

  // register event handler
  // $('#register').on('submit', function(e) {
  //   var credentials = wrap('credentials', form2object(this));
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
  $('#create-poll').on('submit', function(e) {
    var data = form2object(this);
    console.log("clicked for create poll action");

    poll_api.createPoll(session.token, data, createPollCb);
    e.preventDefault();
  });


  // NEW voteOnPoll a poll handler
  $('#vote').on('submit', function(e) {
    var data = form2object(this);
    console.log("clicked for vote on poll action");
    // test to see if the data was wrapped
    console.log(data);

    console.log(data.id);
    var id = data.id;
    // test to see if the session.token is recognized
    console.log(session.token);

    poll_api.updateFavPoll(id, data, session.token, updateFavPollCb);
    e.preventDefault();
  });



  // delete poll event handler
  $('#user-polls').on('click', '.delete-poll', function() {

    console.log("clicked for delete action");

    // find the poll_id attached to the div
    var thisPollId = $(this).closest('.poll-posts').attr('id');

    // confirmation the poll_id was captured
    console.log(thisPollId);

    // change bg color as a test
    $(this).closest('.poll-posts').css({'background-color': 'purple', 'font-weight': 'bold'});

    // do an ajax DELETE request
    poll_api.deletePoll(thisPollId, session.token, deletePollCb);

    // update the poll list in the viewport
    $(this).closest('.poll-posts').remove();


    // find poll in all polls listing and remove
    // still debugging this
    var thisPollInAllPolls = $('#all-poll').find('.poll-posts').attr(thisPollId)
    thisPollInAllPolls.remove();

  });


});
// end doc ready function
