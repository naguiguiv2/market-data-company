import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const FooterWrapper = styled.footer`
  min-height: 375px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 47px 20px;
  ${breakpoint("desktop")`
    min-height: 350px;
    padding: 0;
  `}
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${breakpoint("desktop")`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  `}
`;

export const FooterLogoWrapper = styled.div`
  display: flex;
  margin-bottom: 22px;
  ${breakpoint("desktop")`
    margin-bottom: 0;
  `}
`;

export const TextWrapper = styled.div`
  max-width: 521px;
  margin-bottom: 52px;
  justify-content: center;
  ${breakpoint("desktop")`
    margin-bottom: 0;
  `}
`;

export const MarketDataText = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.financier};
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  
  ${breakpoint("desktop")`
    font-size: 21px;
    line-height: 28px;
    letter-spacing: -0.15px;
    text-align: left;
  `}
`;

export const ExploreAndSocialWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  ${breakpoint("desktop")`
    width: 300px;
  `}
`;

export const ExploreWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExploreTitle = styled.h1`
  font-size: 18px;
  line-height: 24px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.graphikBold};
  margin: 0 0 17px 0;
  ${breakpoint("desktop")`
    font-size: 21px;
    line-height: 28px;
    margin: 0 0 23px 0;
  `}
`;

export const ExploreItem = styled.a`
  font-size: 16px;
  line-height: 22px;
  color: #c8c8c8;
  margin-bottom: 18px;
  font-family: ${props => props.theme.fonts.graphik};
  cursor: pointer;
  &:hover{
    opacity: 0.65;
    transition: opacity 0.15s ease;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SocialTitle = styled.h1`
  font-size: 18px;
  line-height: 24px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.graphikBold};
  margin: 0 0 27px 0;
  ${breakpoint("desktop")`
    font-size: 21px;
    line-height: 28px;
    margin: 0 0 23px 0;
  `}
`;
