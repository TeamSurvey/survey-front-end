


// this is reference jQuery actions for playing in the UX




'use strict';


$(function() {


  $('.user-messages').html('<p>Successful registration. </p><p>username is ' + data.form.username + 'and password is ' + data.form.password + '</p>');
  console.log(data);

  $('.user-messages').html('<p>Successful login.</p><p>username is ' + data.form.username + ' and password is ' + data.form.password + '</p>');
  $('.messages-container h4').html('Welcome, ' + data.form.username);

  $('.user-messages').html('<p>Successful survey creation, ' + data.form.username + '.</p><p> Question is ' + data.form.title + '</p><p> Choice01 is ' + data.form.choice01 + '</p><p> Choice02 is ' + data.form.choice02 + '</p><p> Choice03 is ' + data.form.choice03 + '</p><p> Choice04 is ' + data.form.choice04 + '</p><p> Choice05 is ' + data.form.choice05);
  $('.messages-container h4').html('Welcome, ' + data.form.username);

  $('.user-messages').html('<p>Successful survey listing, ' + data.form.username + '</p><p> Question is ' + data.form.title + '</p><p> Choice01 is ' + data.form.choice01 + '</p><p>Choice02 is ' + data.form.choice02 + '</p><p>Choice03 is ' + data.form.choice03 + '</p><p>Choice04 is ' + data.form.choice04 + '</p><p> Choice05 is ' + data.form.choice05);




});
