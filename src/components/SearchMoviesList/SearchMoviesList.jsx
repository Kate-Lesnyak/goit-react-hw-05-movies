import { Link } from 'react-router-dom';

export const SearchMoviesList = ({ searchMovies }) => {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  return (
    <ul>
      {searchMovies.map(({ id, poster_path, title }) => (
        <li key={id}>
          <Link to={`${id}`}>
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
