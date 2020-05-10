'use strict';

import React, { Component } from 'react';
import Theme from '~/theme';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount = () => {};

	render = () => {
		return (
			<>
				<Theme.layout.Wrap></Theme.layout.Wrap>
			</>
		);
	};
}

export default Home;
