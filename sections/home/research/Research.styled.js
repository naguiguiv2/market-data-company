import styled from "styled-components";

export const ResearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 55px;
`;

export const HeaderTitle = styled.h1`
  font-family: ${props => props.theme.fonts.graphikBold};
  font-size: 24px;
  line-height: 30px;
  color: ${props => props.theme.colors.black};
  margin: 0 0 13px 0;
`;

export const HeaderDescription = styled.p`
  font-family: ${props => props.theme.fonts.financier};
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.theme.colors.black};
  margin: 0;
`;
