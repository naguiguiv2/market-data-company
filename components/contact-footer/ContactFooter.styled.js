import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const ContactFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-image: linear-gradient(308deg, #b44fff, #7d27ff);
  ${breakpoint("desktop")`
    min-height: 311px;
    flex-direction: row;
    background-image: linear-gradient(282deg, #b44fff, #7d27ff);
    justify-content: space-around;
    align-items: center;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 54px 24px 48px;
  ${breakpoint("desktop")`
    margin: 0;
    align-items: flex-start;
  `}
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.graphikBold};
  font-size: 24px;
  line-height: 30px;
  margin: 0 0 6px 0;
  color: ${props => props.theme.colors.white};
  ${breakpoint("desktop")`
    font-size: 36px;
    line-height: 48px;
    margin: 0 0 8px 0;
  `}
`;

export const Description = styled.p`
  font-family: ${props => props.theme.fonts.financier};
  font-size: 16px;
  line-height: 22px;
  margin: 0;
  color: ${props => props.theme.colors.white};
  text-align: center;
  ${breakpoint("desktop")`
    font-size: 21px;
    line-height: 28px;
    max-width: 667px;
    text-align: left;
  `}
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 73px;
  ${breakpoint("desktop")`
    margin-bottom: 0
  `}
`;
