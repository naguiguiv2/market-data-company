import React, { useState } from "react";
import Landing from "../sections/contact-section/landing";
import ThankYou from "../sections/contact-section/thank-you";
import Layout from "../components/layout";
import Form from "../components/form";
import TabBar from "../components/tab-bar";
import { SB_GREY, WHITE } from "../assets/colors";

import { sendEmail } from "../services/apiService";

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

const ThankYouWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 500px;
  margin: 0 40px;
`;

export default () => {
  const [form, setValues] = useState({
    firstName: "",
    company: "",
    email: "",
    message: ""
  });
  const [emailSent, setEmailSent] = useState(false);
  const [hasError, setHasError] = useState(false);

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async () => {
    try {
      await sendEmail(form);
      setEmailSent(true);
    } catch (err) {
      setHasError(true);
    }
  };

  return (
    <Layout>
      <TabBar barTheme="dark" backgroundColor={emailSent ? WHITE : SB_GREY} />
      {!emailSent && !hasError && (
        <>
          <Landing />
          <ContentWrapper>
            <Form
              firstName={form.firstName}
              company={form.company}
              email={form.email}
              message={form.message}
              onChange={updateField}
              onSubmit={onSubmit}
            />
          </ContentWrapper>
        </>
      )}
      {emailSent && !hasError && (
        <ThankYouWrapper>
          <ThankYou email={form.email} />
        </ThankYouWrapper>
      )}
    </Layout>
  );
};
