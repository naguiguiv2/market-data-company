import styled from 'styled-components'

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`

export const LabelWrapper = styled.div`
	display: flex;
	flex-direction: row;
`

export const Label = styled.span`
	font-family: ${(props) => props.theme.fonts.graphik};
	font-size: 16px;
	line-height: 28px;
	color: ${(props) => props.theme.colors.black};
	margin-bottom: 5px;
	margin-right: 2px;
`

export const ErrorStar = styled.span`
	font-family: 'LucidaGrande';
	font-size: 21px;
	color: #ff0000;
`

export const Field = styled.input`
	border: solid 1px #c8c8c8;
	height: 39px;
	width: 100%;
	padding-left: 14px;
	font-family: ${(props) => props.theme.fonts.graphik};
	font-size: 14px;
	line-height: 22px;
	color: ${(props) => props.theme.colors.lightGrey};
	-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
	-moz-box-sizing: border-box; /* Firefox, other Gecko */
	box-sizing: border-box; /* Opera/IE 8+ */
`
