import React, { useState } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import AnimatedFooterLink from '../animated-footer-link'
import * as S from './BioCard.styled'

const BioCard = (props) => {
	const { name, role, message } = props
	const [hovered, setHovered] = useState(false)

	return (
		<S.Container
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{!hovered && (
				<S.BioCardWrapper>
					<S.ImageWrapper
						src="/static/images/placeholder-img.png"
						srcSet="/static/images/placeholder-img@1x.png 1x, /static/images/placeholder-img@2x.png 2x,
                                 /static/images/placeholder-img@3x.png 3x"
					/>
					<S.ContentWrapper>
						<S.Name>{name}</S.Name>
						<S.Role>{role}</S.Role>
						<S.FooterWrapper>
							<AnimatedFooterLink message="Bio" />
						</S.FooterWrapper>
					</S.ContentWrapper>
				</S.BioCardWrapper>
			)}
			{hovered && (
				<S.HoveredBioCardWrapper>
					<S.HoveredContent>
						<S.HoveredName>{name}</S.HoveredName>
						<S.HoveredRole>{role}</S.HoveredRole>
						{message && <S.HoveredDescription>{message}</S.HoveredDescription>}
					</S.HoveredContent>
				</S.HoveredBioCardWrapper>
			)}
		</S.Container>
	)
}

export default BioCard
