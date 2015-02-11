var Backbone = require('backbone');
var User = require('../models/user');

module.exports = Backbone.Collection.extend({
	model: User,
	url: 'https://mysterious-spire-6652.herokuapp.com/user',
	intitialize: function(){}
});

