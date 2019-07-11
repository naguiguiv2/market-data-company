import React, { useState } from 'react'
import styled from 'styled-components'

// Sections
import Landing from '../sections/research-section/landing'
import Research from '../sections/research-section/research'
import WhitePaper from '../sections/research-section/white-paper'
import CaseStudies from '../sections/research-section/case-studies'
import Survey from '../sections/research-section/survey'

// Components
import Layout from '../components/layout'
import ContactFooter from '../components/contact-footer'
import ResearchPdfForm from '../components/research-pdf-form'
import MDCModal from '../components/modal'
import AnimatedFooterLink from '../components/animated-footer-link'
import ThankYou from '../components/thank-you'

import pdfMapper from '../utils/pdfMapper'

// Utils
import { validateEmail } from '../utils/validator'
import { sendEmail } from '../services/apiService'

const ContentWrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
	margin-bottom: 100px;
`

export default () => {
	const [pdfForm, setPdfForm] = useState({})
	const [modalVisible, setModalVisible] = useState(false)
	const [emailSent, setEmailSent] = useState(false)
	const [hasError, setHasError] = useState(false)

	const [form, setFormValues] = useState({
		firstName: '',
		company: '',
		email: ''
	})

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

	const onSubmit = async () => {
		try {
			const res = await sendEmail(form)
			if (res.error) {
				setHasError(true)
			} else {
				setEmailSent(true)
			}
		} catch (err) {
			setHasError(true)
		}
	}

	const openModal = (researchForm) => {
		setModalVisible(true)
		setPdfForm(pdfMapper[researchForm])
	}

	const isDisabled = form.firstName === '' || !validateEmail(form.email)

	return (
		<Layout>
			<Landing />
			<MDCModal
				modalVisible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
			>
				{!emailSent && !hasError && (
					<ResearchPdfForm
						firstName={form.firstName}
						company={form.company}
						email={form.email}
						onChange={updateField}
						isDisabled={isDisabled}
						onRequestClose={() => setModalVisible(false)}
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
				<Research onClick={openModal} />
				<WhitePaper onClick={openModal} />
				<CaseStudies onClick={openModal} />
				<Survey onClick={openModal} />
				<AnimatedFooterLink message="Back to home" href="/" />
			</ContentWrapper>
			<ContactFooter />
		</Layout>
	)
}
