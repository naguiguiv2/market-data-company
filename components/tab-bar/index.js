import React from "react";
import Link from "next/link";
import * as S from "./TabBar.styled";

const linkData = [
  {
    href: "/research",
    tabName: "Research"
  },
  {
    href: "/team",
    tabName: "Our team"
  },
  {
    href: "/contact",
    tabName: "Contact"
  }
];

const TabBar = props => {
  const { barTheme } = props;

  const renderLinks = () => {
    return linkData.map(data => {
      return (
        <Link key={data.href} href={data.href}>
          <S.Tab barTheme={barTheme}>{data.tabName}</S.Tab>
        </Link>
      );
    });
  };

  return (
    <S.Wrapper themeDark={true}>
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
        {renderLinks()}
      </S.TabWrapper>
    </S.Wrapper>
  );
};

TabBar.defaultProps = {
  barTheme: "light"
};

export default TabBar;
