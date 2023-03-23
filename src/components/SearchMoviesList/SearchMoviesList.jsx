import { NavLink, useLocation } from 'react-router-dom';

import {
  MovieItem,
  MovieList,
  MovieThumb,
  MovieTitle,
} from 'components/SharedLayout/SharedLayout.styled';

export const SearchMoviesList = ({ movies }) => {
  const location = useLocation();

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

  return (
    <MovieList>
      {movies.map(({ id, poster_path, title }) => (
        <MovieItem key={id}>
          <NavLink
            to={`${id}`}
            state={{ from: location }}
            style={{ textDecoration: 'none' }}
          >
            <MovieThumb>
              <img src={IMAGE_BASE_URL + poster_path} alt={title} />
            </MovieThumb>
            <MovieTitle>{title}</MovieTitle>
          </NavLink>
        </MovieItem>
      ))}
    </MovieList>
  );
};
