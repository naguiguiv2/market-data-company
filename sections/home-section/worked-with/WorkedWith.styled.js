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
	font-size: 24px;
	line-height: 30px;
	margin: 0 0 20px 0;
	${breakpoint('tablet')`
		font-size: 36px;
		line-height: 48px;
	`}


`

export const Description = styled.p`
	font-family: ${(props) => props.theme.fonts.financier};
	font-size: 18px;
	line-height: 26px;
	margin: 0 0 46px 0;
	${breakpoint('desktop')`
		font-size: 24px;
		line-height: 30px;
		max-width: 780px;
	`}
`

export const CardWrapper = styled.div`
	margin-bottom: 47px;
	box-shadow: 0 8px 12px 2px rgba(0, 0, 0, 0.1);
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
	transform: scale(0.6);

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
