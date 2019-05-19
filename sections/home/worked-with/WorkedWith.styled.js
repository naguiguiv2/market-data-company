import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const WorkedWithWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.graphikBold};
  font-size: 24px;
  line-height: 48px;
  color: ${props => props.theme.colors.black};
  margin: 0 0 18px 0;
`;

export const CardWrapper = styled.div`
  margin-bottom: 47px;
`;
