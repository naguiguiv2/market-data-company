import React from 'react'
import * as S from './Background.styled'

const Background = () => (
	<S.BackgroundWrapper>
		<S.Title>Background</S.Title>
		<S.ContentWrapper>
			<S.BackgroundImage />
			<S.Description>
				MDC is a boutique consulting firm that supports financial institutions
				globally in managing business processes, market and reference data
				management challenges, selection and implementation of specialized
				information systems, technology and risk and regulatory compliance
				issues. <br /> <br />
				Our areas of expertise include strategic and tactical organizational
				transformation, project management and vendor case study analysis.{' '}
				<br /> <br />
				We have a diversified range of expert consultants within the investment
				banking, asset management, retail banking, insurance, energy and the
				hedge fund industry.
			</S.Description>
		</S.ContentWrapper>
	</S.BackgroundWrapper>
)

export default Background
