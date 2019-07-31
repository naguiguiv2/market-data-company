const nodemailer = require('nodemailer')

const emailTemplate = ({ name, email, company, message }) => {
	return `
        <h1>This email was from: ${name}</h1>
        <h1>${name}'s email: ${email}</h1>
        ${company && `<h3>The company ${name} is from: ${company}</h3>`}
        ${message && `<p>${name}'s message: ${message}</p>`}
    `
}

const transporter = nodemailer.createTransport({
	secure: false,
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
