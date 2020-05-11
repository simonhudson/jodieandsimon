import styled from 'styled-components';
import { rem } from 'polished';

const Section = styled.section`
	padding: ${rem(20)} 0;
	scroll-margin-top: ${rem(128)};

	&:nth-of-type(2n) {
		background: #fbfbfb;
	}

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			scroll-margin-top: ${rem(70)};
			`
		)};
`;

export { Section };
