import styled from 'styled-components'

export const ListItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 60px;
	justify-content: center;
	align-items: center;
	border-bottom: solid 1px #efefef;
`

export const Label = styled.span`
	font-size: 21px;
	font-family: ${(props) => props.theme.fonts.graphik};
	color: ${(props) => props.theme.colors.black};
`
