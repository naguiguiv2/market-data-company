import Layout from "../components/layout";
import Landing from "../sections/research-section/landing";
import Research from "../sections/research-section/research";
import WhitePaper from "../sections/research-section/white-paper";
import CaseStudies from "../sections/research-section/case-studies";
import Survey from "../sections/research-section/survey";
import ContactFooter from "../components/contact-footer";
import AnimatedFooterLink from "../components/animated-footer-link";

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
      <Research />
      <WhitePaper />
      <CaseStudies />
      <Survey />
      <AnimatedFooterLink message="Back to home" href="/" />
      {/* <BackToHomePageLink>Back to home</BackToHomePageLink> */}
    </ContentWrapper>
    <ContactFooter />
  </Layout>
);
