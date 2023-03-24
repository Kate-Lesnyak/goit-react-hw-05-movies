import styled from "styled-components";

export const StyledReviewsList = styled.ul`
display: flex;
flex-direction: column;
gap: ${(({ theme }) => theme.spacing(4))};
`;

export const StyledReviewsItem = styled.li`
display: flex;
flex-direction: column;
gap: ${(({ theme }) => theme.spacing(1))};
`;

