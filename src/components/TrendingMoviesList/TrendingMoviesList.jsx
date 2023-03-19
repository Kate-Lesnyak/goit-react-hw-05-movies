import { Link } from 'react-router-dom';

export const TrendingMoviesList = ({ trendingMovies }) => {
  return (
    <ul>
      {trendingMovies.map(({ id, poster_path, title }) => (
        <li key={id}>
          <Link to={`movies/${id}`}>
            {/* <Link to={`${routes.COUNTRY}/${id}`} state={{ from: location}}></Link> */}
            <>
              <div>
                <img
                  src={'https://image.tmdb.org/t/p/w500' + poster_path}
                  alt={title}
                  width="400"
                />
              </div>

              {title}
            </>
          </Link>
        </li>
      ))}
    </ul>
  );
};
