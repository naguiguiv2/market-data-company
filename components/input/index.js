import React from "react";
import * as S from "./Input.styled";

const Input = ({ label, placeholder, name, value, onChange }) => {
  return (
    <S.InputWrapper>
      <S.Label>{label}</S.Label>
      <S.Field
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </S.InputWrapper>
  );
};

export default Input;
