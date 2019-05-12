import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  background-image: url("/static/images/mobile-landing.png");
  background-size: cover;
  ${breakpoint("desktop")`
    padding-left: 129px;
    background-image: url("/static/images/desktop-landing.png");
  `}
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.graphik};
  font-size: 32px;
  line-height: 36px;
  color: ${props => props.theme.colors.white};
  padding: 41px 0 24px 0;
  ${breakpoint("desktop")`
    font-size: 57px;
    line-height: 64px;
  `}
`;

export const Description = styled.h1`
  font-family: ${props => props.theme.fonts.graphik};
  font-size: 18px;
  line-height: 22px;
  color: ${props => props.theme.colors.white};
  margin: 0 0 135px 0;
  text-align: left;
  ${breakpoint("desktop")`
    font-size: 21px;
    line-height: 28px;
    max-width: 700px;
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 38px 0;
  ${breakpoint("desktop")`
    width: 412px;
  `}
`;
