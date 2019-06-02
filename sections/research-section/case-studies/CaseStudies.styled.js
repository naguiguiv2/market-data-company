import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const CaseStudyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 80px;
  ${breakpoint("desktop")`
    margin-bottom: 100px;
  `}
`;

export const CaseStudyTitle = styled.h1`
  font-family: ${props => props.theme.fonts.graphikBold};
  font-size: 24px;
  line-height: 30px;
  margin: 0 0 25px 0px;
  ${breakpoint("desktop")`
    font-size: 36px;
    line-height: 48px;
    margin: 0 0 34px 0px;
  `}
`;
