'use strict';

var createdPoll = $('#rendered-poll');
var createdPollsList = $('#poll-list');

// for poplulating the poll content into the div
var createdPollsHTML = function(poll) {
  createdPollsList.append('<div id=' + poll.id + ' class="poll-posts usr-posts"><h3>' + poll.title + '</h3><p>' + poll.description +'</p><p> poll id: '+ poll.id +'</p><p> user id: '+ poll.user_id +'</p><button class="delete-poll">Delete this listing</button></div>');
 };

// create object from form data
var form2object = function(form) {
  var data = {};
  $(form).children().each(function(index, element) {
    var type = $(this).attr('type');
    if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
      data[$(this).attr('name')] = $(this).val();
    }
  });
  return data;
};


// callback function
var callback = function callback(error, data) {
  if (error) {
    console.error(error);
    $('#result').val('status: ' + error.status + ', error: ' + error.error);
    return;
  }
  $('.user-messages').val(JSON.stringify(data, null, 4));
};


// registration callback
var regCb = function (error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Registration fail!</strong>");
    return;
  }
  console.log('data is ' + data);
};



// login callback
var loginCb = function (error, data) {

  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Login fail!</strong>");
    return;
  } else {
    console.log(JSON.stringify(data, null, 4));
  }

}; // end of login callback;



// logout callback
var logoutCb = function (error){
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Whoops! You're still logged in.</strong>");
  }
  // changeLogout();
  console.log(JSON.stringify(data, null, 4));
  console.log("Logged out");
};


// createPoll callback
var createPollCb = function (error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Poll create fail!</strong>");
    return;
  }
  console.log('successful create, data is ' + JSON.stringify(data, null, 4));

  // createdPollsHTML(poll);

};


// listUserPolls callback


// deletePoll callback






