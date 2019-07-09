import React from 'react'
import AnimatedCard from '../../../components/animated-card'
import { RED } from '../../../assets/colors'
import * as S from './CaseStudies.styled'

const CaseStudies = ({ onClick }) => (
	<S.CaseStudyWrapper onClick={onClick}>
		<S.CaseStudyTitle>Case Studies</S.CaseStudyTitle>
		<AnimatedCard
			title="MDC Case Studies"
			description="WE RECAP OUR STRATEGIES and financial outcomes for the work we've done for IGM, CPPIB, Fiera, PSP and Scotiabank. For example, we analyzed the market data spend trend for IGM, and realized that restructuring the market data management function and executing the identified savings strategies would decrease IGM’s projected market data spend by $2.7MM in 2021, a $4.5MM  3-year cumulative decline."
			notchColor={RED}
		/>
	</S.CaseStudyWrapper>
)

export default CaseStudies
