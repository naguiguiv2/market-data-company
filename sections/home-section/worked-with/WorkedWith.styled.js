import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const WorkedWithWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	align-items: flex-start;
	margin-bottom: 120px;

`

export const Title = styled.h1`
	font-family: ${(props) => props.theme.fonts.graphikBold};
	font-size: 36px;
	line-height: 48px;
	color: ${(props) => props.theme.colors.black};
	margin: 0 0 18px 0;
`

export const CardWrapper = styled.div`
	margin-bottom: 47px;
`

export const LogoContentWrapper = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;
`

export const LogoWrapper = styled.div`
	width: 48%;
	margin-bottom: 40px;
	transform: scale(0.75);

	display: flex;
	justify-content: center;

	${breakpoint('tablet')`
		margin-bottom: 0; 
		transform: scale(0.6);
		width: 25%;
	`}

	${breakpoint('desktop')`
		transform: scale(0.8);
	`}

`
