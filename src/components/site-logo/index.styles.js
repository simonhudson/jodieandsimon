'use strict';

import styled from 'styled-components';
import { rem } from 'polished';

const Text = styled.p`
	color: ${({ theme }) => theme.palette.primary.b};
	font-family: ${({ theme }) => theme.font.cursive};
	font-size: ${rem(50)};
	line-height: inherit;
	margin: 0 0 ${rem(20)} 0;
	text-align: center;
`;

export { Text };