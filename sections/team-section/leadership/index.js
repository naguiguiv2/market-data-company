import React from "react";
import * as S from "./Leadership.styled";
import BioCard from "../../../components/bio-card";

const Leadership = () => (
  <S.LeadershipWrapper>
    <S.Title>Leadership</S.Title>
    <BioCard name="Robert Benedetto" role="Partner" />
  </S.LeadershipWrapper>
);

export default Leadership;
