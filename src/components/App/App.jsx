import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';

import { Container } from './App.styled';

import { Layout } from 'components/SharedLayout';
// import { Cast } from 'components/Cast';
// import { Reviews } from 'components/Reviews';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <main>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Container>
    </main>
  );
};
