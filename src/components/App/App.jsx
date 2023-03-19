import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';

import { Container } from './App.styled';

import { Home } from 'pages/Home';
import Movies from 'pages/Movies';
// import { MovieDetails } from 'pages/MovieDetails';
import { Layout } from 'components/Layout';
// import { Cast } from 'components/Cast';
// import { Reviews } from 'components/Reviews';

export const App = () => {
  return (
    <main>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            {/* <Route path="movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route> */}
          </Route>
        </Routes>
      </Container>
    </main>
  );
};
