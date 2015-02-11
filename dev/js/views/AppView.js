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
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  start: function(){
    this.users = new this.Collections.Users();
    this.usersView = new this.Views.Users({collection: this.users});
    this.$el.append(this.usersView.render().el);
    this.users.fetch();
  },
  events: {
    'click button.userForm': 'addForm'
  },
  addForm: function() {
    var newUser = new User({});
    var form = new UserForm({model: newUser, collection: this.users, el: $('.formContainer')});
    form.render();
  }
});
