import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const FooterWrapper = styled.footer`
	min-height: 375px;

	width: 100%;
	background-color: black;

	${breakpoint('desktop')`
    min-height: 350px;
    padding: 0;
  `}
`

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	max-width: 1200px;
	margin: 0 auto;
	padding: 80px 20px;

	${breakpoint('tablet')`
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
  `}
`

export const FooterLogoWrapper = styled.div`
	display: flex;
	margin-bottom: 20px;

	${breakpoint('tablet')`
    margin-bottom: 0;
  `}
`

export const TextWrapper = styled.div`
	margin-bottom: 40px;

	${breakpoint('tablet')`
		max-width: 600px;
		margin-bottom: 0;
		padding: 0 40px;
  `}
`

export const MarketDataText = styled.p`
	margin: 0;
	color: ${(props) => props.theme.colors.white};
	font-family: ${(props) => props.theme.fonts.financier};
	font-weight: 400;
	font-size: 18px;
	line-height: 26px;
	text-align: left;

	${breakpoint('tablet')`
    font-size: 16px;
    line-height: 24px;
  `}

	${breakpoint('desktop')`
    font-size: 21px;
    line-height: 28px;
  `}
`

export const ExploreAndSocialWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;

	${breakpoint('tablet')`
	width: 300px;
  `}
`

export const ExploreWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

export const ExploreTitle = styled.h1`
	font-size: 18px;
	line-height: 24px;
	color: ${(props) => props.theme.colors.white};
	font-family: ${(props) => props.theme.fonts.graphikBold};
	margin: 0 0 17px 0;
	${breakpoint('desktop')`
    font-size: 21px;
    line-height: 28px;
    margin: 0 0 23px 0;
  `}
`

export const ExploreItem = styled.span`
	font-size: 16px;
	line-height: 22px;
	color: #c8c8c8;
	margin-bottom: 18px;
	font-family: ${(props) => props.theme.fonts.graphik};
	cursor: pointer;
	&:hover {
		opacity: 0.65;
		transition: opacity 0.15s ease;
	}
`

export const SocialWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 40px;
`

export const SocialContent = styled.div`
	display: flex;
	flex-direction: row;
`

export const SocialTitle = styled.h1`
	font-size: 18px;
	line-height: 24px;
	color: ${(props) => props.theme.colors.white};
	font-family: ${(props) => props.theme.fonts.graphikBold};
	margin: 0 0 27px 0;
	${breakpoint('desktop')`
    font-size: 21px;
    line-height: 28px;
    margin: 0 0 23px 0;
  `}
`
