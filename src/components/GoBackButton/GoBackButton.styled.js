import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledGoBackButton = styled(Link)`
  display: inline-block;
  font-size: ${(({ theme }) => theme.fontSizes.small)};
  font-weight: 500;
  padding: 8px 16px;
  margin-bottom: ${({ theme }) => theme.spacing(5)};

  color: ${({ theme }) => theme.colors.primaryTextColor};

  border: ${({ theme }) => `1px solid ${theme.colors.accent}`};
  border-radius: ${({ theme }) => theme.spacing(2)};

  text-decoration: none;
  text-transform: uppercase;


  transition-property: color, background-color, box-shadow;
  transition: ${({ theme }) => `background-color ${theme.transition}, color ${theme.transition}, box-shadow ${theme.transition}`};

  &:hover, &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.boxShadow};
}
`;

