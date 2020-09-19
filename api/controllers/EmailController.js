/**
 * EmailController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	create: function (req, res) {
		const email = req.body
		console.log(req.body)
		sails.hooks.email.send(
		 "sendEmail",
		 {
			 firstname: email.firstname,
			 lastname: email.lastname,
			 from: email.from,
			 to: email.to,
			 subject: email.subject,
			 text: email.text
		 },
		 {
			 from: email.from,
			 to: email.to,
			 subject: email.subject,
			 text: email.text
		 },
		 function(err) {
			 console.log(err || "Mail Sent!");
		 	}
		 )
	 }
};
