import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const LandingWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

export const BannerWrapper = styled.div`
	min-height: calc(100vh - 46px);
	background-image: url('/static/gifs/financial-business-chart.gif');
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

export const Title = styled.h1`
	font-family: ${(props) => props.theme.fonts.graphikBold};
	font-size: 2.25em;
	line-height: 1em;
	color: ${(props) => props.theme.colors.white};
	padding: 8vh 0 0.5em 0;
	margin-bottom: 16px;
	${breakpoint('desktop')`
		font-size: 3.5em;
		line-height: 1em;
		padding: 15vh 0 0.5em 0;
	`}
	${breakpoint('tablet')`
		font-size: 3em;
		line-height: 1em;
		padding: 15vh 0 0.5em 0;
	`}
`

export const Description = styled.h1`
	font-family: ${(props) => props.theme.fonts.financier};
	font-weight: 400;
	font-size: 1.15em;
	line-height: 1em;
	color: ${(props) => props.theme.colors.white};
	margin: 0 0 42px 0;
	text-align: left;
	max-width: 720px;
	${breakpoint('desktop')`
		font-size: 1.6em;
		line-height: 1em;
  	`}
	${breakpoint('tablet')`
		font-size: 1.6em;
		line-height: 1em;
  	`}
`

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	max-width: 340px;
	margin: 0 0 38px 0;
	${breakpoint('desktop')`
    	max-width: 380px;
  `}
`
