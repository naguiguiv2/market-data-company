const nodemailer = require("nodemailer");

const emailTemplate = ({ name, company, message }) => {
  return `
    <h1>${name}</h1>
    <h3>${company}</h3>
    <p>${message}</p>
  `;
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PW
  }
});

const sendMail = async ({ from, name, company, message }) => {
  const mailOptions = {
    from,
    to: process.env.EMAIL,
    subject: `MDC PDF Request from ${name}`,
    html: emailTemplate({ name, company, message })
  };
  await transporter.sendMail(mailOptions);
};

module.exports = { sendMail };
