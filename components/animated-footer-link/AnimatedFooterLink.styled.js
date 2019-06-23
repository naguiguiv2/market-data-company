import styled from "styled-components";

export const AnimatedFooterLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const Message = styled.h4`
  font-family: ${props => props.theme.fonts.graphik};
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.theme.colors.mdcPurple};
  margin: 0 8px 0 0;
  cursor: pointer;
  transition: all 0.15s ease;
  &:hover {
    margin: 0 16px 0 0;
    opacity: 0.65
  }
`;
