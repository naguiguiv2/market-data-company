import { useState, useEffect } from 'react'
import Router from 'next/router'
import * as S from './Landing.styled'
import Button from '../../../components/button'
import TabBar from '../../../components/tab-bar'

const Landing = () => {
	const [current, setCurrent] = useState(0)
	const landingGifUrls = [
		'/static/gifs/financial-business-chart.gif',
		'/static/gifs/new-york-cityscape.gif'
	]

	useEffect(() => {
		const next = (current + 1) % landingGifUrls.length
		const id = setTimeout(() => setCurrent(next), 5990)
		return () => clearTimeout(id)
	}, [current])

	return <S.LandingWrapper style={{ backgroundImage: `url("${landingGifUrls[current]}")` }}>
		<S.ContentWrapper>
			<TabBar />
			<S.Title>
				Industry research by
				<br /> industry experts.
			</S.Title>
			<S.Description>
				We are a boutique consulting firm serving the financial information
				services industry. Our consultants are industry experts on market and
				reference data products and investment management solutions.
				<br />
				<br />
				As North America's leading market data solutions consultancy we understand
				the importance of data in the financial markets and global economy.
				As market observers we carefully track, analyze, and interpret market data
				in providing our clients with tailored investment solutions.
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
	</S.LandingWrapper>
}

export default Landing

// /static/gifs/traffic-and-pedestrians-in-front-of-tower-bridge.gif
// /static/gifs/tourists.gif