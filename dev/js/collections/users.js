var Backbone = require('backbone');
var User = require('../models/user');

module.exports = Backbone.Collection.extend({
	model: User,
	url: 'https://practice-api.herokuapp.com/user'
});

