import React from "react";
import AnimatedFooterLink from "../../../components/animated-footer-link";
import * as S from "./Services.styled";

const Services = () => {
  return (
    <S.ServicesWrapper>
      <S.HeaderWrapper>
        <S.HeaderTitle>What our services can do for you</S.HeaderTitle>
        <S.HeaderDescription>
          Taking Benchmarking to an entirely different level, our marketing data
          services offers you exceptional insight into the capital markets
          industry. With our current commercial solutions, you have the tools to
          take your strategy to the next level.
        </S.HeaderDescription>
      </S.HeaderWrapper>
      <S.ContentWrapper>
        <S.CardWrapper>
          <S.CardImage
            src="../../static/images/managed-services.png"
            srcSet="../../static/images/managed-services@1x.png 1x, ../../static/images/managed-services@2x.png 2x,
                                 ../../static/images/managed-services@3x.png 3x"
            width="177"
            height="177"
          />
          <S.CardContent>
            <S.CardTitle>Managed services &amp; products</S.CardTitle>
            <S.CardDescription>
              Our clients care about providing the right type of market data to
              their stakeholders. That's why our proprietary per security
              analyzer Kiaro product has been pivotal in monitoring how
              Bloomberg Per Security is replicating data across business
              applications, allowing us to accurately and rapidly assess where
              firms can optimize their data.
            </S.CardDescription>
          </S.CardContent>
        </S.CardWrapper>
        <S.CardWrapper>
          <S.CardImage
            src="../../static/images/measure-compare.png"
            srcSet="../../static/images/measure-compare@1x.png 1x, ../../static/images/measure-compare@2x.png 2x,
                                 ../../static/images/measure-compare@3x.png 3x"
            width="177"
            height="177"
          />
          <S.CardContent>
            <S.CardTitle>Measure &amp; compare data costs</S.CardTitle>
            <S.CardDescription>
              We have done extensive research over the past 10 years through our
              qualitative and quantitative analytics. As a result, we've
              developed an approach to compare individual company data to our
              proprietary industry benchmark. Our findings have been linked to
              the strength of a firms operational management and its short and
              long term investment strategy.
            </S.CardDescription>
          </S.CardContent>
        </S.CardWrapper>
        <S.CardWrapper>
          <S.CardImage
            src="../../static/images/match-demand.png"
            srcSet="../../static/images/match-demand@1x.png 1x, ../../static/images/match-demand@2x.png 2x,
                                 ../../static/images/match-demand@3x.png 3x"
            width="177"
            height="177"
          />
          <S.CardContent>
            <S.CardTitle>
              Match your strategy to the market data demand
            </S.CardTitle>
            <S.CardDescription>
              With expert knowledge of both your industry and your customer’s
              needs, you can keep your data consumption activities appropriate
              while optimizing your commercial obligations.
            </S.CardDescription>
          </S.CardContent>
        </S.CardWrapper>
        <S.CardWrapper>
          <S.CardImage
            src="../../static/images/benchmark.png"
            srcSet="../../static/images/benchmark@1x.png 1x, ../../static/images/benchmark@2x.png 2x,
                                 ../../static/images/benchmark@3x.png 3x"
            width="177"
            height="177"
          />
          <S.CardContent>
            <S.CardTitle>Capital market spend benchmarking</S.CardTitle>
            <S.CardDescription>
              Our benchmark adds exponential value through its categorization of
              market data products and services: technology, investments,
              productivity, operations, human resource strategies, and a host of
              other business functions. It’s a peer group assessment of our
              client’s 160 market data activities against a set of best
              practices. Our benchmark has inspired discussions that explore
              qualitative measures – enhancing performance against benchmarks.
            </S.CardDescription>
          </S.CardContent>
        </S.CardWrapper>
      </S.ContentWrapper>
      <AnimatedFooterLink message="Get in touch to learn more" />
    </S.ServicesWrapper>
  );
};

export default Services;
