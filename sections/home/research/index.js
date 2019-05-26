import React from "react";
import * as S from "./Research.styled";

const Research = () => {
  return (
    <S.ResearchWrapper>
      <S.HeaderWrapper>
        <S.HeaderTitle>Research & Case Studies</S.HeaderTitle>
        <S.HeaderDescription>
          MDC has done extensive research over the past 10 years through its
          qualitative and quantitative analytics. Our findings have been linked
          to the strength of a firms operational management and its investment
          strategy, and can be used to improve capabilities in core business
          areas such as client intelligence, trading strategies, and business
          productivity.
        </S.HeaderDescription>
      </S.HeaderWrapper>
    </S.ResearchWrapper>
  );
};

export default Research;
