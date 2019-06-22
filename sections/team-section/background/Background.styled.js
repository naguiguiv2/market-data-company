import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const BackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 80px;
  ${breakpoint("desktop")`
    margin-bottom: 137px;
  `}
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.graphikBold};
  font-size: 24px;
  line-height: 30px;
  margin: 78px 0 21px;
  ${breakpoint("desktop")`
    font-size: 36px;
    line-height: 48px;
    margin: 93px 0 20px;
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoint("desktop")`
    flex-direction: row-reverse;
    flex: 1;
    justify-content: space-between;
    align-items: flex-start;
  `}
`;

export const BackgroundImage = styled.div`
  background-image: url("/static/images/background-copy.png");
  background-size: cover;
  height: 207px;
  width: 337px;
  margin-bottom: 21px;
  ${breakpoint("desktop")`
    background-image: url("/static/images/background.png");
    background-size: cover;
    height: 356px;
    width: 50%;
    margin-bottom: 0;
  `}
`;

export const Description = styled.p`
  font-family: ${props => props.theme.fonts.financier};
  font-size: 16px;
  line-height: 22px;
  margin: 0;
  ${breakpoint("desktop")`
    font-size: 21px;
    line-height: 28px;
    width: 50%;
  `}
`;
