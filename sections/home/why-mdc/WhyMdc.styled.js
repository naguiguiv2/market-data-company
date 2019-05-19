import styled from "styled-components";

export const WhyMdcWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 17px;
`;

export const HeadingTitle = styled.h1`
  font-family: ${props => props.theme.fonts.graphikBolk};
  font-size: 24px;
  line-height: 30px;
  margin: 0 0 14px 0;
`;

export const HeadingDescription = styled.p`
  font-family: ${props => props.theme.fonts.financier};
  font-size: 18px;
  line-height: 24px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h1`
  font-family: ${props => props.theme.fonts.graphikBold};
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 10px 0;
`;

export const CardDescription = styled.p`
  font-family: ${props => props.theme.fonts.financier};
  font-size: 16px;
  line-height: 22px;
`;
