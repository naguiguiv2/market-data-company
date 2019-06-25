import React from 'react'
import * as S from './Input.styled'

const Input = ({ label, placeholder, name, value, onChange, isRequired }) => {
	return (
		<S.InputWrapper>
			<S.LabelWrapper>
				<S.Label>{label}</S.Label>
				{isRequired && <S.ErrorStar>*</S.ErrorStar>}
			</S.LabelWrapper>
			<S.Field
				value={value}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</S.InputWrapper>
	)
}

Input.defaultProps = {
	isRequired: false
}

export default Input
