import Layout from "../components/layout";
import Landing from "../sections/team-section/landing";
import Background from "../sections/team-section/background";
import Leadership from "../sections/team-section/leadership";
import GlobalInstitutions from "../sections/team-section/global-institutions";
import CaseStudies from "../sections/team-section/case-studies";
import ContactFooter from "../components/contact-footer";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const ContentWrapper = styled.div`
  margin: 0 18px 80px;
  ${breakpoint("desktop")`
    margin: 0 130px 168px;
  `}
`;

const BackToHomePageLink = styled.span`
  font-family: ${props => props.theme.fonts.graphik};
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.theme.colors.mdcPurple};
`;

export default () => (
  <Layout>
    <Landing />
    <ContentWrapper>
      <Background />
      <Leadership />
      <GlobalInstitutions />
      <CaseStudies />
    </ContentWrapper>
    <ContactFooter />
  </Layout>
);
