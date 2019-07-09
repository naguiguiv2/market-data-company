import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const ContactFooterWrapper = styled.div`
	width: 100%;
	background: rgb(125,39,255);
	background: linear-gradient(90deg, rgba(125,39,255,1) 0%, rgba(180,79,255,1) 100%);

`

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	max-width: 1200px;
	margin: 0 auto;
	padding: 80px 20px;

	${breakpoint('desktop')`
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
  `}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 30px;
	
	${breakpoint('desktop')`
    margin: 0;
    align-items: flex-start;
  `}
`

export const Title = styled.h1`
	font-family: ${(props) => props.theme.fonts.graphikBold};
	font-size: 32px;
	line-height: 42px;
	margin: 0 0 6px 0;
	color: ${(props) => props.theme.colors.white};

	${breakpoint('desktop')`
    font-size: 36px;
    line-height: 48px;
    margin: 0 0 8px 0;
  `}
`

export const Description = styled.p`
	font-family: ${(props) => props.theme.fonts.financier};
	font-size: 18px;
	line-height: 26px;
	margin: 0;
	color: ${(props) => props.theme.colors.white};
	text-align: center;
	${breakpoint('desktop')`
    font-size: 21px;
    line-height: 28px;
    max-width: 667px;
    text-align: left;
  `}
`

export const ButtonWrapper = styled.div`
	margin-bottom: 0;
`
