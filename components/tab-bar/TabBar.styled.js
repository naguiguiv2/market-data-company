import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 72px;
  background-color: black;
`;

export const TabWrapper = styled.div`
  margin-left: 131px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
