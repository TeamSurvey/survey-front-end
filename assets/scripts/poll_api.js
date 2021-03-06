'use strict';

// api HTTP requests/responses

var poll_api = {
  pollWatcher: null,
  url: 'https://hidden-springs-2370.herokuapp.com',
  // url: 'http://localhost:3000',

  ajax: function(config, cb) {
    $.ajaxSetup({
      xhrFields: {
        withCredentials: true
      }
    });
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  },

  register: function(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/signup',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
    }, callback);
  },

  login: function(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/login',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
    }, callback);
  },


  //Authenticated api actions

  // logout function is a stretch goal
  logout: function(id, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/logout',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(id),
    }, callback);
  },

  createPoll: function(data, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/polls',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(data),
    }, callback);
  },

  showPoll: function(id, callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/polls/' + id,
    }, callback);
  },

  votePoll: function(data, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/pollAnswers',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(data),
    }, callback);
  },

  resultsAgg: function(data, callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/pollAnswers/' + data,
    }, callback);
  },

  listPolls: function (callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/polls/' + id,
      }, callback);
  },


  editPoll: function (id, data, callback) {
    this.ajax({
      method: 'PATCH',
      url: this.url + '/polls/' + id,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(data),
    }, callback);
  },


  deletePoll: function (id, callback) {
    this.ajax({
      method: 'DELETE',
      url: this.url + '/polls/' + id,
      contentType: 'application/json'
    }, callback);
  }

};

