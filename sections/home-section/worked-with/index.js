import React, { useState } from 'react'
import { Carousel, CarouselItem } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CompanyCard from '../../../components/company-card'
import * as S from './WorkedWith.styled'

const COMPANY_DATA = [
	{
		title: 'Canada Pension Plan Investment Board',
		description: `“MDC identified and realized vendor cost savings of 12% of our spend, and then developed a target state organization with capabilities to effectively manage market data products, consumption, costs and vendors”`,
		role: 'Marc Odho – Head of Data Management',
		company: 'PSP'
	},
	{
		title: 'PSP Investissements',
		description: `“The team at Market Data Company is great to work with. Each consultant has their own strengths and weaknesses, and are great at what they do. In my book, I highly recommend the entire team at MDC.”`,
		role: 'Alex DiCristofano, Director of Market Data',
		company: 'Aviva'
	},
	{
		title: 'Aviva Investors',
		description: `“Robert and his team brought the right expertise to the job, making the transitional program easier to manage. MDC’s approach to market data supported our Global operations and provided a clear line of sight to our vendor spend.”`,
		role: 'Kelly McManis, Head of Operations',
		company: 'Swiss Re'
	},
	{
		title: 'Swiss Re',
		description: `“MDC’s product Kiaro’s overspend report clearly articulated where Bloomberg data was being replicated within our technology envirorment. As a result we closed down several jobs that lead to $450,000 in cost savings.”`,
		role: 'Eric Kemeny, Vice President, Group Asset Management',
		company: 'CPPIB'
	}
]

const WorkedWith = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [animating, setAnimating] = useState(false)

	const onExiting = () => {
		setAnimating(true)
	}

	const onExited = () => {
		setAnimating(false)
	}

	const next = () => {
		if (animating) {
			return
		}
		const nextIndex =
			activeIndex === COMPANY_DATA.length - 1 ? 0 : activeIndex + 1
		setActiveIndex(nextIndex)
	}

	const carouselItems = COMPANY_DATA.map((item) => {
		return (
			<CarouselItem
				onExiting={onExiting}
				onExited={onExited}
				key={item.company}
			>
				<CompanyCard
					title={item.title}
					description={item.description}
					role={item.role}
					company={item.company}
					onNext={next}
				/>
			</CarouselItem>
		)
	})

	return (
		<S.WorkedWithWrapper>
			<S.Title>Who we’ve worked with</S.Title>
			<S.Description>
				Our consultants are industry experts on market and reference data
				products and investment management solutions. MDC delivers results that
				make financial differences.
			</S.Description>
			<S.CardWrapper>
				<Carousel
					activeIndex={activeIndex}
					next={next}
					previous={() => {}}
					interval={false}
				>
					{carouselItems}
				</Carousel>
			</S.CardWrapper>
			<S.LogoContentWrapper>
				<S.LogoWrapper>
					<img
						src="../../static/images/cppib.png"
						srcSet="../../static/images/cppib@1x.png 1x, ../../static/images/cppib@2x.png 2x,
									 ../../static/images/cppib@3x.png 3x"
					/>
				</S.LogoWrapper>
				<S.LogoWrapper>
					<img
						src="../../static/images/psp.png"
						srcSet="../../static/images/psp@1x.png 1x, ../../static/images/psp@2x.png 2x,
									 ../../static/images/psp@3x.png 3x"
					/>
				</S.LogoWrapper>
				<S.LogoWrapper>
					<img
						src="../../static/images/aviva.png"
						srcSet="../../static/images/aviva@1x.png 1x, ../../static/images/aviva@2x.png 2x,
									 ../../static/images/aviva@3x.png 3x"
					/>
				</S.LogoWrapper>
				<S.LogoWrapper>
					<img
						src="../../static/images/iiroc.png"
						srcSet="../../static/images/iiroc@1x.png 1x, ../../static/images/iiroc@2x.png 2x,
									 ../../static/images/iiroc@3x.png 3x"
					/>
				</S.LogoWrapper>
			</S.LogoContentWrapper>
		</S.WorkedWithWrapper>
	)
}

export default WorkedWith
