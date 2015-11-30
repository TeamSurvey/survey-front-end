'use strict';

// function Survey(surveyID, ownerID, title, option01, option02, option03, option04, option05) {
//   this.surveyID = surveyID;
//   this.ownerID = ownerID;
//   this.title = title;
//   this.choice = {
//     option01 : option01,
//     option02 : option02,
//     option03 : option03,
//     option04 : option04,
//     option05 : option05
//   };
//   this.vote = {
//     voteOption01 : 0,
//     voteOption02 : 0,
//     voteOption03 : 0,
//     voteOption04 : 0,
//     voteOption05 : 0
//   };
// };

// var testSurvey = new Survey();


$(function() {

  // setting up AJAX to handle cookies
  // $.ajaxSetup({
  //   xhrFields: {
  //       withCredentials: true
  //   }
  // });

  // register
  $('#register').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    $.ajax({
      // url: 'http://httpbin.org/post',
      url: 'http://localhost:3000/signup',
      method: 'POST',
      contentType: 'application/json; charset=utf-8',
      processData: false,
      data: formData,
      dataType: 'json',
      // adding preflight
      xhrFields: {
        withCredentials: true
      }
    }).done(function(data) {
      $('.user-messages').html('<p>Successful registration. </p><p>username is ' + data.form.username + 'and password is ' + data.form.password + '</p>');
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });

  // login
  $('#login').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    $.ajax({
      // url: 'http://httpbin.org/post',
      url: 'http://localhost:3000/login',
      method: 'POST',
      contentType: 'application/json; charset=utf-8',
      processData: false,
      data: formData,
      dataType: 'json',
      // adding preflight
      xhrFields: {
        withCredentials: true
      }
    }).done(function(data) {
      $('.user-messages').html('<p>Successful login.</p><p>username is ' + data.form.username + ' and password is ' + data.form.password + '</p>');
      $('.messages-container h4').html('Welcome, ' + data.form.username);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });

  // create survey
  $('#survey').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    $.ajax({
      url: 'http://httpbin.org/post',
      // url: 'http://localhost:3000/surveys',
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData
    }).done(function(data) {
      $('.user-messages').html('<p>Successful survey creation, ' + data.form.username + '.</p><p> Question is ' + data.form.title + '</p><p> Choice01 is ' + data.form.choice01 + '</p><p> Choice02 is ' + data.form.choice02 + '</p><p> Choice03 is ' + data.form.choice03 + '</p><p> Choice04 is ' + data.form.choice04 + '</p><p> Choice05 is ' + data.form.choice05);
      $('.messages-container h4').html('Welcome, ' + data.form.username);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });


    // load survey
  $('.load-survey').on('click', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    $.ajax({
      url: 'http://httpbin.org/post',
      // url: 'http://localhost:3000/survey/' + object.ID,
      // method: 'GET',

      // using POST for testing purposes only
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData
    }).done(function(data) {
      // populate data into fields. Finding correct method
      var choice01 = $("#rendered-survey label[data-choice='01']");
      var choice02 = $("#rendered-survey label[data-choice='02']");
      var choice03 = $("#rendered-survey label[data-choice='03']");
      var choice04 = $("#rendered-survey label[data-choice='04']");
      var choice05 = $("#rendered-survey label[data-choice='05']");

      $('#rendered-survey h4').html(data.form.title);

      choice01.html("data.form.choice01");
      choice02.html("data.form.choice02");
      choice03.html("data.form.choice03");
      choice04.html("data.form.choice04");
      choice05.html("data.form.choice05");

      console.log(choice01.html());
      $('.user-messages').html('<p>Successful survey listing, ' + data.form.username + '</p><p> Question is ' + data.form.title + '</p><p> Choice01 is ' + data.form.choice01 + '</p><p>Choice02 is ' + data.form.choice02 + '</p><p>Choice03 is ' + data.form.choice03 + '</p><p>Choice04 is ' + data.form.choice04 + '</p><p> Choice05 is ' + data.form.choice05);
      // see what the data actually looks like
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });



});
