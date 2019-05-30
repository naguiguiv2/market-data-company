import React from "react";
import * as S from "./WhyMdc.styled";

const descriptionData = [
  {
    title: "The right people, solving the right problems with passion",
    description:
      "Our people bring a mix of expertise to solve problems with a different, more dedicated mindset, devising powerful tools and solutions for our clients’ toughest challenges"
  },
  {
    title: "Highly effective market data governance structure",
    description:
      "Our approach brings together a highly effective discipline that focuses on process, controls and vendors."
  },
  {
    title: "We’ve saved upwards of 35% on total data spend for our clients",
    description:
      "At the end of the day, it’s our clients bottom line that we take care of, and the results speak for themselves."
  },
  {
    title: "Market data management optimization with proven results",
    description:
      "Results are predicated by our strengths surrounding operational Governance and Market Data Vendors"
  }
];

const Card = props => {
  const { title, description } = props;
  return (
    <S.CardWrapper>
      <S.CardTitleWrapper>
        <S.CardTitleIcon
          src="../../static/images/checkmark.png"
          srcSet="../../static/images/checkmark@1x.png 1x, ../../static/images/checkmark@2x.png 2x,
                                 ../../static/images/checkmark@3x.png 3x"
        />
        <S.CardTitle>{title}</S.CardTitle>
      </S.CardTitleWrapper>
      <S.CardDescription>{description}</S.CardDescription>
    </S.CardWrapper>
  );
};

const WhyMdc = () => {
  const renderDescription = () => {
    return descriptionData.map(data => {
      const { title, description } = data;
      return <Card key={title} title={title} description={description} />;
    });
  };
  return (
    <S.WhyMdcWrapper>
      <S.HeadingWrapper>
        <S.HeadingTitle>Why Market Data Company?</S.HeadingTitle>
        <S.HeadingDescription>
          From inception, our focus has been on the dynamics and complexities of
          market data and the critical third-party relationships built through
          data providers within the Capital Markets and Wealth Management
          industries.
        </S.HeadingDescription>
      </S.HeadingWrapper>
      <S.Content>{renderDescription()}</S.Content>
    </S.WhyMdcWrapper>
  );
};

export default WhyMdc;
