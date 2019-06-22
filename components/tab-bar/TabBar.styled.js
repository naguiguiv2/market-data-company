import styled from "styled-components";

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
`;

export const Tab = styled.a`
  color: ${props =>
    props.barTheme === "dark"
      ? props.theme.colors.black
      : props.theme.colors.white};
  text-decoration: none;
  font-size: 16px;
  line-height: 22px;
  font-family: ${props => props.theme.fonts.graphik};
  margin-right: 50px;
  cursor: pointer;
  &:hover {
    opacity: 0.65;
    transition: opacity 0.15s ease;
  }
`;
