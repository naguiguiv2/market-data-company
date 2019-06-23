import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const getBackgroundColor = props => {
  if (props.isDefault && props.disabled) {
    return props.theme.colors.lightPurple;
  } else if (props.isDefault && !props.disabled) {
    return props.theme.colors.mdcPurple;
  } else {
    return props.theme.colors.white;
  }
};

export const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 40px;
  background-color: ${props => getBackgroundColor(props)};
  border-radius: 3px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border: none;
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
    transform: translateY(-1px);
    transition: all 0.15s ease;
  }
  ${breakpoint("desktop")`
    width: 200px;
    height: 48px;
  `}
`;

export const ButtonText = styled.span`
  font-family: ${props => props.theme.fonts.graphikBold};
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.25px;
  color: ${props =>
    props.isDefault ? props.theme.colors.white : props.theme.colors.black};
  ${breakpoint("desktop")`
    font-size: 16px;
    line-height: 24px;
  `}
`;
