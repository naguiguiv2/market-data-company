import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Wrapper = styled.div`
  display: flex;
  height: 72px;
  background-color: transparent;
`;

export const TabWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  ${breakpoint("desktop")`
    margin-left: 131px;
  `}
`;

export const Tab = styled.a`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-size: 16px;
  line-height: 22px;
  font-family: ${props => props.theme.fonts.graphik};
  margin-right: 50px;
  cursor: pointer;
`;
