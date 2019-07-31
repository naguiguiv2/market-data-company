import { validateEmail } from '../../utils/validator'
import { sendMail } from '../../services/emailService'

export default async (req, res) => {
	try {
		const { email, firstName, company, message } = req.body

		if (!validateEmail(email)) {
			res.status(400).send({
				error: 'Not a valid email.'
			})
		}

		await sendMail({ email, name: firstName, company, message })
		res.status(200).send({
			success: true
		})
	} catch (err) {
		res.status(404).send(err)
	}
}
