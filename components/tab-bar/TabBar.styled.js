import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const Wrapper = styled.div`
	display: flex;
	height: 72px;
	background-color: ${(props) => props.backgroundColor || 'transparent'};
`

export const MobileTabWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	${breakpoint('tablet')`
		display: none;
	`}
`

export const TabWrapper = styled.div`
	display: none;
	${breakpoint('tablet')`
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	`}
	${breakpoint('desktop')`
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	`}
`

export const Tab = styled.span`
	color: ${(props) =>
		props.barTheme === 'dark'
			? props.theme.colors.black
			: props.theme.colors.white};
	text-decoration: none;
	font-size: 16px;
	line-height: 22px;
	font-family: ${(props) => props.theme.fonts.graphik};
	margin-right: 50px;
	cursor: pointer;
	&:hover {
		opacity: 0.65;
		transition: opacity 0.15s ease;
	}
`
