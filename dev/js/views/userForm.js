var Backbone = require('backbone');
var tpl = require('../../templates/userForm.tpl');

module.exports = Backbone.View.extend({
	template: tpl,
	className: 'userForm',
	initialize: function(){
		this.listenTo(this.model, 'invalid', this.showErrors);
	},
	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	},
	events: {
		'click button#userCreator': 'save'
	},
	save: function(e){
		e.preventDefault();

		var newName = this.$('input[name=name]').val();
		var newEmail = this.$('input[name=email]').val();
		var newPhone = this.$('input[name=phone]').val();

		var that = this;
		this.model.save({name: newName, email: newEmail, phone: newPhone}, {
			success: function(model, response, options) {
				that.hideErrors();
				that.collection.add(this.model);
			}, error: function(model, xhr, options) {
				var errors = xhr.responseJSON;
				var newErrors = [];
				if (errors.phone) {
					newErrors.push({name: 'phone', message: errors.phone.join(", ")});
				}
				if (errors.name) {
					newErrors.push({name: 'name', message: errors.name.join(", ")});
				}
				if (errors.email) {
					newErrors.push({name: 'email', message: errors.email.join(", ")});
				}
				that.showErrors(model, newErrors);
			}
		});
	},
	hideErrors: function(){
		this.$('input').removeClass('error');
		this.$('.help').text('');
	},
	showErrors: function(model, error, options){
		error.forEach(function(myError) {
			this.$("." + myError.name + ".help").text(myError.message);
			this.$("." + myError.name + "Input").addClass('error');
		}, this);
	}
});