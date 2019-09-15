import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export const CompanyCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	box-shadow: 0 8px 12px 2px rgba(0, 0, 0, 0.1);

	${breakpoint('desktop')`
		flex-direction: row;
		flex: 1;
		width: 100%;
		min-height: 285px;
  	`}
`

export const ImageWrapper = styled.div`
	min-height: 220px;
	width: 100%;
	${breakpoint('desktop')`
		min-width: 476px;
  	`}
`

export const StyledImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: fill;
`

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 20px;
	min-height: 320px;

	${breakpoint('desktop')`
	margin: 32px 6%;
	min-height: 0;
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
	width: 100%;
	margin-bottom: 20px;

	${breakpoint('desktop')`
		margin-bottom: 0;
  	`}
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
