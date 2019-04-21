import styled from "styled-components";

export const FooterWrapper = styled.footer`
  height: 350px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const FooterLogoWrapper = styled.div`
  display: flex;
`;

export const TextWrapper = styled.div`
  max-width: 521px;
`;

export const MarketDataText = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.graphik};
  font-size: 21px;
  line-height: 28px;
  letter-spacing: -0.15px;
`;

export const ExploreWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExploreTitle = styled.h1`
  margin: 0 0 23px 0;
  font-size: 21px;
  line-height: 28px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.graphik};
`;

export const ExploreItem = styled.a`
  font-size: 16px;
  line-height: 22px;
  color: #c8c8c8;
  margin-bottom: 18px;
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
  margin: 0 0 23px 0;
  font-size: 21px;
  line-height: 28px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.graphik};
`;
