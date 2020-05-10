'use strict';

import styled from 'styled-components';
import { rem } from 'polished';

const Header = styled.header`
	background: ${({ theme }) => theme.palette.primary.white};
	padding: ${rem(20)} 0 0 0;
	position: sticky;
	top: 0;
	width: 100%;
	z-index: ${({ theme }) => theme.zIndex.indexOf('site-header')};

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			display: flex;
			justify-content: space-between;
			padding: 0 ${rem(20)};
			`
		)};

}`;

export { Header };
