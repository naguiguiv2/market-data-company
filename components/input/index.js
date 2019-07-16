import React from 'react'
import * as S from './Input.styled'

const Input = ({
	label,
	placeholder,
	name,
	value,
	onChange,
	isRequired,
	isError
}) => {
	return (
		<S.InputWrapper>
			<S.LabelWrapper>
				<S.Label>{label}</S.Label>
				{isRequired && <S.ErrorStar>*</S.ErrorStar>}
			</S.LabelWrapper>
			<S.FieldWrapper isError={isError}>
				<S.Field
					value={value}
					name={name}
					placeholder={placeholder}
					onChange={onChange}
				/>
				{isError && (
					<S.ImageWrapper>
						<img
							src="../../static/images/error.png"
							srcSet="../../static/images/error.png 1x, ../../static/images/error@2x.png 2x,
									 ../../static/images/error@3x.png 3x"
							height="22"
							width="22"
						/>
					</S.ImageWrapper>
				)}
			</S.FieldWrapper>
		</S.InputWrapper>
	)
}

Input.defaultProps = {
	isRequired: false
}

export default Input
