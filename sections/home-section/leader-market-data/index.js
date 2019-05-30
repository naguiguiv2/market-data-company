import React from "react";
import * as S from "./LeaderMarketData.styled";

// const LeaderMarketData = () => {
//     return (
//         <div column>
//             <div className="row-on-desk-and-col-on-phone">
//                 Leader in market data consultancy
//                 <div info>

//                 </div>
//                 <div moneystuff>
//                 </div>

//             </div>
//             read more about our team
//         </div>
//     )
// }

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
      <S.FooterText>Read more about our team</S.FooterText>
    </S.LeaderMarketDataWrapper>
  );
};

export default LeaderMarketData;
