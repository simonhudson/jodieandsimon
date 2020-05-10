'use strict';

import React from 'react';
import { Header } from './index.styles';
import MainNavigation from '~/components/main-navigation';

const SiteHeader = (props) => {
	return (
		<Header {...props}>
			<MainNavigation {...props} />
		</Header>
	);
};

export default SiteHeader;
