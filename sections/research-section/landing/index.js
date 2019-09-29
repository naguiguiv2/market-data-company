import * as S from './Landing.styled'
import TabBar from '../../../components/tab-bar'

const Landing = () => (
	<S.LandingWrapper>
		<S.ContentWrapper>
			<TabBar/>
			<S.Content>
				<S.Description>
					MDC has done extensive analytics research over the past 10 years. Our findings have been linked to
					effective operational management, and have been used to
					improve client intelligence, trading strategies, and
					business productivity.
				</S.Description>
			</S.Content>
		</S.ContentWrapper>
	</S.LandingWrapper>
)

export default Landing
