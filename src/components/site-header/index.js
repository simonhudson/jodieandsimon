'use strict';

import React, { Component } from 'react';
import { Header, Inner } from './index.styles';
import SiteLogo from '~/components/site-logo';
import MainNavigation from '~/components/main-navigation';

class SiteHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isScrolled: false,
		};
	}

	componentDidMount = () => {
		this.addEventListeners();
	};

	addEventListeners = () => {
		window.addEventListener('scroll', () => {
			const top = typeof window.scrollY === 'undefined' ? window.pageYOffset : window.scrollY;
			this.setState({ isScrolled: top > 0 });
		});
	};

	render = () => {
		const { props, state } = this;
		return (
			<Header {...props} isScrolled={state.isScrolled}>
				<props.theme.layout.Wrap>
					<Inner>
						<SiteLogo />
						<MainNavigation {...props} />
					</Inner>
				</props.theme.layout.Wrap>
			</Header>
		);
	};
}

export default SiteHeader;
