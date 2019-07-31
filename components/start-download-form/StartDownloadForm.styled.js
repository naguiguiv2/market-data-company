import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const StartDownloadFormWrapper = styled.div`
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

export const ImageWrapper = styled.div`
	align-self: flex-end;
	cursor: pointer;
	height: 32px;
	width: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	&:hover {
		background-color: ${(props) => props.theme.colors.sbGrey};
	}
`

export const CloseIcon = styled.img`
	height: 18px;
	width: 18px;
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

export const Title = styled.h2`
	font-family: ${(props) => props.theme.fonts.graphikBold};
	font-size: 36px;
	line-height: 48px;
	color: ${(props) => props.theme.colors.black};
	margin: 0 0 12px;
	text-align: center;
`

export const Description = styled.h5`
	font-family: ${(props) => props.theme.fonts.financier};
	font-size: 21px;
	line-height: 28px;
	margin: 0 0 40px;
	text-align: center;
`

export const ButtonWrapper = styled.div`
	align-self: center;
`

export const StyledAnchor = styled.a`
	text-decoration: none;
`
