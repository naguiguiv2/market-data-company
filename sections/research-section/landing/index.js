import * as S from './Landing.styled'
import TabBar from '../../../components/tab-bar'

const Landing = () => (
	<S.LandingWrapper>
		<TabBar barTheme="dark" />
		<S.Content>
			<S.Description>
				MDC has done extensive research over the past 10 years through its
				qualitative and quantitative analytics. Our findings have been linked to
				the strength of a firms operational management, and have been used to
				improve capabilities in client intelligence, trading strategies, and
				business productivity.
			</S.Description>
		</S.Content>
	</S.LandingWrapper>
)

export default Landing
