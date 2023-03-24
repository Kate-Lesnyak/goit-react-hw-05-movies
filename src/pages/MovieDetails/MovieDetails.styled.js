import styled from 'styled-components';

import { LinkWrapper, StyledNavLink } from 'components/SharedLayout/SharedLayout.styled';

export const LinkWrapperMovie = styled(LinkWrapper)`
  justify-content: start;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const StyledLinkMovie = styled(StyledNavLink)`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: 4px 8px;
  text-transform: capitalize;
`;

export const StyledHeadingAdditional = styled.h3`
margin-bottom: ${(({ theme }) => theme.spacing(4))};
`;
