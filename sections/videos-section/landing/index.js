import * as S from './Landing.styled'
import TabBar from '../../../components/tab-bar'

const Landing = () => (
    <S.LandingWrapper>
        <S.ContentWrapper>
            <TabBar />
            <S.Content>
                <S.Description>
                    Videos Page
				</S.Description>
            </S.Content>
        </S.ContentWrapper>
    </S.LandingWrapper>
)

export default Landing
