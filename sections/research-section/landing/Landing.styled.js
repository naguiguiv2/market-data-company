import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const LandingWrapper = styled.div`
	width: 100%;
	// background-color: ${(props) => props.theme.colors.sbGrey};
	background-image: url('/static/images/research-landing.png');
	background-size: cover;

`

export const ContentWrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;

	display: flex;
	flex-direction: column;
	flex: 1;
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
	font-size: 21px;
	line-height: 30px;
	font-weight: 400;
	color: ${(props) => props.theme.colors.white};
	margin: 0;
	text-align: center;
	${breakpoint('desktop')`
    font-size: 36px;
    line-height: 42px;
  `}
`
