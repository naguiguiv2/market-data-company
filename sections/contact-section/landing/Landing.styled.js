import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${props => props.theme.colors.sbGrey};
  margin-bottom: -80px;
  ${breakpoint("desktop")`
    padding-left: 130px;
    padding-right: 130px;
  `}
`;

export const Content = styled.div`
  min-height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.p`
  font-family: ${props => props.theme.fonts.financier};
  font-size: 21px;
  line-height: 30px;
  color: ${props => props.theme.colors.black};
  margin: 0;
  text-align: center;
  ${breakpoint("desktop")`
    font-size: 36px;
    line-height: 42px;
  `}
`;
