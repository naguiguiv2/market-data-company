import React from "react";
import * as S from "./Textfield.styled";

const Textfield = ({ label, value, name, onChange, placeholder }) => (
  <S.TextFieldWrapper>
    <S.Label>{label}</S.Label>
    <S.Field
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  </S.TextFieldWrapper>
);

export default Textfield;
