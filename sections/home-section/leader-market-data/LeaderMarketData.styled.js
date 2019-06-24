import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const LeaderMarketDataWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	background-color: ${(props) => props.theme.colors.white};
	margin: 40px 0 75px 0;
	${breakpoint('desktop')`
    margin: 96px 0 151px 0;
  `}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	${breakpoint('desktop')`
    flex-direction: row;
    justify-content: space-between;
  `}
`

export const Title = styled.h1`
	font-family: ${(props) => props.theme.fonts.graphikBold};
	font-size: 24px;
	line-height: 30px;
	color: ${(props) => props.theme.colors.black};
	margin: 0 0 20px 0;
	${breakpoint('desktop')`
    font-size: 36px;
    line-height: 48px;
  `}
`

export const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	${breakpoint('desktop')`
    max-width: 780px;
  `}
`

export const InfoText = styled.p`
	font-size: 24px;
	font-family: ${(props) => props.theme.fonts.financier};
	line-height: 30px;
	color: ${(props) => props.theme.colors.black};
	margin: 0 0 24px 0;
`

export const FactsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 30px;
	${breakpoint('desktop')`
    flex-direction: column;
    justify-content: flex-start;
  `}
`

export const ProjectsCompletedWrapper = styled.div`
	display: flex;
	flex-direction: column;
	${breakpoint('desktop')`
    margin-bottom: 38px;
  `}
`

export const NumberText = styled.h1`
	font-family: ${(props) => props.theme.fonts.graphikBold};
	font-size: 32px;
	line-height: 32px;
	color: ${(props) => props.theme.colors.mdcPurple};
	margin: 0 0 6px 0;
	${breakpoint('desktop')`
    font-size: 48px;
    line-height: 64px;
  `}
`

export const FactsText = styled.h1`
	font-family: ${(props) => props.theme.fonts.financier};
	font-size: 14px;
	line-height: 20px;
	color: ${(props) => props.theme.colors.lightGrey};
	margin: 0;
	${breakpoint('desktop')`
    font-size: 16px;
    line-height: 2px;
  `}
`

export const FooterText = styled.a`
	font-family: ${(props) => props.theme.fonts.graphik};
	font-size: 16px;
	line-height: 22px;
	color: ${(props) => props.theme.colors.mdcPurple};
	cursor: pointer;
	&:hover {
		color: #3d0099;
		transition: color 0.25s ease;
	}
`
