import React from 'react'
import * as S from './Layout.styled'
import Footer from '../footer'

const Layout = ({ children }) => {
	return (
		<S.Wrapper>
			{children}
			<S.FooterWrapper>
				<Footer />
			</S.FooterWrapper>
		</S.Wrapper>
	)
}

export default Layout
