/*eslint-disable*/
// var {emailjs} = require('emailjs');
// // import { SMTPClient } from 'emailjs';
// const nodemailer = require("nodemailer");
// const candymail = require('candymail')


// const { feedbackModel } = require("../../models/feedback.model");
// const { UsersDB } = require("../../models");



const __feedbackMessage = async (req, res, next) => {
	next();

// 	candymail.init(automation.workflows, {
// 		mail: {
// 			host: 'smtp.gmail.com',
// 			port: 465,
// 			secure: true,
// 			auth: {
// 				user: 'yourgmail@gmail.com',
// 				pass: 'yourapplicationpassword'
// 			},
// 			tls: {
// 				rejectUnauthorized: true
// 			},
// 		},
// 		hosting: {url: 'stevenlohrenz.com'},
// 		db: {reset: true},
// 		debug: {trace: true}
// 	})
// 	.then(() => {
// 		candymail.start();
// 	});



	
// 	let testAccount = await nodemailer.createTestAccount();

// 	let transporter = nodemailer.createTransport({
// 		host: 'imap.gmail.com',
// 		port: 993,
// 		secure: false, // true for 465, false for other ports
// 		auth: {
// 		  user: 'warriorsjedu@gmail.com', // generated ethereal user
// 		  pass: 'Jedu#2022', // generated ethereal password
// 		},
// 	  });

// 	  let info = await transporter.sendMail({
// 		from: '"Fred Foo 👻" <warriorsjedu@gmail.com>', // sender address
// 		to: "warriorsjedu@gmail.com", // list of receivers
// 		subject: "Hello ✔", // Subject line
// 		text: "Hello world?", // plain text body
// 		html: "<b>Hello world?</b>", // html body
// 	  });

	  
//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

	// var transporter = nodemailer.createTransport({
	// 	service: 'gmail',
	// 	auth: {
	// 	  user: 'warriorsjedu@gmail.com',
	// 	  pass: 'Jedu#2022'
	// 	}
	//   });
	//   var mailOptions = {
	// 	from: 'warriorsjedu@gmail.com',
	// 	to: 'bayanjawawdeh9@gmail.com',
	// 	subject: 'Sending Email using Node.js',
	// 	text: 'That was easy!'
	//   };
	  
	//   transporter.sendMail(mailOptions, function(error, info){
	// 	if (error) {
	// 	  console.log(error);
	// 	} else {
	// 	  console.log('Email sent: ' + info.response);
	// 	}
	//   });



// 	var server = SMTPClient.server.connect({
// 		user: 'warriorsjedu@gmail.com',
// 		password: 'Jedu#2022',
// 		host: 'smtp.gmail.com',
// 		ssl: true
// 	  });

	  
// server.send({
// 	text: 'Hey howdy',
// 	from: 'NodeJS',
// 	to: 'Wilson <fouzishiyyab.fs@gmail.com>',
// 	cc: '',
// 	subject: 'Greetings'
//   }, function (err, message) {
// 	console.log(err || message);
//   });

//	res.send("test")
//   const client = new SMTPClient({
//     user: "warriorsjedu@gmail.com",
//     password: "password",
//     host: "smtp.gmail.com",
//     ssl: true,
//   });

//   emailjs.send("service_i9hh4sf","template_re9i0s7",{
// 	from_name: "Fus Fus",
// 	to_name: "Warrios",
// 	message: "HI warrios",
// 	reply_to: "Fus Fus ",
// 	email: "fouzishiyyab.fs@gmail.com",
// 	});
  // send the message and get a callback with an error or details of the message that was sent
//   client.send(
//     {
//       text: "i hope this works",
//       from: "warriorsjedu@gmail.com",
//       to: "someone <someone@your-email.com>, another <another@your-email.com>",
//       // cc: 'else <else@your-email.com>',
//       subject: "testing emailjs",
//     },
//     (err, message) => {
//       console.log(err || message);
//     }
//   );
};
module.exports = __feedbackMessage;
