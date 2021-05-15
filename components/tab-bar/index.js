import React, { useState } from 'react'
import Link from 'next/link'
import Modal from '../modal'
import HamburgerMenuContent from '../hamburger-menu-content'

import * as S from './TabBar.styled'

const linkData = [
	{
		href: '/research',
		tabName: 'Research'
	},
	{
		href: '/contact',
		tabName: 'Contact'
	},
	{
		href: '/solutions',
		tabName: 'Solutions'
	},
	{
		href: '/videos',
		tabName: 'Videos'
	}
]

const TabBar = (props) => {
	const { barTheme, backgroundColor } = props
	const [solutionsMenuHidden, setSolutionsMenuHidden] = useState(true)
	const [modalVisible, setModalVisible] = useState(false)

	const vertOffset = 40
	const initOffset = 60

	const handleMouseEnter = () => {
		setSolutionsMenuHidden(false)
	}

	const handleMouseLeave = () => {
		setSolutionsMenuHidden(true)
	}

	const renderLinks = () => {
		return linkData.map((data) => {
			if (data.tabName === 'Solutions') {
				return (
					<div>
						<Link key={data.href} href={data.href}>
							<S.Tab barTheme={barTheme} onMouseEnter={handleMouseEnter} >{data.tabName}</S.Tab>
						</Link>
						<S.DropDown onMouseLeave={handleMouseLeave} hidden={solutionsMenuHidden}>
							<S.DropDownItem style={{ top: `${initOffset}px` }}>ReVal</S.DropDownItem>
							<S.DropDownItem style={{ top: `${initOffset + vertOffset}px` }}>Big Bloom</S.DropDownItem>
							<S.DropDownItem style={{ top: `${initOffset + vertOffset * 2}px` }}>Benchmarking</S.DropDownItem>
							<S.DropDownItem style={{ top: `${initOffset + vertOffset * 3}px` }}>Optimization</S.DropDownItem>
							<S.DropDownItem style={{ top: `${initOffset + vertOffset * 4}px` }}>Data Audit</S.DropDownItem>
							<S.DropDownItem style={{ top: `${initOffset + vertOffset * 5}px` }}>Expert Witness</S.DropDownItem>
						</S.DropDown>
					</div>
				)
			} else {
				return (
					<Link key={data.href} href={data.href}>
						<S.Tab barTheme={barTheme}>{data.tabName}</S.Tab>
					</Link>
				)
			}
		})
	}

	const WebTabBar = () => (
		<S.TabWrapper>
			<Link href="/">
				<S.Tab>
					{barTheme === 'dark' && (
						<img
							src="/static/images/mdc-logo-horizontal-black.png"
							srcSet="/static/images/mdc-logo-horizontal-black@1x.png 1x, /static/images/mdc-logo-horizontal-black@2x.png 2x,
                                  /static/images/mdc-logo-horizontal-black@3x.png 3x"
						/>
					)}
					{barTheme !== 'dark' && (
						<img
							src="/static/images/mdc-logo-horizontal.png"
							srcSet="/static/images/mdc-logo-horizontal@1x.png 1x, /static/images/mdc-logo-horizontal@2x.png 2x,
                                 /static/images/mdc-logo-horizontal@3x.png 3x"
						/>
					)}
				</S.Tab>
			</Link>
			{renderLinks()}
		</S.TabWrapper>
	)

	const MobileTabBar = () => (
		<S.MobileTabWrapper>
			<Link href="/">
				<div>
					{barTheme === 'dark' && (
						<img
							src="/static/images/mdc-logo-horizontal-black.png"
							srcSet="/static/images/mdc-logo-horizontal-black@1x.png 1x, /static/images/mdc-logo-horizontal-black@2x.png 2x,
                                  /static/images/mdc-logo-horizontal-black@3x.png 3x"
						/>
					)}
					{barTheme !== 'dark' && (
						<img
							src="/static/images/mdc-logo-horizontal.png"
							srcSet="/static/images/mdc-logo-horizontal@1x.png 1x, /static/images/mdc-logo-horizontal@2x.png 2x,
                                 /static/images/mdc-logo-horizontal@3x.png 3x"
						/>
					)}
				</div>
			</Link>
			<div onClick={() => setModalVisible(true)}>
				{barTheme === 'dark' && (
					<img
						src="/static/images/black-hamburger.png"
						srcSet="/static/images/black-hamburger.png 1x, /static/images/black-hamburger@2x.png 2x,
									 /static/images/black-hamburger@3x.png 3x"
					/>
				)}
				{barTheme !== 'dark' && (
					<img
						src="/static/images/hamburger.png"
						srcSet="/static/images/hamburger.png 1x, /static/images/hamburger@2x.png 2x,
									 /static/images/hamburger@3x.png 3x"
					/>
				)}
			</div>
		</S.MobileTabWrapper>
	)

	return (
		<S.Wrapper themeDark={true} backgroundColor={backgroundColor}>
			<WebTabBar />
			<MobileTabBar />
			<Modal
				modalVisible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
			>
				<HamburgerMenuContent onCloseModal={() => setModalVisible(false)} />
			</Modal>
		</S.Wrapper>
	)
}

TabBar.defaultProps = {
	barTheme: 'light'
}

export default TabBar
