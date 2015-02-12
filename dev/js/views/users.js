var Backbone = require('backbone');
var UserView = require('./user');

module.exports = Backbone.View.extend({
	className: 'userList',
	initialize: function(){
		this.listenTo(this.collection, 'add', this.addOne);
		this.listenTo(this.collection, 'reset', this.addAll);
	},
	render: function(){
		this.addAll();
		return this;
	},
	addOne: function(user){
		var userView = new UserView({model: user});
		this.$el.append(userView.render().el);
	},
	addAll: function(){
		if (this.collection.length > 0){
			this.$el.empty();
			this.collection.forEach(this.addOne, this);
		}
	}
});