import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const CaseStudiesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	margin-bottom: 100px;
`

export const Title = styled.h1`
	font-family: ${(props) => props.theme.fonts.graphikBold};
	font-size: 24px;
	line-height: 30px;
	margin: 0 0 30px;
	${breakpoint('desktop')`
    font-size: 36px;
    line-height: 48px;
    margin: 0 0 47px;
  `}
`

export const Description = styled.h4`
	font-family: ${(props) => props.theme.fonts.financier};
	font-weight: 400;
	font-size: 24px;
	line-height: 30px;
	margin: 0 0 31px;
`

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	margin-bottom: 24px;
	${breakpoint('desktop')`
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  `}
`

export const CardWrapper = styled.div`
	padding: 8px 0;
	${breakpoint('desktop')`
    padding: 10px 5px;
    &:first-child {
      padding-left: 0;
    }
  `}
`

export const Footer = styled.span`
	font-family: ${(props) => props.theme.fonts.graphik};
	font-size: 16px;
	line-height: 22px;
	color: ${(props) => props.theme.colors.mdcPurple};
	cursor: pointer;
	margin-top: 36px;
	${breakpoint('desktop')`
    margin-top: 32px;
  `}
`
