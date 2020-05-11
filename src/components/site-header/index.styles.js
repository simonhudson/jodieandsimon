'use strict';

import styled, { css } from 'styled-components';
import { rem } from 'polished';

const Header = styled.header`
	background: ${({ theme }) => theme.palette.primary.white};
	margin-bottom: ${rem(20)};
	padding: ${rem(20)} 0 0 0;
	position: sticky;
	top: 0;
	transition: box-shadow .5s ease-in-out;
	width: 100%;
	z-index: ${({ theme }) => theme.zIndex.indexOf('site-header')};

	${(props) =>
		props.isScrolled &&
		css`
			box-shadow: 0 0 5px #5d5d5d;
		`};

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
		padding: 0;
		`
		)};

}`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			align-items: center;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			`
		)};
`;

export { Header, Inner };
