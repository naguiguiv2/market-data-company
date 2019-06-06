import React from "react";
import * as S from "./BioCard.styled";

const BioCard = props => {
  const { name } = props;

  return (
    <S.BioCardWrapper>
      <S.ImageWrapper
        src="../../static/images/placeholder-img.png"
        srcSet="../../static/images/placeholder-img@1x.png 1x, ../../static/images/placeholder-img@2x.png 2x,
                                 ../../static/images/placeholder-img@3x.png 3x"
      />
      <S.ContentWrapper>
        <S.Name>{name}</S.Name>
      </S.ContentWrapper>
    </S.BioCardWrapper>
  );
};

export default BioCard;
