const nodemailer = require('nodemailer')

const emailTemplate = ({ name, email, company, message }) => {
	return `
		<h1>${name}</h1>
		<h1>${email}</h1>
    ${company && `<h3>${company}</h3>`}
    ${message && `<p>${message}</p>`}
  `
}

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PW
	}
})

const sendMail = async ({ email, name, company, message }) => {
	const mailOptions = {
		from: email,
		to: process.env.EMAIL,
		subject: `MDC PDF Request from ${name}`,
		html: emailTemplate({ name, email, company, message })
	}
	await transporter.sendMail(mailOptions)
}

module.exports = { sendMail }
