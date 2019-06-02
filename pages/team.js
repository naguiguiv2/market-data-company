import Layout from "../components/layout";
import Landing from "../sections/team-section/landing";
import Background from "../sections/team-section/background";
import Leadership from "../sections/team-section/leadership";
import ContactFooter from "../components/contact-footer";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const ContentWrapper = styled.div`
  margin: 0 18px 80px;
  ${breakpoint("desktop")`
    margin: 0 130px 168px;
  `}
`;

export default () => (
  <Layout>
    <Landing />
    <ContentWrapper>
      <Background />
      <Leadership />
    </ContentWrapper>
    <ContactFooter />
  </Layout>
);
