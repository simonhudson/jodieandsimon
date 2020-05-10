'use strict';

import React, { Component } from 'react';
import Home from '~/sections/home';
import WhenWhere from '~/sections/when-where';
import RSVP from '~/sections/rsvp';
import Contact from '~/sections/contact';

class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount = () => {};

	render = () => {
		return (
			<>
				<Home {...this.props} />
				<WhenWhere {...this.props} />
				<RSVP {...this.props} />
				<Contact {...this.props} />
			</>
		);
	};
}

export default Index;
