import React from "react";
import Link from "next/link";
import * as S from "./button.styled";

const Button = props => {
  const { btnText, isDefault, onClick, href, isDisabled } = props;
  return (
    <Link href={href || null}>
      <S.ButtonWrapper
        isDefault={isDefault}
        onClick={onClick}
        disabled={isDisabled}
      >
        <S.ButtonText isDefault={isDefault}>{btnText}</S.ButtonText>
      </S.ButtonWrapper>
    </Link>
  );
};

Button.defaultProps = {
  isDefault: true,
  isSecondary: false
};

export default Button;
