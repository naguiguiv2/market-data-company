import React from 'react'
import Link from 'next/link'
import SocialIcon from '../social-icon'
import * as S from './Footer.styled'

const Footer = () => (
	<S.FooterWrapper>
		<S.ContentWrapper>
			<S.FooterLogoWrapper>
				<img
					src="../../static/images/white.png"
					srcSet="../../static/images/white@1x.png 1x, ../../static/images/white@2x.png 2x,
                                 ../../static/images/white@3x.png 3x"
					width="140"
					height="127"
				/>
			</S.FooterLogoWrapper>
			<S.TextWrapper>
				<S.MarketDataText>
					Market data company is North America’s leading market data solutions
					and consultancy company. We offer specialized consulting services and
					leading market data management solutions that help deal with the
					complexity of your data.
				</S.MarketDataText>
			</S.TextWrapper>
			<S.ExploreAndSocialWrapper>
				<S.ExploreWrapper>
					<S.ExploreTitle>Explore</S.ExploreTitle>
					<Link href="/research">
						<S.ExploreItem>Research</S.ExploreItem>
					</Link>
					<Link href="/team">
						<S.ExploreItem>Our Team</S.ExploreItem>
					</Link>
					<Link href="/contact">
						<S.ExploreItem>Contact</S.ExploreItem>
					</Link>
				</S.ExploreWrapper>
				<S.SocialWrapper>
					<S.SocialTitle>Social</S.SocialTitle>
					<S.SocialContent>
						<SocialIcon url="http://facebook.com" />
						<SocialIcon url="https://www.linkedin.com/company/market-data-company/" />
						<SocialIcon url="http://twitter.com" />
					</S.SocialContent>
				</S.SocialWrapper>
			</S.ExploreAndSocialWrapper>
		</S.ContentWrapper>
	</S.FooterWrapper>
)

export default Footer
