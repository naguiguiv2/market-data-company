import styled from "styled-components";

export const BioCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const ImageWrapper = styled.img`
  width: 340px;
  height: 401px;
`;

export const ContentWrapper = styled.div`
  min-height: 125px;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 32px;
`;

export const Name = styled.h4`
  font-family: ${props => props.theme.fonts.graphikBold};
  font-size: 18px;
  line-height: 24px;
  margin: 10px 0 2px;
`;

export const Role = styled.p`
  font-family: ${props => props.theme.fonts.financier};
  font-size: 21px;
  line-height: 28px;
  margin: 0;
`;
