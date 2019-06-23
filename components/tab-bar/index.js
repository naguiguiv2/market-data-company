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
  const { barTheme, backgroundColor } = props;

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
    <S.Wrapper themeDark={true} backgroundColor={backgroundColor}>
      <S.TabWrapper>
        <Link href="/">
          <S.Tab>
            {barTheme === "dark" && (
              <img
                src="../../static/images/mdc-logo-horizontal-black.png"
                srcSet="../../static/images/mdc-logo-horizontal-black@1x.png 1x, ../../static/images/mdc-logo-horizontal-black@2x.png 2x,
                                  ../../static/images/mdc-logo-horizontal-black@3x.png 3x"
              />
            )}
            {barTheme !== "dark" && (
              <img
                src="../../static/images/mdc-logo-horizontal.png"
                srcSet="../../static/images/mdc-logo-horizontal@1x.png 1x, ../../static/images/mdc-logo-horizontal@2x.png 2x,
                                 ../../static/images/mdc-logo-horizontal@3x.png 3x"
              />
            )}
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
