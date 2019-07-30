import fetch from 'isomorphic-unfetch'
import { EMAIL_ENDPOINT } from './apiEndpoints'

export const sendEmail = async (payload) => {
	try {
		const response = await fetch(EMAIL_ENDPOINT, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		})
		const responseData = await response.json()
		return responseData
	} catch (err) {
		console.log('error logs', err)
		throw err
	}
}
