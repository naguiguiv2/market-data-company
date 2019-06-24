import React from 'react'
import * as S from './button.styled'

const Button = (props) => {
	const { btnText, isDefault, onClick, isDisabled } = props
	return (
		<S.ButtonWrapper
			isDefault={isDefault}
			onClick={onClick}
			disabled={isDisabled}
		>
			<S.ButtonText isDefault={isDefault}>{btnText}</S.ButtonText>
		</S.ButtonWrapper>
	)
}

Button.defaultProps = {
	isDefault: true,
	isSecondary: false
}

export default Button
