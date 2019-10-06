import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const WhitePaperWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	margin-bottom: 80px;
	${breakpoint('desktop')`
    margin-bottom: 100px;
  `}
`

export const WhitePaperTitle = styled.h1`
	font-family: ${(props) => props.theme.fonts.graphikBold};
	font-size: 24px;
	line-height: 30px;
	margin: 0 0 25px 0px;
	${breakpoint('desktop')`
    font-size: 36px;
    line-height: 48px;
    margin: 0 0 34px 0px;
  `}
`

export const CardContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	${breakpoint('tablet')`
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 35px;
  `}
`

export const CardWrapper = styled.div`
	margin-bottom: 20px;
	${breakpoint('desktop')`
    margin-bottom: 0;
    &:last-child {
      margin-right: 0;
    }
    flex: 0 1 auto;
    &:first-child {
      padding-left: 0;
    }
    &:nth-child(4) {
      padding-left: 0; 
    }
    padding: 10px 5px;
  `}
`