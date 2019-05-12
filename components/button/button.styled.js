import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 40px;
  background-color: ${props =>
    props.isDefault ? props.theme.colors.mdcPurple : props.theme.colors.white};
  border-radius: 3px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  &:hover {
    background-color: ${props =>
      props.isDefault
        ? props.theme.colors.mdcPurpleHover
        : props.theme.colors.white};
    box-shadow: ${props => {
      return props.isDefault
        ? "0 2px 8px 0 rgba(0, 0, 0, 0.15)"
        : "0 8px 16px 2px rgba(0, 0, 0, 0.15)";
    }};
  }
  ${breakpoint("desktop")`
    width: 200px;
    height: 48px;
  `}
`;

export const ButtonText = styled.span`
  font-family: ${props => props.theme.fonts.graphik};
  font-size: 14px;
  line-height: 14px;
  color: ${props =>
    props.isDefault ? props.theme.colors.white : props.theme.colors.black};
  ${breakpoint("desktop")`
    font-size: 18px;
    line-height: 24px;
  `}
`;
