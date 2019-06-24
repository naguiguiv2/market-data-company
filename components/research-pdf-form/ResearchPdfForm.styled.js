import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const ResearchPdfFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-height: 591px;
	background-color: ${(props) => props.theme.colors.white};
	${breakpoint('desktop')`
		max-height: 600px;
		max-width: 724px;
	`}
`

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: center;
	${breakpoint('desktop')`
		margin: 0 62px;
	`}
`

export const Title = styled.h3`
	font-family: ${(props) => props.theme.fonts.graphikBold};
	font-size: 24px;
	line-height: 30px;
	color: ${(props) => props.theme.colors.black};
	margin: 0 0 12px;
	text-align: center;
`

export const Description = styled.h5`
	font-family: ${(props) => props.theme.fonts.financier};
	font-size: 16px;
	line-height: 22px;
	margin-bottom: 0 0 18px;
	text-align: center;
`

export const InputWrapper = styled.div`
	margin-bottom: 12px;
	${breakpoint('desktop')`
		margin-bottom: 16px;
		&:nth-child(5) {
        	margin-bottom: 40px;
    	}
	`}
`

export const ButtonWrapper = styled.div`
	align-self: center;
`
