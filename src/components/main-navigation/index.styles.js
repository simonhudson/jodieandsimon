'use strict';

import styled, { css } from 'styled-components';
import { rem } from 'polished';

const Wrapper = styled.nav`
	${({ theme }) => theme.animation.defaults}
	background: #fff;
	height: auto;
	padding: ${rem(10)} 0;
	width: 100%;
	z-index: 3;
}`;

const Overlay = styled.div`
	${({ theme }) => theme.animation.defaults}
	background: rgba(0, 0, 0, 0.25);
	height: 100vh;
	left: 0;
	position: absolute;
	top: 0;
	width: 100vw;
	z-index: 1;
`;

const List = styled.ul`
	display: flex;
	justify-content: flex-end;
	list-style: none;
`;

const Item = styled.li`
	&:not(:last-of-type) {
		margin-right: ${rem(20)};
	}
`;

const ItemLink = styled.a`
	color: ${({ theme }) => theme.palette.primary.bodyText};
	display: block;
	font-size: ${rem(12)};
	font-weight: 500;
	padding: ${rem(10)};
	text-decoration: none;
	text-transform: uppercase;

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			border: 0;
			font-size: ${rem(14)};
			padding: ${rem(30)} ${rem(20)};
			`
		)};

	${(props) =>
		props.isCurrentPage &&
		css`
			${({ theme }) =>
				theme.media(
					'tablet-l',
					`
				border-bottom: ${rem(1)} solid ${theme.palette.primary.b};
				`
				)};
		`};
`;

export { Wrapper, Overlay, List, Item, ItemLink };
