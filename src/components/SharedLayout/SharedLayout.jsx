import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from '../App/App.styled';
import { TbMovie } from 'react-icons/tb';

import {
  HeaderWrapper,
  StyledSharedLayout,
  StyledNavLink,
  LinkWrapper,
  StyledLinkLogo,
} from './SharedLayout.styled';
import { Loader } from 'components/Loader';

export const Layout = () => {
  return (
    <>
      <StyledSharedLayout>
        <Container>
          <HeaderWrapper>
            <StyledLinkLogo to="/">
              <TbMovie size="48px" />
            </StyledLinkLogo>

            <nav>
              <LinkWrapper>
                <li>
                  <StyledNavLink to="/">Home</StyledNavLink>
                </li>

                <li>
                  <StyledNavLink to="/movies">Movies</StyledNavLink>
                </li>
              </LinkWrapper>
            </nav>
          </HeaderWrapper>
        </Container>
      </StyledSharedLayout>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
