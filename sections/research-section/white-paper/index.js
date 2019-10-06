import React from 'react'
import AnimatedCard from '../../../components/animated-card'
import { PINK } from '../../../assets/colors'
import * as S from './WhitePaper.styled'

const WhitePaper = ({ onClick }) => (
	<S.WhitePaperWrapper>
		<S.WhitePaperTitle>White Papers</S.WhitePaperTitle>
		<S.CardContentContainer>

			<S.CardWrapper>
				<AnimatedCard
						title="FRTB and the Next Generation of Risk Framework Data"
						description="The ability to apply accurate and relevant data is the key to unlocking future business benefits under the Fundamental Review of the Trading Book (FRTB) regime and the strengthening of the value-at-risk (VaR) framework for capital adequacy. Among the many ambiguities of implementing the new regulation, internal modelling of market risk..."
						notchColor={PINK}
						onClick={() => onClick('riskFramework')}
					/>
			</S.CardWrapper>

			<S.CardWrapper>
				<AnimatedCard
				title="Uncovering the FRTB &amp; Non-Modellable Risk Factors"
				description="HARNESSING DATA is a critical element in complying with the Fundamental Review of the Trading Book (FRTB) regulation. Banks are obliged to grasp incremental data requirements against their existing data calculation models and calculators. Banks will need to identify whether their risk factors can be modelled or not ..."
				notchColor={PINK}
				onClick={() => onClick('riskFactors')}
			/>	
			</S.CardWrapper>
					
		</S.CardContentContainer>

	</S.WhitePaperWrapper>
)

export default WhitePaper
