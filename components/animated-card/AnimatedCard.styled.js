import styled from 'styled-components'

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 340px;
	max-width: 360px;
	flex: 1;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
	background-size: 100% 200%;
	background-image: ${(props) => {
		return `linear-gradient(to bottom, white 50%, ${props.notchColor} 50%)`
	}};
	-webkit-transition: background-position 0.15s ease-out;
	-moz-transition: background-position 0.15s ease-out;
	transition: background-position 0.15s ease-out;
	&:hover {
		cursor: pointer;
		background-position: 0 -100%;
	}
`

export const TopNotch = styled.div`
	width: 100%;
	height: 16px;
	background-color: ${(props) => props.notchColor};
	margin-bottom: 23px;
`

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 20px 17px;
`

export const Title = styled.h1`
	font-family: ${(props) => props.theme.fonts.graphikBold};
	font-size: 18px;
	line-height: 24px;
	margin: 0 0 20px 0;
	align-self: flex-start;
	${CardWrapper}:hover & {
		color: ${(props) => props.theme.colors.white};
		transition: color 0.15s ease;
	}
`

export const Description = styled.p`
	font-family: ${(props) => props.theme.fonts.financier};
	font-size: 16px;
	line-height: 22px;
	margin: 0;
	${CardWrapper}:hover & {
		color: ${(props) => props.theme.colors.white};
		transition: color 0.25s ease;
	}
`

export const Footer = styled.span`
	font-family: ${(props) => props.theme.fonts.graphik};
	font-size: 14px;
	line-height: 22px;
	color: ${(props) => props.theme.colors.lightGrey};
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: flex-end;
	margin: 0 20px 16px;
	cursor: pointer;
	${CardWrapper}:hover & {
		color: ${(props) => props.theme.colors.white};
		transition: color 0.25s ease;
	}
`
