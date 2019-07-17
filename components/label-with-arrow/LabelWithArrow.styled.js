import styled from 'styled-components'

export const LabelWithArrowWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	&:hover {
		cursor: pointer;
	}
`

export const Label = styled.h5`
	font-family: ${(props) => props.theme.fonts.graphik};
	font-size: 16px;
	line-height: 22px;
	color: ${(props) => props.theme.colors.mdcPurple};
	margin: 0 7px 0 0;
`
