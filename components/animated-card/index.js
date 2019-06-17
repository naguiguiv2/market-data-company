import React from "react";
import * as Colors from "../../assets/colors";
import * as S from "./AnimatedCard.styled";

const AnimatedCard = props => {
  const { title, description, footer, notchColor } = props;
  return (
    <S.CardWrapper notchColor={notchColor}>
      <S.TopNotch notchColor={notchColor} />
      <S.ContentWrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.ContentWrapper>
      <S.Footer>{footer}</S.Footer>
    </S.CardWrapper>
  );
};

AnimatedCard.defaultProps = {
  footer: "Read more",
  notchColor: Colors.MDC_PURPLE
};

export default AnimatedCard;
