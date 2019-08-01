import React from 'react'
import LabelWithArrow from '../label-with-arrow'

import * as S from './CompanyCard.styled'

const CompanyCard = (props) => {
	const { title, description, role, company, onNext, imageUrl } = props
	return (
		<S.CompanyCardWrapper>
			<S.ImageWrapper>
				<S.StyledImage
					src={`/static/images/${imageUrl}.png`}
					srcSet={`/static/images/${imageUrl}@1x.png 1x, /static/images/${imageUrl}@2x.png 2x,
                                 /static/images/${imageUrl}@3x.png 3x`}
				/>
			</S.ImageWrapper>
			<S.ContentWrapper>
				<S.DescriptionWrapper>
					<S.Title>{title}</S.Title>
					<S.DescriptionText>{description}</S.DescriptionText>
				</S.DescriptionWrapper>
				<S.FooterWrapper>
					<S.RoleText>{role}</S.RoleText>
					<LabelWithArrow label={company} onClick={onNext} />
				</S.FooterWrapper>
			</S.ContentWrapper>
		</S.CompanyCardWrapper>
	)
}

export default CompanyCard
