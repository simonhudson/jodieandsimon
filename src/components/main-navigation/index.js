'use strict';

import React, { Component } from 'react';
import Link from 'next/link';
import routes from '~/config/routes';
import { Wrapper, List, Item, ItemLink } from './index.styles';
import { layout } from '~/theme';

class MainNavigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false,
			toggleClicked: false,
		};
	}

	componentDidMount = () => {};

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

	open = () => this.setState({ isVisible: true });
	close = (e) => {
		this.setState({ isVisible: false });
		this.scrollToSection(e);
	};

	scrollToSection = (e) => {
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
		const targetElement = document.getElementById(e.target.getAttribute('href').substr(1));
		if (!targetElement) return;
		targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	render = () => {
		const { props, state } = this;
		return (
			<>
				<Wrapper isVisible={state.isVisible} toggleClicked={state.toggleClicked} data-test="main-navigation">
					<layout.Wrap>
						<List>
							{routes.map((item, index) => {
								if (item.omitFromNavigation) return null;
								return (
									<Item key={index}>
										<Link href={`#${item.id}`}>
											<ItemLink
												onClick={(e) => this.close(e)}
												href={`#${item.id}`}
												isCurrentPage={props.currentPage.route === item.href}
											>
												{item.label}
											</ItemLink>
										</Link>
									</Item>
								);
							})}
						</List>
					</layout.Wrap>
				</Wrapper>
			</>
		);
	};
}

export default MainNavigation;
