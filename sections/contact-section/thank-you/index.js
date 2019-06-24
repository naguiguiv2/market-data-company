import React from 'react'
import AnimatedFooterLink from '../../../components/animated-footer-link'
import * as S from './ThankYou.styled'

const ThankYou = (props) => {
	const { email } = props
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
			<S.Description>
				We’ll reply to you at {email} as soon as possible.
			</S.Description>
			<AnimatedFooterLink message="Back to home" href="/" />
		</S.ThankYouWrapper>
	)
}

ThankYou.defaultProps = {
	email: 'your email address'
}

export default ThankYou
