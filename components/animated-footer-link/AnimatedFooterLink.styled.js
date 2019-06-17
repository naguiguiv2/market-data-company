import styled from "styled-components";

export const AnimatedFooterLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  flex: 1;
`;

export const Message = styled.h4`
  font-family: ${props => props.theme.fonts.graphik};
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.theme.colors.mdcPurple};
  margin: 0 5px 0 0;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    text-decoration: underline;
    margin: 0 20px 0 0;
  }
`;
