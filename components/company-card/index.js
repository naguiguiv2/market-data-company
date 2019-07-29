import React from 'react'
import * as S from './CompanyCard.styled'

const CompanyCard = (props) => {
	const { title, description, role, company, onNext } = props
	return (
		<S.CompanyCardWrapper>
			<S.ImageWrapper/>
			<S.ContentWrapper>
				<S.DescriptionWrapper>
					<S.Title>{title}</S.Title>
					<S.DescriptionText>{description}</S.DescriptionText>
				</S.DescriptionWrapper>
				<S.FooterWrapper>
					<S.RoleText>{role}</S.RoleText>
					<S.NextTag onClick={onNext}>{company}</S.NextTag>
				</S.FooterWrapper>
			</S.ContentWrapper>
		</S.CompanyCardWrapper>
	)
}

export default CompanyCard
