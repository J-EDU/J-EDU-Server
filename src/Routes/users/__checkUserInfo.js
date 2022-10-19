/* eslint-disable*/

// const checkInfo = function ValidateEmail(mail)
// {
//  if (/(\W|^)[\w.+-]*@gmail.com(\W|$)/.test(myForm.emailAddr.value))
//   {
//     //return (true)
//     //next();

//     // if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/.test(myForm.emailAddr.value))
//     // next();
//   }
//     alert("You have entered an invalid email address!")
//     return (false)

// }

const __checkuserinfo = (req, res, next) => {

   
    

  //email
  // /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
//   if (
//     router.get(
//       "/user/signup:email(/[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)",
//       (req, res) => {
//         const email = req.body.email;
//         res.send({
//           userEmail: email,
//         });
//       }
//     )
//   )
//     next();

  //phone
  // /[+]\d{3}? \d{9}$/
//   if (
//     router.get("/user/signup:phoneNumber(/([+]d{3}?d{9}$)/", (req, res) => {
//       const phoneNumber = req.body.phoneNumber;
//       res.send({
//         userPhoneNumber: phoneNumber,
//       });
//     })
//   )
//     next();

  //passowrd / Minimum eight characters, at least one letter and one number
  // /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
//   if (
//     router.get(
//       "/user/signup:password(/(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$)/)",
//       (req, res) => {
//         const password = req.body.password;
//         res.send({
//           userPassword: password,
//         });
//       }
//     )
//   )
//     next();
};

// const emailValidator = require('email-validator');

// if(emailValidator.validate('/[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/'))
// { console.log("validate");}
// else{console.log("not");}

module.exports = __checkuserinfo;
