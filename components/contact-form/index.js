import React from 'react'
import Router from 'next/router'
import * as S from './ContactForm.styled'
import Input from '../input'
import Textfield from '../textfield'
import Button from '../button'

const ContactForm = ({
	onChange,
	firstName,
	company,
	email,
	message,
	onSubmit,
	isError
}) => (
	<S.FormWrapper>
		<S.Content>
			<S.InputWrapper>
				<Input
					label="First name"
					placeholder="Margaret Mango"
					value={firstName}
					name="firstName"
					onChange={onChange}
					isRequired={true}
					isError={isError}
				/>
			</S.InputWrapper>
			<S.InputWrapper>
				<Input
					label="Email"
					placeholder="margaret@mango.com"
					value={email}
					name="email"
					onChange={onChange}
					isRequired={true}
					isError={isError}
				/>
			</S.InputWrapper>
			<S.InputWrapper>
				<Input
					label="Company"
					placeholder="Mango co."
					value={company}
					name="company"
					onChange={onChange}
				/>
			</S.InputWrapper>
			<S.InputWrapper>
				<Textfield
					label="Message"
					placeholder="Your message here"
					value={message}
					name="message"
					onChange={onChange}
				/>
			</S.InputWrapper>
			<S.ButtonWrapper>
				<Button btnText="Contact us" onClick={onSubmit} />
			</S.ButtonWrapper>
		</S.Content>
	</S.FormWrapper>
)

export default ContactForm
