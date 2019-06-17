import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const ICON_MARGIN = "35px";

export const WhyMdcWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center
  flex: 1;
  ${breakpoint("desktop")`
    margin-bottom: 157px;
  `}
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 17px;
  ${breakpoint("desktop")`     
    margin-bottom: 53px;
    max-width: 780px;
  `}
`;

export const HeadingTitle = styled.h1`
  font-family: ${props => props.theme.fonts.graphikBold};
  font-size: 24px;
  line-height: 30px;
  margin: 0 0 14px 0;
  ${breakpoint("desktop")`
    font-size: 36px;
    line-height: 48px;
    margin: 0 0 17px 0;
  `}
`;

export const HeadingDescription = styled.p`
  font-family: ${props => props.theme.fonts.financier};
  font-size: 18px;
  line-height: 24px;
  margin: 0;
  ${breakpoint("desktop")`
  font-size: 24px;
  line-height: 30px;
`}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoint("desktop")`
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  `}
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 27px;
  ${breakpoint("desktop")`
    width: 50%;
  `}
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardTitleIcon = styled.img`
  height: 27px;
  width: 27px;
  margin-right: 8px;
  ${breakpoint("desktop")`
    margin-right: 16px;
  `}
`;

export const CardTitle = styled.h1`
  font-family: ${props => props.theme.fonts.graphikBold};
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 10px 0;
  ${breakpoint("desktop")`
    font-size: 18px;
    line-height: 24px;
  `}
`;

export const CardDescription = styled.p`
  font-family: ${props => props.theme.fonts.financier};
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 0 ${ICON_MARGIN};
  ${breakpoint("desktop")`
    font-size: 16px;
    line-height: 22px;
    max-width: 450px;
  `}
`;
