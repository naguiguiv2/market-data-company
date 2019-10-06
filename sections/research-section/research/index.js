import React from 'react'
import AnimatedCard from '../../../components/animated-card'
import * as S from './Research.styled'

const Research = ({ onClick }) => (
	<S.ResearchWrapper>
		<S.ResearchTitle>Research</S.ResearchTitle>
		<S.CardContentContainer>
			<S.CardWrapper>
				<AnimatedCard
					title="Data Management Compliance: The Right to Audit"
					description="THE RIGHT TO AUDIT is a common phrase used in most every Data Vendor or Exchange Agreement (Data Provider Agreements). It is neither new, misunderstood, nor misrepresented. Yet this term has wreaked havoc of late, as it exposes the three modern day plagues causing considerable distress amongst financial..."
					onClick={() => onClick('rightToAudit')}
				/>
			</S.CardWrapper>
			<S.CardWrapper>
				<AnimatedCard
					title="The Value of Market Data Administration: Transparency, Accountability & Governance"
					description="AS FINANCIAL FIRMS GRAPPLE with increasing demands for market data, dealing with the number and complexity of market data licenses and subscriptions can be overwhelming. The volume and variety challenges their ability to effectively manage costs, control user-access, monitor usage, and produce ..."
					onClick={() => onClick('accountabilityAndGovernance')}
				/>
			</S.CardWrapper>
			<S.CardWrapper>
				<AnimatedCard
					title="MDC Forecasts 10-13% Increase in Data Spend"
					description="WITHOUT ANY CHANGE to consumption, service mix, or even annual price increases, Canadian-based financial services firms can expect a +10% price increase in their Market and Reference Data spend for 2014. To understand why, firms need only look to the fall of the CAD$ relative to the US$ for the change that will impact their general ledgers..."
					onClick={() => onClick('dataSpend')}
				/>
			</S.CardWrapper>
			<S.CardWrapper>
				<AnimatedCard
					title="Market data management: An identity crisis"
					description="THE MARKET DATA MANAGEMENT function is currently suffering from what some might describe as an identity crisis. Its purpose and value in many organizations is currently being whipsawed by strategic decision makers taking a one-dimensional approach to the discipline – save costs. Organizations that are taking this limited perspective..."
					onClick={() => onClick('identityCrisis')}
				/>
			</S.CardWrapper>
			<S.CardWrapper>
				<AnimatedCard
					title="Market &amp; Reference Data Management: A Maturing Art"
					description="TO UNDERSTAND HOW organizations should resource the Market Data Management function, MDC has developed a maturity curve that correlates the capabilities required with the nature of an organization’s Service Provider Agreements. These capabilities are bucketed into key practices that a firm must adopt as they increase their…"
					onClick={() => onClick('maturingArt')}
				/>
			</S.CardWrapper>
		</S.CardContentContainer>
	</S.ResearchWrapper>
)
export default Research
