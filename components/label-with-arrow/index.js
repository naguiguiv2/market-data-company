import React from 'react'
import * as S from './LabelWithArrow.styled'

const LabelWithArrow = (props) => {
	const { label, onClick } = props
	return (
		<S.LabelWithArrowWrapper onClick={onClick}>
			<S.Label>{label}</S.Label>
			<img
				src="../../static/images/arrow.png"
				srcSet="../../static/images/arrow@1x.png 1x, ../../static/images/arrow@2x.png 2x,
                                 ../../static/images/arrow@3x.png 3x"
			/>
		</S.LabelWithArrowWrapper>
	)
}

export default LabelWithArrow
