import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const CompanyCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	box-shadow: 0 8px 12px 2px rgba(0, 0, 0, 0.1);
	${breakpoint('tablet')`
    flex-direction: row;
    width: 100%;
  `}
`

export const ImageWrapper = styled.div`
	background-color: black;
	min-height: 220px;
	width: 100%;

`

export const ContentWrapper = styled.div`
	margin: 14px 20px;
	${breakpoint('desktop')`
    margin: 32px 6%;
  `}
`

export const DescriptionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 33px;

`

export const Title = styled.h1`
	font-family: ${(props) => props.theme.fonts.graphikBold};
	font-size: 18px;
	line-height: 24px;
	margin: 0 0 6px 0;
	${breakpoint('desktop')`
    font-size: 21px;
    line-height: 28px;
    margin-bottom: 8px;
  `}
`

export const DescriptionText = styled.p`
	font-family: ${(props) => props.theme.fonts.financier};
	font-size: 21px;
	line-height: 26px;
	letter-spacing: -0.11px;
	margin: 0;
`

export const FooterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export const RoleText = styled.p`
	font-family: ${(props) => props.theme.fonts.graphik};
	font-size: 16px;
	line-height: 21px;
	color: ${(props) => props.theme.colors.lightGrey};
	margin: 0;
`

export const NextTag = styled.a`
	font-family: ${(props) => props.theme.fonts.graphik};
	font-size: 16px;
	line-height: 22px;
	color: ${(props) => props.theme.colors.mdcPurple};
	margin: 0;
	cursor: pointer;
	&:hover {
		color: #3d0099;
		transition: color 0.25s ease;
	}
`
