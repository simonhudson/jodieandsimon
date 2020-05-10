'use strict';

import React from 'react';
import { Header } from './index.styles';
import SiteLogo from '~/components/site-logo';
import MainNavigation from '~/components/main-navigation';

const SiteHeader = (props) => {
	return (
		<Header {...props}>
			<SiteLogo />
			<MainNavigation {...props} />
		</Header>
	);
};

export default SiteHeader;
