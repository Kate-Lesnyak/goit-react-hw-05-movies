import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from '../App/App.styled';
import { TbMovie } from 'react-icons/tb';
import {
  HeaderWrapper,
  StyledSharedLayout,
  StyledNavLink,
  LinkWrapper,
} from './SharedLayout.styled';

export const Layout = () => {
  return (
    <>
      <StyledSharedLayout>
        <Container>
          <HeaderWrapper>
            <TbMovie size="40px" />
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
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
