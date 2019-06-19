const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PW
  }
});

const sendMail = async ({ from }) => {
  const mailOptions = {
    from, // sender address
    to: process.env.EMAIL, // list of receivers
    subject: "This is a test", // Subject line
    html: "<p>Worked!</p>" // plain text body
  };
  await transporter.sendMail(mailOptions);
};

module.exports = { sendMail };
