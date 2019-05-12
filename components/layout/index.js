import React from "react";
import * as S from "./Layout.styled";
import TabBar from "../tab-bar";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <S.Wrapper>
      {/* <TabBar /> */}
      {children}
      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
    </S.Wrapper>
  );
};

export default Layout;
