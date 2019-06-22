import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const ThankYouWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
`;

export const ImageWrapper = styled.div`
  margin-bottom: 29px;
`;

export const Title = styled.h3`
  font-family: ${props => props.theme.fonts.graphikBold};
  font-size: 24px;
  line-height: 30px;
  margin: 0 0 9px;
  color: ${props => props.theme.colors.black};
  ${breakpoint("desktop")`
    font-size: 36px;
    line-height: 48px;
  `}
`;

export const Description = styled.h5`
  font-family: ${props => props.theme.fonts.financier};
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 44px;
  color: ${props => props.theme.colors.black};
  text-align: center;
  ${breakpoint("desktop")`
    font-size: 21px;
    line-height: 28px;
    margin: 0 0 63px;
    max-width: 344px;
  `}
`;
