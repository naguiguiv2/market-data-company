import { useState, useEffect } from 'react'
import Router from 'next/router'
import * as S from './Landing.styled'
import Button from '../../../components/button'
import TabBar from '../../../components/tab-bar'
import TickerTape from '../../../components/ticker-tape'

const Landing = () => {
	return <S.LandingWrapper>
		<S.BannerWrapper>
			<S.ContentWrapper>
				<TabBar />
				<S.Title>
					Industry research by
					<br />
					industry experts.
				</S.Title>
				<S.Description>
					We are a boutique consulting firm serving the financial information
					services industry. Our consultants are industry experts on market and
					reference data products and investment management solutions.
					<br />
					<br />
					As North America's leading market data solutions consultancy we understand
					the importance of data in the financial markets and global economy.
				</S.Description>
				<S.ButtonWrapper>
					<Button
						btnText="View Research"
						onClick={() => Router.push('/research')}
					/>
					<Button
						btnText="Contact us"
						isDefault={false}
						onClick={() => Router.push('/contact')}
					/>
				</S.ButtonWrapper>
			</S.ContentWrapper>
		</S.BannerWrapper>
		<div><TickerTape /></div>
	</S.LandingWrapper>
}

export default Landing

// /static/gifs/traffic-and-pedestrians-in-front-of-tower-bridge.gif
// /static/gifs/tourists.gif