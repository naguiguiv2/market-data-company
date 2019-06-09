import React from "react";
import AnimatedFooterLink from "../../../components/animated-footer-link";
import * as S from "./LeaderMarketData.styled";

const LeaderMarketData = () => {
  return (
    <S.LeaderMarketDataWrapper>
      <S.Content>
        <S.InfoWrapper>
          <S.Title>Leader in market data consultancy</S.Title>
          <S.InfoText>
            Market Data Company (MDC) is a professional consulting firm with
            experts skilled in Market Data products and Management. We are
            committed to helping financial investment firms optimize Market and
            Reference data spend.
          </S.InfoText>
          <S.InfoText>
            We partner with our clients to answer the growing demands of their
            business by providing the expertise in the details that lead to
            increased profitability. Specifically, MDC has developed a series of
            diagnostic tools and programs that tangibly drive down costs while
            optimizing services.
          </S.InfoText>
        </S.InfoWrapper>
        <S.FactsWrapper>
          <S.ProjectsCompletedWrapper>
            <S.NumberText>106</S.NumberText>
            <S.FactsText>Projects completed</S.FactsText>
          </S.ProjectsCompletedWrapper>
          <S.ProjectsCompletedWrapper>
            <S.NumberText>$154MM</S.NumberText>
            <S.FactsText>Client dollars saved</S.FactsText>
          </S.ProjectsCompletedWrapper>
        </S.FactsWrapper>
      </S.Content>
      <AnimatedFooterLink message="Read more about our team" />
    </S.LeaderMarketDataWrapper>
  );
};

export default LeaderMarketData;
