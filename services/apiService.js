import fetch from 'isomorphic-unfetch'
import { EMAIL_ENDPOINT } from './apiEndpoints'

export const sendEmail = async (payload) => {
	try {
		const response = await fetch(EMAIL_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(payload)
		})
		const responseData = await response.json()
		return responseData
	} catch (err) {
		throw err
	}
}
