import React from 'react'
import Input from '../input'
import Button from '../button'
import * as S from './ResearchPdfForm.styled'

const ResearchPdfForm = (props) => {
	const {
		firstName,
		company,
		email,
		onChange,
		onSubmit,
		isDisabled,
		onRequestClose
	} = props
	return (
		<S.ResearchPdfFormWrapper>
			<S.ImageWrapper>
				<S.CloseIcon
					src="../../static/images/closeIcon.png"
					srcSet="../../static/images/closeIcon.png 1x, ../../static/images/closeIcon@2x.png 2x,
								 ../../static/images/closeIcon@3x.png 3x"
					onClick={onRequestClose}
				/>
			</S.ImageWrapper>
			<S.ContentWrapper>
				<S.Title>Just one last thing..</S.Title>
				<S.Description>
					To get this case study completely free, please leave us your name and
					email address to receive future news and updates.
				</S.Description>
				<S.InputWrapper>
					<Input
						label="First name"
						placeholder="Margaret Mango"
						name="firstName"
						value={firstName}
						onChange={onChange}
						isRequired={true}
					/>
				</S.InputWrapper>
				<S.InputWrapper>
					<Input
						label="Email"
						placeholder="margaret@mango.com"
						name="email"
						value={email}
						onChange={onChange}
						isRequired
					/>
				</S.InputWrapper>
				<S.InputWrapper>
					<Input
						label="Company"
						placeholder="Mango Tree"
						name="company"
						value={company}
						onChange={onChange}
					/>
				</S.InputWrapper>
				<S.ButtonWrapper>
					<Button
						btnText="Download PDF"
						onClick={onSubmit}
						isDisabled={isDisabled}
					/>
				</S.ButtonWrapper>
			</S.ContentWrapper>
		</S.ResearchPdfFormWrapper>
	)
}

export default ResearchPdfForm
