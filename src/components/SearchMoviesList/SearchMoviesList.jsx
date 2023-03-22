import { Link, useLocation } from 'react-router-dom';

export const SearchMoviesList = ({ movies }) => {
  const location = useLocation();

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

  return (
    <ul>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id}>
          <Link to={`${id}`} state={{ from: location }}>
            <div>
              <img src={IMAGE_BASE_URL + poster_path} alt={title} width="400" />
            </div>
            <p>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
