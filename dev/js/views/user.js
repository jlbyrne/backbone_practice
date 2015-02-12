var Backbone = require('backbone');
var tpl = require('../../templates/user.tpl');
var $ = require('jquery');

module.exports = Backbone.View.extend({
	template: tpl,
	className: 'user',
	id: function(){
		return 'user' + (this.model ? this.model.get('id') : null);
	},
	initialize: function(){
		this.listenTo(this.model, 'add', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
	},
	render: function(){
		this.$el.html(this.template({model: this.model}));
		return this;
	},
	events: {
		'click button.delete-btn': 'removeUser'
	},
	removeUser: function(){
		var that = this;
		$(this.el).slideUp("slow", function(){
			that.$el.remove();
			that.model.destroy();
		});
	}
});