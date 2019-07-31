import React from 'react'
import Link from 'next/link'
import * as S from './AnimatedFooterLink.styled'

const AnimatedFooterLink = ({ message, href, onClick }) => (
	<Link href={href}>
		<S.AnimatedFooterLinkWrapper onClick={onClick}>
			<S.Message>{message}</S.Message>
			<img
				src="/static/images/arrow.png"
				srcSet="/static/images/arrow@1x.png 1x, /static/images/arrow@2x.png 2x,
                                 /static/images/arrow@3x.png 3x"
			/>
		</S.AnimatedFooterLinkWrapper>
	</Link>
)

AnimatedFooterLink.defaultProps = {
	onClick: () => {}
}

export default AnimatedFooterLink
