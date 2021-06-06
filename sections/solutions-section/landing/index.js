import * as S from './Landing.styled'
import TabBar from '../../../components/tab-bar'

const Landing = () => (
    <S.LandingWrapper>
        <S.ContentWrapper>
            <TabBar />
            <S.Content>
                <S.Description>
                    Solutions Page
				</S.Description>
            </S.Content>
        </S.ContentWrapper>
    </S.LandingWrapper>
)

export default Landing
