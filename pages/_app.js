import App, { Container } from 'next/app'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'styled-components'
import theme from '../assets/theme'
import GlobalStyles from '../styles/GlobalStyles'
import { StoreProvider } from '../store/useStore'

import analyticsService from '../services/analyticsService'

export default class MyApp extends App {
	state = {
		currentRoute: this.props.router.route
	}

	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}

	componentDidUpdate() {
		if (this.state.currentRoute !== this.props.router.route) {
			this.setState(
				{
					currentRoute: this.props.router.route
				},
				() => {
					analyticsService.trackPage(this.state.currentRoute)
				}
			)
		}
	}

	/**
	 * Initializes GA if has not been initialized yet
	 */
	componentDidMount() {
		const { currentRoute } = this.state

		if (!window.GA_INITIALIZED) {
			analyticsService.initialize()
			window.GA_INITIALIZED = true
		}

		analyticsService.trackPage(currentRoute)
	}

	render() {
		const { Component, pageProps } = this.props
		return (
			<Container>
				<StoreProvider>
					<GlobalStyles />
					<ThemeProvider theme={theme}>
						<Component {...pageProps} />
					</ThemeProvider>
				</StoreProvider>
			</Container>
		)
	}
}
