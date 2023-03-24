import styled from 'styled-components';

export const MovieWrapper = styled.div`
display: flex;
align-items: center;
gap: ${(({ theme }) => theme.spacing(6))};
justify-content: start;
margin-bottom: ${(({ theme }) => theme.spacing(5))};
`;

export const StyledHeadingTitle = styled.h2`
margin-bottom: ${(({ theme }) => theme.spacing(6))};
`;

export const StyledAverage = styled.p`
margin-bottom: ${(({ theme }) => theme.spacing(5))};
`;

export const StyledHeadingOverview = styled.h3`
margin-bottom: ${(({ theme }) => theme.spacing(4))};
`;

export const StyledHeadingGenres = styled.h4`
margin-bottom: ${(({ theme }) => theme.spacing(4))};
`;

export const StyledPparagraph = styled.p`
margin-bottom: ${(({ theme }) => theme.spacing(5))};
`;
