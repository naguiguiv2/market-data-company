import Layout from "../components/layout";
import Landing from "../sections/home/landing";
import LeaderMarketData from "../sections/home/leader-market-data";
import WorkedWith from "../sections/home/worked-with";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const ContentWrapper = styled.div`
  margin: 0 18px;
  ${breakpoint("desktop")`
    margin: 0 130px;
  `}
`;

export default () => (
  <Layout>
    <Landing />
    <ContentWrapper>
      <LeaderMarketData />
      <WorkedWith />
    </ContentWrapper>
  </Layout>
);
