import React from 'react'
import Input from '../input'
import * as S from './ResearchPdfForm.styled'

const ResearchPdfForm = (props) => {
	const { name, company, email, onChange } = props
	return (
		<S.ResearchPdfFormWrapper>
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
						name="name"
						value={name}
						onChange={onChange}
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
				<S.InputWrapper>
					<Input
						label="Email"
						placeholder="margaret@mango.com"
						name="email"
						value={email}
						onChange={onChange}
					/>
				</S.InputWrapper>
			</S.ContentWrapper>
		</S.ResearchPdfFormWrapper>
	)
}

export default ResearchPdfForm
