import * as S from './Landing.styled'
import TabBar from '../../../components/tab-bar'

const Landing = () => (
	<S.LandingWrapper>
		<S.ContentWrapper>
			<TabBar barTheme="dark" />
			<S.Content>
				<S.Description>
					Whether you'd like to request a consultation or have any questions for
					us, we'd love to hear from you. Write your message in the below form
					and we'll be in touch.
				</S.Description>
			</S.Content>
		</S.ContentWrapper>
	</S.LandingWrapper>
)

export default Landing
