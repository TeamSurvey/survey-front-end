'use strict';

var createdPoll = $('#rendered-poll');
var createdPollsList = $('#poll-list');

//ben changes start
var poll = {
 id: 0,
 title: null,
 options: [],
 owner_id: null
};
//ben changes end

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


// showPoll callback
var showPollCb = function (error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Poll listing fail!</strong>");
    return;
  }
  // grab poll from backend
  // var poll = data.poll;
  console.log('the retrieved poll is ' + JSON.stringify(data, null, 4));

};



// listAllPolls callback
var listAllPollsCb = function (error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Poll listing fail!</strong>");
    return;
  }
  // grab polls from backend
  var polls = data.polls;

  // polls.forEach(function(poll){
  //   listPollHTML(poll);
  // });

};


// updatePollTitle callback
var editPollCb = function (error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Poll edit fail!</strong>");
    return;
  }
  // console.log test
  console.log('new poll data is ' + data);

  var pollTitle = data.title;

  console.log('new poll title is ' + pollTitle.id);

  $(".user-messages").html("<strong>Poll updated!</strong>");

};
// end of updateFavBike submit handler



// deletePoll callback
var deletePollCb = function (error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Poll deletion fail!</strong>");
    return;
  }

  // find li by data attribute, delete that li in the 'your polls list and hide the rendered survey container? If so, do in click handler js section'

  $(".user-messages").html("<strong>Poll deletion success!</strong>");



};






