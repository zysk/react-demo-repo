/*
    Video: https://www.youtube.com/watch?v=i62jmLC15qQ
*/

require("dotenv").config()
const {
  MAILGUN_API_KEY,
  MAILGUN_DOMAIN,
  MAILGUN_URL,
  FROM_EMAIL_ADDRESS,
  CONTACT_TO_EMAIL_ADDRESS,
} = process.env
const nodemailer = require("nodemailer")
const mailGun = require("nodemailer-mailgun-transport")
const log = console.log

// Step 1
const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY || "mailgun_api_key", // TODO:
    domain: process.env.MAILGUN_DOMAIN || "mailgun_domain", // TODO:
  },
}

// Step 2
let transporter = nodemailer.createTransport(mailGun(auth))

exports.handler = async event => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
      headers: { Allow: "POST" },
    }
  }

  const data = JSON.parse(event.body)
  if (!data.comment || !data.name || !data.email) {
    return { statusCode: 422, body: "Name, email, and comments are required." }
  }

  const mailgunData = {
    from: data.email,
    to: CONTACT_TO_EMAIL_ADDRESS,
    "h:Reply-To": data.email,
    subject: `New contact from ${data.name}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\nComment: ${data.comment}`,
  }
  return mailgun
    .comments()
    .send(mailgunData)
    .then(() => ({
      statusCode: 200,
      body: "Your form was sent successfully! We'll be in touch.",
    }))
    .catch(error => ({
      statusCode: 422,
      body: `Error: ${error}`,
    }))
}

// Step 3
// let mailOptions = {
//     from: 'abc@gmail.com', // TODO: email sender
//     to: 'cba@gmail.com', // TODO: email receiver
//     subject: 'Nodemailer - Test',
//     text: 'Wooohooo it works!!'
// };

// Step 4
// transporter.sendMail(mailOptions, (err, data) => {
//     if (err) {
//         return log('Error occurs');
//     }
//     return log('Email sent!!!');
// });
