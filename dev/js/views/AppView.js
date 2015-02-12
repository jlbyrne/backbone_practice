var Backbone = require('backbone');
var $ = require('jquery');
var tpl = require('../../templates/layout.tpl');
var User = require('../models/user');
var Users = require('../collections/users');
var UsersView = require('../views/users');
var UserForm = require('../views/userForm');

module.exports = Backbone.View.extend({
  Models: {},
  Views: {
    Users: UsersView
  },
  Collections: {
    Users: Users
  },
  template: tpl,
  events: {
    'click button.userForm': 'addForm'
  },
  render: function() {
    this.$el.html(this.template());
    this.start();
    return this;
  },
  // I want a separate start function so that the basic
  // layout template renders before the user data is fetched.
  start: function(){
    this.users = new this.Collections.Users();
    this.usersView = new this.Views.Users({collection: this.users});
    this.$el.append(this.usersView.render().el);
    this.users.fetch();
  },
  addForm: function() {
    // see comment on line 67 of userForm.js
    if ( this.form == null || this.form.$el.html().length === 0 ){
      var newUser = new User({});
      this.form = new UserForm({model: newUser, collection: this.users, el: $('.formContainer')});
      this.form.render();
    } else {
      this.form.toggle();
    }
  }
});
