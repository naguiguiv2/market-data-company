import * as S from './Landing.styled'
import TabBar from '../../../components/tab-bar'

const Landing = () => (
	<S.LandingWrapper>
		<S.ContentWrapper>
			<TabBar barTheme="dark" />
			<S.Content>
				<S.Description>
					We're a team comprised of experienced professionals in the market data
					products and management space. We're committed to helping your firm
					optimize your data spend.
				</S.Description>
			</S.Content>
		</S.ContentWrapper>
	</S.LandingWrapper>
)

export default Landing
