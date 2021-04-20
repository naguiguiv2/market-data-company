import React from 'react'
import AnimatedFooterLink from '../../../components/animated-footer-link'
import * as S from './LeaderMarketData.styled'

const LeaderMarketData = () => {
	return (
		<S.LeaderMarketDataWrapper>
			<S.Content>
				<S.InfoWrapper>
					<S.Title>Leader in market data consulting</S.Title>
					<S.InfoText>
						Market Data Company is a professional consulting firm with experts
						skilled in market data products, solutions and contract vendor management.
						We are committed to helping teams uncover insights that
						improve how they manage their market and reference data relationships.
					</S.InfoText>
					<S.InfoText>
						We partner with our clients to answer the growing demands of their
						business by providing the expertise in the details that lead to
						increased profitability. Specifically, we offer a series of
						diagnostic tools that drive down costs while optimizing services.
						Learn more about how our Data License Compliance Manager tool can
						benefit your business in the video below:
					</S.InfoText>
					<S.VideoWrapper>
						<iframe src="https://player.vimeo.com/video/389039609" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
						{/* <p><a href="https://vimeo.com/389039609">Market Data Digital Compliance</a> from <a href="https://vimeo.com/user108216748">Market data company</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */}

					</S.VideoWrapper>
				</S.InfoWrapper>
				<S.FactsWrapper>
					<S.ProjectsCompletedWrapper>
						<S.NumberText>147</S.NumberText>
						<S.FactsText>Projects completed</S.FactsText>
					</S.ProjectsCompletedWrapper>
					<S.ProjectsCompletedWrapper>
						<S.NumberText>$354MM</S.NumberText>
						<S.FactsText>Client dollars saved</S.FactsText>
					</S.ProjectsCompletedWrapper>
				</S.FactsWrapper>
			</S.Content>
		</S.LeaderMarketDataWrapper>
	)
}

export default LeaderMarketData
