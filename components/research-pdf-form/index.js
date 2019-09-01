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
		onRequestClose,
		pdfForm
	} = props

	return (
		<S.ResearchPdfFormWrapper>
			<S.ImageWrapper>
				<S.CloseIcon
					src="/static/images/closeIcon.png"
					srcSet="/static/images/closeIcon.png 1x, /static/images/closeIcon@2x.png 2x,
								 /static/images/closeIcon@3x.png 3x"
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
						label="Name"
						// placeholder="John Doe"
						name="firstName"
						value={firstName}
						onChange={onChange}
						isRequired={true}
					/>
				</S.InputWrapper>
				<S.InputWrapper>
					<Input
						label="Email"
						// placeholder="johndoe@email.com"
						name="email"
						value={email}
						onChange={onChange}
						isRequired
					/>
				</S.InputWrapper>
				<S.InputWrapper>
					<Input
						label="Company"
						// placeholder="company name"
						name="company"
						value={company}
						onChange={onChange}
					/>
				</S.InputWrapper>
				<S.ButtonWrapper>
					<S.StyledAnchor
						onClick={(e) => (isDisabled ? e.preventDefault() : () => {})}
						href={pdfForm}
						target="_blank"
					>
						<Button
							btnText="Download PDF"
							onClick={onSubmit}
							isDisabled={isDisabled}
						/>
					</S.StyledAnchor>
				</S.ButtonWrapper>
			</S.ContentWrapper>
		</S.ResearchPdfFormWrapper>
	)
}

export default ResearchPdfForm
