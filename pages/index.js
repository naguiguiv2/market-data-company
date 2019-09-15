import React, { useState, useCallback } from 'react'

import {
	Layout,
	Modal,
	ThankYou,
	ResearchPdfForm,
	StartDownloadForm,
	ContactFooter
} from '../components'
import {
	Landing,
	LeaderMarketData,
	WorkedWith,
	WhyMdc,
	Services,
	Research
} from '../sections/home-section'

import pdfMapper from '../utils/pdfMapper'

// Utils
import { validateEmail } from '../utils/validator'
import { sendEmail } from '../services/apiService'

import { useStore } from '../store/useStore'
import { USER_SIGNED_UP } from '../store/actionTypes'

import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const ContentWrapper = styled.div`
	max-width: 1200px;
	padding: 0 20px;
	margin: 0 auto;

`

const Home = () => {
	const [modalVisible, setModalVisible] = useState(false)
	const [hasError, setHasError] = useState(false)
	const [emailSent, setEmailSent] = useState(false)
	const [pdfForm, setPdfForm] = useState('')

	const [form, setFormValues] = useState({
		firstName: '',
		company: '',
		email: ''
	})

	// Hooks to save the users form data
	const { state, dispatch } = useStore()
	const saveUser = useCallback(
		(formValues) => dispatch({ type: USER_SIGNED_UP, payload: formValues }),
		[dispatch]
	)

	const onSubmit = async () => {
		try {
			const res = await sendEmail(form)
			if (res.error) {
				setHasError(true)
			} else {
				// Save user form to store
				saveUser({
					name: form.firstName,
					company: form.company,
					email: form.email
				})
				setEmailSent(true)
			}
		} catch (err) {
			setHasError(true)
		}
	}

	const updateField = (e) => {
		setFormValues({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const onModalClose = () => {
		setModalVisible(false)
		setEmailSent(false)
	}

	const openModal = (researchForm) => {
		setModalVisible(true)
		setPdfForm(pdfMapper[researchForm])
	}

	const isDisabled = !form.firstName && !validateEmail(form.email)

	return (
		<Layout>
			<Landing />
			<Modal modalVisible={modalVisible} onRequestClose={onModalClose}>
				{!emailSent && !hasError && !state.user && (
					<ResearchPdfForm
						firstName={form.firstName}
						company={form.company}
						email={form.email}
						onChange={updateField}
						isDisabled={isDisabled}
						onRequestClose={onModalClose}
						onSubmit={onSubmit}
						pdfForm={pdfForm}
					/>
				)}
				{!emailSent && !hasError && state.user && (
					<StartDownloadForm
						onRequestClose={onModalClose}
						pdfForm={pdfForm}
						onSubmit={() => setEmailSent(true)}
					/>
				)}
				{emailSent && !hasError && (
					<ThankYou
						description="Your download should start automatically. Enjoy!"
						footerMessage="Back to research"
						href="/research"
						onClick={onModalClose}
					/>
				)}
			</Modal>
			<ContentWrapper>
				<LeaderMarketData />
				<WorkedWith />
				<WhyMdc />
				<Services />
				<Research onClick={openModal} />
			</ContentWrapper>
			<ContactFooter />
		</Layout>
	)
}

export default Home
