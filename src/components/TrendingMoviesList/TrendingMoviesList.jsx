import { useLocation } from 'react-router-dom';

import {
  MovieItem,
  MovieList,
  MovieThumb,
  MovieTitle,
  MovieItemLink,
} from 'components/SharedLayout/SharedLayout.styled';

import noImage from '../../images//no-image.jpg';

export const TrendingMoviesList = ({ trendingMovies }) => {
  const location = useLocation();

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

  return (
    <MovieList>
      {trendingMovies.map(({ id, poster_path, title }) => (
        <MovieItem key={id}>
          <MovieItemLink to={`movies/${id}`} state={{ from: location }}>
            <MovieThumb>
              <img
                src={poster_path ? IMAGE_BASE_URL + poster_path : noImage}
                alt={title}
                loading="lazy"
              />
            </MovieThumb>
            <MovieTitle>{title}</MovieTitle>
          </MovieItemLink>
        </MovieItem>
      ))}
    </MovieList>
  );
};
