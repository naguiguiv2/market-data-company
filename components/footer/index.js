import React from "react";
import Link from "next/link";
import SocialIcon from "../social-icon";
import * as S from "./Footer.styled";

const Footer = () => (
  <S.FooterWrapper>
    <S.ContentWrapper>
      <S.FooterLogoWrapper>
        <img src="../../static/images/logo-holder.png" />
      </S.FooterLogoWrapper>
      <S.TextWrapper>
        <S.MarketDataText>
          Market data company is North America’s leading market data solutions
          and consultancy company. We offer specialized consulting services and
          leading market data management solutions that help deal with the
          complexity of your data.
        </S.MarketDataText>
      </S.TextWrapper>
      <S.ExploreWrapper>
        <S.ExploreTitle>Explore</S.ExploreTitle>
        <Link href="/research">
          <S.ExploreItem>Research</S.ExploreItem>
        </Link>
        <Link href="/team">
          <S.ExploreItem>Our Team</S.ExploreItem>
        </Link>
        <Link href="/contact">
          <S.ExploreItem>Contact</S.ExploreItem>
        </Link>
      </S.ExploreWrapper>
      <S.SocialWrapper>
        <S.SocialTitle>Social</S.SocialTitle>
        <S.SocialContent>
          <SocialIcon url="http://facebook.com" />
          <SocialIcon url="http://linkedin.com" />
          <SocialIcon url="http://twitter.com" />
        </S.SocialContent>
      </S.SocialWrapper>
    </S.ContentWrapper>
  </S.FooterWrapper>
);

export default Footer;
