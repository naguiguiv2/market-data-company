import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const LeadershipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 81px;
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.graphikBold};
  font-size: 24px;
  line-height: 30px;
  margin: 0 0 30px;
  ${breakpoint("desktop")`
    font-size: 36px;
    line-height: 48px;
    margin: 0 0 47px;
  `}
`;
