import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const GlobalInstitutionsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	margin-bottom: 81px;
	${breakpoint('desktop')`
    margin-bottom: 177px;
  `}
`

export const Title = styled.h3`
	font-family: ${(props) => props.theme.fonts.graphikBold};
	font-size: 24px;
	line-height: 30px;
	margin: 0 0 23px;
`

export const Description = styled.h4`
	font-family: ${(props) => props.theme.fonts.graphik};
	font-size: 18px;
	line-height: 24px;
	margin: 0 0 31px;
`

export const CompanyContentWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	${breakpoint('desktop')`
    justify-content: center;
  `}
`

export const CompanyWrapper = styled.div`
	padding: 14px 0;
	min-width: 50%;
	${breakpoint('desktop')`
    padding: 48px 0;
    min-width: 224px;
  `}
`
