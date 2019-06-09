import React from "react";
import * as S from "./Leadership.styled";
import BioCard from "../../../components/bio-card";

const Leadership = () => (
  <S.LeadershipWrapper>
    <S.Title>Leadership</S.Title>
    <S.CardContent>
      <S.CardWrapper>
        <BioCard name="Robert Benedetto" role="Partner" />
      </S.CardWrapper>
      <S.CardWrapper>
        <BioCard name="Maurice Severin" role="Partner" />
      </S.CardWrapper>
      <S.CardWrapper>
        <BioCard name="Gregg Novek" role="Director" />
      </S.CardWrapper>
    </S.CardContent>
  </S.LeadershipWrapper>
);

export default Leadership;
