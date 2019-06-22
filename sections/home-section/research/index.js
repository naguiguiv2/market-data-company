import React from "react";
import AnimatedCard from "../../../components/animated-card";
import AnimatedFooterLink from "../../../components/animated-footer-link";
import * as S from "./Research.styled";

const cardData = [
  {
    title: "Data Management Compliance: The Right to Audit",
    description:
      "THE RIGHT TO AUDIT is a common phrase used in most every Data Vendor or Exchange Agreement (Data Provider Agreements). It is neither new, misunderstood, nor misrepresented. Yet this term has wreaked havoc of late, as it exposes the three modern day plagues causing considerable distress amongst financial...",
    footer: "Read more"
  },
  {
    title:
      "The Value of Market Data Administration: Transparency, Accountability & Governance",
    description:
      "AS FINANCIAL FIRMS GRAPPLE with increasing demands for market data, dealing with the number and complexity of market data licenses and subscriptions can be overwhelming. The volume and variety challenges their ability to effectively manage costs, control user-access, monitor usage, and produce ...",
    footer: "Read more"
  },
  {
    title: "MDC Forecasts 10-13% Increase in Data Spend",
    description:
      "WITHOUT ANY CHANGE to consumption, service mix, or even annual price increases, Canadian-based financial services firms can expect a +10% price increase in their Market and Reference Data spend for 2014. To understand why, firms need only look to the fall of the CAD$ relative to the US$ for the change that will impact their general ledgers...",
    footer: "Read more"
  }
];

const Research = () => {
  const renderCards = () => {
    return cardData.map(card => {
      const { title, description, footer } = card;
      return (
        <S.CardWrapper key={title}>
          <AnimatedCard
            title={title}
            description={description}
            footer={footer}
          />
        </S.CardWrapper>
      );
    });
  };
  return (
    <S.ResearchWrapper>
      <S.HeaderWrapper>
        <S.HeaderTitle>Research &amp; Case Studies</S.HeaderTitle>
        <S.HeaderDescription>
          MDC has done extensive research over the past 10 years through its
          qualitative and quantitative analytics. Our findings have been linked
          to the strength of a firms operational management and its investment
          strategy, and can be used to improve capabilities in core business
          areas such as client intelligence, trading strategies, and business
          productivity.
        </S.HeaderDescription>
      </S.HeaderWrapper>
      <S.CardContentWrapper>{renderCards()}</S.CardContentWrapper>
      <AnimatedFooterLink message="View all of our research" href="/research" />
    </S.ResearchWrapper>
  );
};

export default Research;
