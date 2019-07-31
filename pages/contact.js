import React, { useState, useEffect } from 'react'
import Landing from '../sections/contact-section/landing'
import ThankYou from '../components/thank-you'
import Layout from '../components/layout'
import ContactForm from '../components/contact-form'
import { validateEmail } from '../utils/validator'

import { sendEmail } from '../services/apiService'

import styled from 'styled-components'

const ContentWrapper = styled.div`
	padding: 0 20px;
	margin-bottom: 100px;
	margin-top: -80px;

	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	z-index: 0;
	min-height: 640px;
`

const ThankYouWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-height: 500px;
	margin: 0 40px;
`

export default () => {
	const [form, setFormValues] = useState({
		firstName: '',
		company: '',
		email: '',
		message: ''
	})
	const [emailSent, setEmailSent] = useState(false)
	const [hasError, setHasError] = useState(false)
	const [formError, setFormError] = useState(false)

	const inputError =
		!form.firstName || !form.email || !validateEmail(form.email)

	useEffect(() => {
		if (formError && !inputError) {
			setFormError(false)
		}
	}, [form])

	const updateField = (e) => {
		setFormValues({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const onSubmit = async () => {
		if (inputError) {
			setFormError(true)
			return
		}

		try {
			const res = await sendEmail(form)
			if (res.success) {
				setEmailSent(true)
			}
		} catch (err) {
			setHasError(true)
		}
	}

	return (
		<Layout>
			{!emailSent && !hasError && (
				<>
					<Landing />
					<ContentWrapper>
						<ContactForm
							firstName={form.firstName}
							company={form.company}
							email={form.email}
							message={form.message}
							onChange={updateField}
							onSubmit={onSubmit}
							isError={formError}
						/>
					</ContentWrapper>
				</>
			)}
			{emailSent && !hasError && (
				<ThankYouWrapper>
					<ThankYou
						description={`We’ll reply to you at ${form.email} as soon as possible.`}
						footerMessage="Back to home"
						href="/"
					/>
				</ThankYouWrapper>
			)}
		</Layout>
	)
}
