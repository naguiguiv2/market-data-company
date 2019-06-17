import React from "react";
import Link from "next/link";
import * as S from "./AnimatedFooterLink.styled";

const AnimatedFooterLink = ({ message, href }) => (
  <Link href={href || null}>
    <S.AnimatedFooterLinkWrapper>
      <S.Message>{message}</S.Message>
      <img
        src="../../static/images/arrow.png"
        srcSet="../../static/images/arrow@1x.png 1x, ../../static/images/arrow@2x.png 2x,
                                 ../../static/images/arrow@3x.png 3x"
      />
    </S.AnimatedFooterLinkWrapper>
  </Link>
);

export default AnimatedFooterLink;
