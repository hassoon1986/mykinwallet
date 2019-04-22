import styled from 'styled-components';
import media from './breakpoints';
import { blackish } from 'style/theme/generalVariables';

export const H1 = styled.h1`
	${({ theme }) => theme.h1.mobile}
	${media.md`
        ${({ theme }) => theme.h1.desktop}
    `}
    font-family:SailecBold;
	margin: 0 0 18px 0;
	${media.md`
        margin: 145px 0 18px 0;
    `}
	${media.lg`
        margin: 124px 0 18px 0;
    `}
	${media.xl`
        margin: 154px 0 18px 0;
    `}
`;

export const H6 = styled.div`
	${({ theme }) => theme.h6.mobile}
	${media.md`
    ${({ theme }) => theme.h6.desktop}
    `}
    font-family:primaryFont;
	margin: 0 0 36px 0;
`;
export const ErrorText = styled.div`
	${({ theme }) => theme.h6.mobile}
	${media.md`
    ${({ theme }) => theme.h6.desktop}
    `}
    font-family:primaryFont;
`;

export const H3 = styled.h3`
	font-family: SailecBold;
	margin: 0;
	${({ theme }) => theme.h3.mobile}
	${media.md`
    ${({ theme }) => theme.h3.desktop}
    `}
`;

export const A = styled.span`
	color: ${blackish};
	text-decoration: underline;
`;
