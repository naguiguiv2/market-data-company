import styled from 'styled-components'

export const HamburgerMenuContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.white};
	width: 100%;
`

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 60px;
`
