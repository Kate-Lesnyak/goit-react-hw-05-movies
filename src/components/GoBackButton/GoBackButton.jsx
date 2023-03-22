import { StyledGoBackButton } from './GoBackButton.styled';

export const GoBackButton = ({ to, children }) => {
  return <StyledGoBackButton to={to}>{children}</StyledGoBackButton>;
};
