import Layout from "../components/layout";
import Landing from "../sections/research-section/landing";
import Research from "../sections/research-section/research";
import ContactFooter from "../components/contact-footer";

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
      <Research />
    </ContentWrapper>
    <ContactFooter />
  </Layout>
);
