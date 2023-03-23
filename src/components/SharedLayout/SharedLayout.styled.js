import styled from "styled-components";

import { NavLink } from 'react-router-dom';


export const StyledSharedLayout = styled.header`
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.backgroundColor}`};;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const StyledNavLink = styled(NavLink)`
font-size: ${({ theme }) => theme.fontSizes.medium};
font-weight: 500;
padding: 8px 16px;
border-radius: 4px;
text-decoration: none;
color: ${(({ theme }) => theme.colors.primaryTextColor)};

text-transform: uppercase;

transition-property: color, background-color;
transition: color ${(({ theme }) => theme.transition)}, background-color ${(({ theme }) => theme.transition)};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${(({ theme }) => theme.colors.accent)};
  }

  &.active {
  color: ${(({ theme }) => theme.colors.white)};
  background-color: ${(({ theme }) => theme.colors.accent)};
}
`
export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2)};
`;


export const MovieThumb = styled.div`
height:400px;
  width: 100%;

  transform: scale(1);
  transition-property: transform;
  transition: transform ${(({ theme }) => theme.transition)};

  &:hover,
  &:focus {
    cursor: zoom-in;
    transform: scale(1.02);
  }

  > img {
  height: 100%;
  object-fit: cover;
}

@media screen and (min-width: ${({ theme }) => theme.breakpoints.l})  {
height:500px;
}
`;

export const MovieItem = styled.li`
flex-basis: calc((100% - ${({ theme }) => theme.spacing(2)}) / 2);

  overflow: hidden;
  border-radius: 4px;
  border-right: ${(({ theme }) => theme.borderColor)};
  border-bottom: ${(({ theme }) => theme.borderColor)};
  border-left: ${(({ theme }) => theme.borderColor)};

  transition-property: box-shadow;
  transition: box-shadow ${(({ theme }) => theme.transition)};

  &:hover,
  &:focus {
    box-shadow: ${(({ theme }) => theme.boxShadow)};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    flex-basis: calc((100% - 2 * ${({ theme }) => theme.spacing(2)}) / 3);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.l}) {
    flex-basis: calc((100% - 3 * ${({ theme }) => theme.spacing(2)}) / 4);
  }
`;

export const MovieTitle = styled.p`
  padding: 10px;
font-size: ${(({ theme }) => theme.fontSizes.small)};
font-weight: 500;
color: ${(({ theme }) => theme.colors.white)};
background-color: ${(({ theme }) => theme.colors.backgroundColor)};
`;


