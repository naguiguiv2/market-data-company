import styled from "styled-components";

export const AnimatedFooterLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const Message = styled.h5`
  font-family: ${props => props.theme.fonts.graphik};
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.theme.colors.mdcPurple};
  margin: 0 5px 0 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
