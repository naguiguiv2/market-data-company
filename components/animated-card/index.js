import React from "react";
import * as S from "./AnimatedCard.styled";

const AnimatedCard = props => {
  const { title, description, footer } = props;
  return (
    <S.CardWrapper>
      <S.TopNotch />
      <S.ContentWrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.ContentWrapper>
      <S.Footer>{footer}</S.Footer>
    </S.CardWrapper>
  );
};

export default AnimatedCard;
