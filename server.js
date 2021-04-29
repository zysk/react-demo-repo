const bodyParser = require("body-parser")
const express = require("express")
const nodemailer = require("nodemailer")
const app = express()
require("dotenv").config()
const { GMAIL_ADDRESS, GMAIL_PASSWORD } = process.env
app.use(bodyParser.urlencoded())
const contactAddress = "hey@yourwebsite.com"
const mailer = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "rishikalokesh@gmail.com",
    pass: "Varshini@25",
  },
})
app.post("/say-hello", function (req, res) {
  mailer.sendMail(
    {
      from: req.body.from,
      to: [contactAddress],
      subject: req.body.subject || "[No subject]",
      html: req.body.message || "[No message]",
    },
    function (err, info) {
      if (err) return res.status(500).send(err)
      res.json({ success: true })
    }
  )
})
app.listen(8000)
