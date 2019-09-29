import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const LandingWrapper = styled.div`
	width: 100%;
	// background-color: ${(props) => props.theme.colors.sbGrey};
	background-image: url('/static/images/contact-landing.png');
	background-size: cover;

`

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;

	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;

`

export const Content = styled.div`
	min-height: 420px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const Description = styled.p`
	font-family: ${(props) => props.theme.fonts.financier};
	font-size: 24px;
	line-height: 30px;
	color: ${(props) => props.theme.colors.white};
	margin: 0;
	text-align: center;

	${breakpoint('desktop')`
    font-size: 36px;
    line-height: 42px;
  `}
`
