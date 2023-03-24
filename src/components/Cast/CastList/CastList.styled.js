import styled from 'styled-components';

export const StyledCastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const CastItemWrapper = styled.div`
display: flex;
flex-direction: column;
height: 100%;
`;

export const StyledCastItem = styled.li`
  flex-basis: calc((100% - ${({ theme }) => theme.spacing(2)}) / 2);

  overflow: hidden;
  border-radius: 4px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    flex-basis: calc((100% - 3 * ${({ theme }) => theme.spacing(2)}) / 4);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    flex-basis: calc((100% - 4 * ${({ theme }) => theme.spacing(2)}) / 5);
  }
`;

export const CastThumb = styled.div`
  width: 100%;

  > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;

export const StyledCastTitle = styled.div`
padding: ${({ theme }) => theme.spacing(2)};
font-size: ${(({ theme }) => theme.fontSizes.small)};
color: ${(({ theme }) => theme.colors.white)};
background-color: ${(({ theme }) => theme.colors.backgroundColor)};
flex-grow: 1;
`;

export const StyledCastName = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;
