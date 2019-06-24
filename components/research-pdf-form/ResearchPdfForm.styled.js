import styled from 'styled-components'

export const ResearchPdfFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-height: 591px;
	background-color: ${(props) => props.theme.colors.white};
`

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`

export const Title = styled.h3`
	font-family: ${(props) => props.theme.fonts.graphikBold};
	font-size: 24px;
	line-height: 30px;
	color: ${(props) => props.theme.colors.black};
	margin: 0 0 12px;
`

export const Description = styled.h5`
	font-family: ${(props) => props.theme.fonts.financier};
	font-size: 16px;
	line-height: 22px;
	margin-bottom: 0 0 18px;
`

export const InputWrapper = styled.div`
	margin-bottom: 12px;
`
