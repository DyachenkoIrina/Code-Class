// eslint-disable-next-line import/no-extraneous-dependencies
const nodemailer = require("nodemailer");

const defaultConfig =
  "smtp://elbrustestemail@gmail.com:bpyvoeszkymcqdli@smtp.gmail.com";

const transporter = nodemailer.createTransport(defaultConfig, {
  from: "Test mailer <elbrustestemail@gmail.com>",
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log("Server is ready to take our messages: ", success);
});

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log("Email sent: ", info);
  });
};

function generateConfirmationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

module.exports = { mailer, generateConfirmationCode };
