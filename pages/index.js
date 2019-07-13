import React, { useState } from 'react'

import Layout from '../components/layout'
import MDCModal from '../components/modal'
import ThankYou from '../components/thank-you'
import ResearchPdfForm from '../components/research-pdf-form'

import Landing from '../sections/home-section/landing'
import LeaderMarketData from '../sections/home-section/leader-market-data'
import WorkedWith from '../sections/home-section/worked-with'
import WhyMdc from '../sections/home-section/why-mdc'
import Services from '../sections/home-section/services'
import Research from '../sections/home-section/research'
import ContactFooter from '../components/contact-footer'

import pdfMapper from '../utils/pdfMapper'

// Utils
import { validateEmail } from '../utils/validator'
import { sendEmail } from '../services/apiService'

import styled from 'styled-components'

const ContentWrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
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

	const onSubmit = async () => {
		try {
			const res = await sendEmail(form)
			if (res.error) {
				setHasError(true)
			} else {
				console.log('hit this')
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
			<MDCModal modalVisible={modalVisible} onRequestClose={onModalClose}>
				{!emailSent && !hasError && (
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
				{emailSent && !hasError && (
					<ThankYou
						description="Your download should start automatically. Enjoy!"
						footerMessage="Back to research"
						href="/research"
						onClick={onModalClose}
					/>
				)}
			</MDCModal>
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
