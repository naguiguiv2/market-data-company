import React from 'react'
import AnimatedFooterLink from '../animated-footer-link'
import * as S from './ThankYou.styled'

const ThankYou = (props) => {
	const { description, href, footerMessage, onClick } = props
	return (
		<S.ThankYouWrapper>
			<S.ImageWrapper>
				<img
					src="../../static/images/purple-check-mark.png"
					srcSet="../../static/images/purple-check-mark.png 1x, ../../static/images/purple-check-mark@2x.png 2x,
                                  ../../static/images/purple-check-mark@3x.png 3x"
				/>
			</S.ImageWrapper>
			<S.Title>Thank You</S.Title>
			<S.Description>{description}</S.Description>
			<AnimatedFooterLink
				message={footerMessage}
				href={href}
				onClick={onClick}
			/>
		</S.ThankYouWrapper>
	)
}

ThankYou.defaultProps = {
	email: 'your email address',
	onClick: () => {}
}

export default ThankYou
