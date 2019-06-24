import React from 'react'
import AnimatedCard from '../../../components/animated-card'
import { BABY_BLUE } from '../../../assets/colors'
import * as S from './Survey.styled'

const Survey = () => (
	<S.SurveyWrapper>
		<S.SurveyTitle>Surveys</S.SurveyTitle>
		<AnimatedCard
			title="2017 Market Data Survey Insights"
			description="IN A SURVEY CONDUCTED BY Market Data Professionals, MDC revealed three major concerns and priorities: 1 Managing market data spend is top priority, 2 Market data teams and their leadership have conflicting spend expectations, 3 Half are accountable for invoice reconciliation, a critical element for monitoring and reporting spend ..."
			footer="View survey"
			notchColor={BABY_BLUE}
		/>
	</S.SurveyWrapper>
)

export default Survey
