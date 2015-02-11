var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		name: "",
		email: "",
		phone: ""
	},
	urlRoot: "https://mysterious-spire-6652.herokuapp.com/user",
	validate: function(attrs) {
		// If I were going to be fancy I'd have each of these validations broken down into
		// individual functions for each attribute, which would then run during an onblur event 
		// for each of the form fields.  (Giving the user instant feedback about whether their entry was appropriate)

		var errors = [];
		if (!attrs.name) {
			errors.push({name: 'name', message: "please provide a name"});
		} 
		if (!attrs.email || attrs.email.indexOf('@') === -1) {
			errors.push({name: 'email', message: "please provide a valid email address"});
		// I'm a fan of not using regular expressions to check for email, but
		// if one should be required, it would go in the above if statement.
		}
		if (!attrs.phone || attrs.phone.length !== 10 || !/^\d+$/.test(attrs.phone) ) {
			errors.push({name: 'phone', message: "please provide a 10 digit phone number"});
		}
		return errors.length > 0 ? errors : false;
	}
});