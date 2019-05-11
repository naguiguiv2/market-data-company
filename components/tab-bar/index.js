import React from "react";
import Link from "next/link";
import * as S from "./TabBar.styled";

const TabBar = () => (
  <S.Wrapper>
    <S.TabWrapper>
      <Link href="/">
        <S.Tab>
          <img
            src="../../static/images/mdc-logo-horizontal.png"
            srcSet="../../static/images/mdc-logo-horizontal@1x.png 1x, ../../static/images/mdc-logo-horizontal@2x.png 2x,
                                 ../../static/images/mdc-logo-horizontal@3x.png 3x"
          />
        </S.Tab>
      </Link>
      <Link href="/research">
        <S.Tab>Research</S.Tab>
      </Link>
      <Link href="/team">
        <S.Tab>Our team</S.Tab>
      </Link>
      <Link href="/products">
        <S.Tab>Products</S.Tab>
      </Link>
      <Link href="/contact">
        <S.Tab>Contact</S.Tab>
      </Link>
    </S.TabWrapper>
  </S.Wrapper>
);

export default TabBar;
