import React, { useState } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

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

// Utils
import { validateEmail } from '../utils/validator'

const ContentWrapper = styled.div`
	margin: 0 18px 80px;
	${breakpoint('desktop')`
    margin: 0 130px 168px;
  `}
`

export default () => {
	const [modalVisible, setModalVisible] = useState(false)

	const [form, setFormValues] = useState({
		name: '',
		company: '',
		email: ''
	})

	const updateField = (e) => {
		setFormValues({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const isDisabled = form.name === '' || !validateEmail(form.email)

	return (
		<Layout>
			<Landing />
			<MDCModal
				modalVisible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
			>
				<ResearchPdfForm
					name={form.name}
					company={form.company}
					email={form.email}
					onChange={updateField}
					isDisabled={isDisabled}
					onRequestClose={() => setModalVisible(false)}
				/>
			</MDCModal>
			<ContentWrapper>
				<Research onClick={() => setModalVisible(true)} />
				<WhitePaper />
				<CaseStudies />
				<Survey />
				<AnimatedFooterLink message="Back to home" href="/" />
			</ContentWrapper>
			<ContactFooter />
		</Layout>
	)
}
