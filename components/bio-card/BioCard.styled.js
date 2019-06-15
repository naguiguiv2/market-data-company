import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 340px;
  ${breakpoint("desktop")`
    width: 380px;
    min-height: 445px;
  `}
`;

export const BioCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  ${breakpoint("desktop")`
    max-width: 380px;
  `}
`;

export const ImageWrapper = styled.img`
  max-width: 340px;
  max-height: 401px;
  ${breakpoint("desktop")`
    max-height: 320px;
    max-width: 380px;
  `}
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

export const FooterWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  margin-bottom: 17px;
`;

export const HoveredBioCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  ${breakpoint("desktop")`
    max-width: 380px;
  `}
  background-color: ${props => props.theme.colors.mdcPurple};
`;

export const HoveredContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 25px 32px;
`;

export const HoveredName = styled.h4`
  font-family: ${props => props.theme.fonts.graphikBold};
  font-size: 18px;
  line-height: 24px;
  margin: 0 0 4px;
  color: ${props => props.theme.colors.white};
`;

export const HoveredRole = styled.p`
  font-family: ${props => props.theme.fonts.financier};
  font-size: 21px;
  line-height: 28px;
  margin: 0 0 17px;
  color: ${props => props.theme.colors.white};
`;

export const HoveredDescription = styled.p`
  font-family: ${props => props.theme.fonts.financier};
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.theme.colors.white};
  margin: 0;
`;
