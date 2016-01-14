'use strict';

// lcn adds
// var url = 'http://localhost:3000'; //CHANGE TO GH PAGES URL

// km tweaks
var url = 'http://teamsurvey.github.io/survey-front-end';
// var url = 'http://localhost:5000'; //CHANGE TO GH PAGES URL
var poll_url = "";

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

var pollAnswer = {
  pollID: null,
  answer: null
};

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
    $('.user-messages').html('<p>Welcome, ' + currUser + '. Create a poll!</p><button class="create-new">Create New Poll</button>');
    $('.hero').fadeOut(300);
    $('h1').fadeIn(300).removeClass('hidden');
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


  // used bracket notation to solve for special character in key value
  poll.id = data["_id"];

  console.log("poll id is: " + poll.id)
  poll.title = data.title;
  poll.options = data.options;
  poll.owner_id = data.owner_id;

  $('#poll-creation-container').attr('data-pollid', poll.id);

  poll_url = (url + "/#" + data["_id"]);

  console.log('poll_url is ' + poll_url);

  var newPollLink = $('<li class="load-poll" data-poll-id=" ' + data["_id"] + '"><a href="' + poll_url + ' target="_blank">' + data.title + '</a>&nbsp;&nbsp;<i data-trash-id="' + data["_id"] + '"class="fa fa-trash"></i></li>');

  $('#user-polls').fadeIn(300).removeClass('hidden');
  $('#poll-creation-container').fadeOut(300).addClass('hidden');

  $('#poll-list').append(newPollLink);

  $(".user-messages").html('<p>Success! Survey created. Click on the link below to load your survey.</p>');

  $('#create-edit-del-button-dashboard').fadeIn(300).removeClass('hidden');


};


// showPoll callback
var showPollCb = function (error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Poll listing fail!</strong>");
    return;
  }
  // grab poll from backend
  console.log('the retrieved poll is ' + JSON.stringify(data, null, 4));
   // used bracket notation to solve for special character in key value
   // seems that the returned object is wrapped in an array, so all
   // keys need to be include the data[0]
  poll.id = data[0]["_id"];


// add jQuery
$('.vote-poll-n-reslt-holder').fadeIn().removeClass('hidden');
  $('.vote-poll-container').fadeIn().removeClass('hidden');
  $('.render-poll-title').html(data[0].title);

  $('.option-one').val(data[0].options[0]);
  $('.option-two').val(data[0].options[1]);
  $('.option-three').val(data[0].options[2]);
  $('.option-four').val(data[0].options[3]);
  $('.option-five').val(data[0].options[4]);


// changing class references to id refs
  $('#option-one').html(data[0].options[0]);
  $('#option-two').html(data[0].options[1]);
  $('#option-three').html(data[0].options[2]);
  $('#option-four').html(data[0].options[3]);
  $('#option-five').html(data[0].options[4]);
  $('#rendered-poll').attr('data-currentpollid', poll.id);

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
  var id = $('#poll-creation-container').attr('data-pollid');
  var pollTitle = data.title;

  console.log('the retrieved poll is ' + JSON.stringify(data, null, 4));

  $('.load-poll').text(pollTitle);

  $(".user-messages").html("<strong>Poll updated!</strong>");

};
// end of editPollCb submit handler

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

// createPoll callback
var votePollCb = function (error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Poll create fail!</strong>");
    return;
  }
  console.log('successful returned vote data is ' + JSON.stringify(data, null, 4));

  pollAnswer.answer = data.answer;

  $('.user-messages').html('<p>Successful Vote! Your vote was ' + pollAnswer.answer + '</p>');

};

var resultsAggCb = function (error, data) {
  if (error) {
    console.error(error);
    $(".user-messages").html("<strong>Error! Poll listing fail!</strong>");
    return;
  }

  console.log('the retrieved aggregation is ' + JSON.stringify(data, null, 4));

  $('#answer01').html(data[0]["_id"]);
  $('#answer02').html(data[1]["_id"]);
  $('#answer03').html(data[2]["_id"]);
  $('#answer04').html(data[3]["_id"]);
  $('#answer05').html(data[4]["_id"]);


  $('.result01').html(data[0].count);
  $('.result02').html(data[1].count);
  $('.result03').html(data[2].count);
  $('.result04').html(data[3].count);
  $('.result05').html(data[4].count);




};






