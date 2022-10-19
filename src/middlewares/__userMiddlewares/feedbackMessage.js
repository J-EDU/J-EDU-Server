import { SMTPClient } from 'emailjs';
const {feedbackModel} = require ('../../models/feedback.model');
const { UsersDB } = require("../../models");

const client = new SMTPClient({
	user: 'warriorsjedu@gmail.com',
	password: 'password',
	host: 'smtp.gmail.com',
	ssl: true,
});

// send the message and get a callback with an error or details of the message that was sent
client.send(
	{
		text: 'i hope this works',
		from: 'warriorsjedu@gmail.com',
		to: 'someone <someone@your-email.com>, another <another@your-email.com>',
		// cc: 'else <else@your-email.com>',
		subject: 'testing emailjs',
	},
	(err, message) => {
		console.log(err || message);
	}
);