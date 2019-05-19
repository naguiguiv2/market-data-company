import styled from "styled-components";

export const CompanyCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 335px;
  box-shadow: 0 8px 12px 2px rgba(0, 0, 0, 0.1);
`;

export const ImageWrapper = styled.div`
  background-color: black;
  height: 220px;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  margin: 14px 20px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 38px;
  height: 150px;
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.graphikBold};
  font-size: 18px;
  line-height: 24px;
  margin: 0 0 6px 0;
`;

export const DescriptionText = styled.p`
  font-family: ${props => props.theme.fonts.financier};
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.11px;
  margin: 0;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RoleText = styled.p`
  font-family: ${props => props.theme.fonts.graphik};
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.colors.lightGrey};
  margin: 0;
  max-width: 200px;
`;

export const NextTag = styled.a`
  font-family: ${props => props.theme.fonts.graphik};
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.theme.colors.mdcPurple};
  margin: 0;
  cursor: pointer;
`;
