import fetch from "isomorphic-unfetch";
import { SEND_EMAIL } from "./apiEndpoints";

export const sendEmail = async payload => {
  try {
    const response = await fetch(SEND_EMAIL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    throw err;
  }
};
