'use strict';

// api HTTP requests/responses

var poll_api = {
  pollWatcher: null,
  url: 'http://localhost:3000',

  ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  },

  register: function(credentials, callback) {
    this.ajax({
      method: 'POST',
      // url: 'http://httpbin.org/post',
      url: this.url + '/signup',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      xhrFields: {
        withCredentials: true
      }
      // dataType: 'json'
    }, callback);
  },

  login: function(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/login',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      xhrFields: {
        withCredentials: true
      }
      // dataType: 'json'
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
      xhrFields: {
        withCredentials: true
      }
      // dataType: 'json'
    }, callback);
  },

  createPoll: function (data, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/polls',
      // headers: {
      //   Authorization: 'Token token=' + token
      // },
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(data),
      xhrFields: {
        withCredentials: true
      },
      // dataType: 'json'
    }, callback);
  },

  showPoll: function (id, callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/polls/' + id,
      // headers: {
      //   Authorization: 'Token token=' + token
      // },
      xhrFields: {
        withCredentials: true
      }
      // dataType: 'json'
    }, callback);
  },

  listUserPolls: function (callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/polls',
      // headers: {
      //   Authorization: 'Token token=' + token
      // },
      xhrFields: {
        withCredentials: true
      }
      // dataType: 'json'
      }, callback);
  },


  editPollTitle: function (id, data, callback) {
    this.ajax({
      method: 'PATCH',
      url: this.url + '/polls/' + id,
      // headers: {
      //   Authorization: 'Token token=' + token
      // },
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(data),
      xhrFields: {
        withCredentials: true
      }
      // dataType: 'json'
    }, callback);
  },


  deletePoll: function (id, callback) {
    this.ajax({
      method: 'DELETE',
      url: this.url + '/polls/' + id,
      // headers: {
      //   Authorization: 'Token token=' + token
      // },
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(id),
      xhrFields: {
        withCredentials: true
      },
      // dataType: 'json'
    }, callback);
  },

// watchPoll function is a stretch goal
  watchPoll: function (id) {
    var url = this.url + '/polls/' + id + '/watch';
    // var auth = {
    //   Authorization: 'Token token=' + token
    // };
    // xhrFields: {
    //     withCredentials: true
    //   };
    this.pollWatcher = resourceWatcher(url, auth); //jshint ignore: line
    return this.pollWatcher;
  }

};

