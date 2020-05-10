'use strict';

import React from 'react';
import { expect } from 'chai';
import Hero from './index';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, assertElementDoesNotExist, mountWithTheme } from '~/config/tests/utilities';

const baseProps = {
	currentPage: {
		id: 'about',
		name: 'about',
		href: '/about',
	},
};

describe('Hero', () => {
	let objectUnderTest;
	const selector = `div[data-test="hero"]`;
	const heading = `p[data-test="hero__heading"]`;

	afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

	it('should return null when no content config available', () => {
		const props = cloneDeep(baseProps);
		props.currentPage.name = 'foo';
		initialise(props);
		assertElementDoesNotExist(objectUnderTest, [selector, heading]);
	});

	it('should render as expected', () => {
		const props = cloneDeep(baseProps);
		initialise(props);
		assertElementExists(objectUnderTest, [selector, heading]);
	});

	it('should render with expected heading', () => {
		const props = cloneDeep(baseProps);
		initialise(props);
		assertElementExists(objectUnderTest, heading);
		expect(objectUnderTest.find(heading).text()).to.equal('About us');
	});

	const initialise = (props) => (objectUnderTest = mountWithTheme(<Hero {...props} />));
});
