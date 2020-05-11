'use strict';

import React, { Component } from 'react';
import Link from 'next/link';
import routes from '~/config/routes';
import { Wrapper, List, Item, ItemLink } from './index.styles';

class MainNavigation extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount = () => {
		this.setState({ currentSection: 'home' });
	};

	toggle = (e) => {
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
		this.setState({ toggleClicked: true });
		this.state.isVisible ? this.close() : this.open();
		this.toggleScroll();
	};

	toggleScroll = () => {
		const body = document.querySelector('body');
		const NO_SCROLL_CLASS = 'no-scroll';
		const method = this.state.isVisible ? 'remove' : 'add';
		body.classList[method](NO_SCROLL_CLASS);
	};

	handleNavClick = (e) => {
		this.setCurrentSection(e.target.getAttribute('href').substr(1));
		this.scrollToSection(e);
	};

	scrollToSection = (e) => {
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
		const targetElement = document.getElementById(e.target.getAttribute('href').substr(1));
		if (!targetElement) return;
		targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	setCurrentSection = (currentSection) => {
		this.setState({ currentSection });
	};

	isCurrentSection = (item) => this.state.currentSection === item.id;

	render = () => {
		const { state } = this;
		return (
			<>
				<Wrapper isVisible={state.isVisible} toggleClicked={state.toggleClicked} data-test="main-navigation">
					<List>
						{routes.map((item, index) => {
							if (item.omitFromNavigation) return null;
							return (
								<Item key={index}>
									<Link href={`#${item.id}`}>
										<ItemLink
											onClick={(e) => this.handleNavClick(e)}
											href={`#${item.id}`}
											isCurrentSection={this.isCurrentSection(item)}
										>
											{item.label}
										</ItemLink>
									</Link>
								</Item>
							);
						})}
					</List>
				</Wrapper>
			</>
		);
	};
}

export default MainNavigation;
