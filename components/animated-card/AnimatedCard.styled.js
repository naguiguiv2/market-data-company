import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 340px;
  max-width: 380px;
  flex: 1;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  height: 370px;
`;

export const TopNotch = styled.div`
  width: 100%;
  height: 16px;
  background-color: ${props => props.notchColor};
  margin-bottom: 23px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 20px 17px;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.graphikBold};
  font-size: 18px;
  line-height: 24px;
  margin: 0 0 20px 0;
`;

export const Description = styled.p`
  font-family: ${props => props.theme.fonts.financier};
  font-size: 16px;
  line-height: 22px;
  margin: 0;
`;

export const Footer = styled.span`
  font-family: ${props => props.theme.fonts.graphik};
  font-size: 14px;
  line-height: 22px;
  color: ${props => props.theme.colors.lightGrey};
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
  margin: 0 20px 16px;
  cursor: pointer;
`;
