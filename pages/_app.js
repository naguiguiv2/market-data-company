import App, { Container } from 'next/app'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'styled-components'
import theme from '../assets/theme'
import GlobalStyles from '../styles/GlobalStyles'

export default class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}

	render() {
		const { Component, pageProps } = this.props
		return (
			<Container>
				<GlobalStyles />
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</Container>
		)
	}
}
