import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const LandingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 0 20px 64px;
	background-image: url('/static/images/mobile-landing.jpg');
	background-size: cover;


	${breakpoint('tablet')`
		padding-left: 60px;
		background-image: url("/static/images/tablet-landing.jpg");
	`}

	${breakpoint('desktop')`
    	padding-left: 120px;
		background-image: url("/static/images/desktop-landing.png");
  `}
`

export const Title = styled.h1`
	font-family: ${(props) => props.theme.fonts.graphikBold};
	font-size: 42px;
	line-height: 44px;
	color: ${(props) => props.theme.colors.white};
	padding: 40px 0 12px 0;
	margin-bottom: 16px;
	${breakpoint('desktop')`
    font-size: 57px;
    line-height: 64px;
  `}
`

export const Description = styled.h1`
	font-family: ${(props) => props.theme.fonts.financier};
	font-weight: 400;
	font-size: 21px;
	line-height: 24px;
	color: ${(props) => props.theme.colors.white};
	margin: 0 0 42px 0;
	text-align: left;
	max-width: 720px;
	${breakpoint('desktop')`
    font-size: 24px;
    line-height: 32px;
  `}
`

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 332px;
	margin: 0 0 38px 0;
	${breakpoint('desktop')`
    width: 412px;
  `}
`
