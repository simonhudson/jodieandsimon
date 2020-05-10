'use strict';

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import Theme from '~/theme';
import SiteHeader from '~/components/site-header';
import SiteFooter from '~/components/site-footer';
import routes from '~/config/routes';

// Log accessibility issues to console in non-production environments
if (process.env.APP_ENV !== 'production' && typeof window !== 'undefined') {
	const ReactDOM = require('react-dom');
	const axe = require('react-axe');
	axe(React, ReactDOM, 1000);
}

const App = ({ Component, pageProps }) => {
	const router = useRouter();
	pageProps.currentPage = {
		name: router.route === '/' ? 'home' : router.route.split('/')[1],
		query: router.query,
		route: router.route,
	};

	const pageConfig = routes.filter((route) => pageProps.currentPage.route === route.href)[0];
	let pageTitle = '';
	if (pageConfig) pageTitle = `${pageConfig.pageTitle} | `;

	pageProps.theme = Theme;

	return (
		<>
			<Head>
				<title>{pageTitle}Jodie and Simon</title>
			</Head>
			<ThemeProvider theme={Theme}>
				<SiteHeader {...pageProps} />
				<main>
					<Component {...pageProps} />
				</main>
				<SiteFooter {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default App;
