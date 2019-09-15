import React from 'react'
import AnimatedCard from '../../../components/animated-card'
import AnimatedFooterLink from '../../../components/animated-footer-link'
import * as S from './Research.styled'

const Research = ({ onClick }) => {
	return (
		<S.ResearchWrapper>
			<S.HeaderWrapper>
				<S.HeaderTitle>Research &amp; Case Studies</S.HeaderTitle>
				<S.HeaderDescription>
					MDC has completed extensive research over the past 10 years. Our findings have been linked
					to the strength of a firms operational management, and can be used to improve 
					capabilities across client intelligence, trading strategies, and business
					productivity.
				</S.HeaderDescription>
			</S.HeaderWrapper>
			<S.CardContentWrapper>
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
			</S.CardContentWrapper>
			<AnimatedFooterLink message="View all of our research" href="/research" />
		</S.ResearchWrapper>
	)
}

export default Research
