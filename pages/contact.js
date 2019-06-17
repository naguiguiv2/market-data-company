import React, { useState } from "react";
import Layout from "../components/layout";
import Landing from "../sections/contact-section/landing";
import Form from "../components/form";
import ContactFooter from "../components/contact-footer";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const ContentWrapper = styled.div`
  margin: 0 18px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${breakpoint("desktop")`
    margin: 0 130px 168px;
  `}
`;

export default () => {
  const [form, setValues] = useState({
    firstName: "",
    company: "",
    email: "",
    message: ""
  });

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <Landing />
      <ContentWrapper>
        <Form
          firstName={form.firstName}
          company={form.company}
          email={form.email}
          message={form.message}
          onChange={updateField}
        />
      </ContentWrapper>
      <ContactFooter />
    </Layout>
  );
};
