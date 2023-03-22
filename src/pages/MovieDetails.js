import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function saveMovieDetails() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getMovieDetails(id);
        setMovie(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false);
      }
    }
    saveMovieDetails();
  }, [id]);

  const goBackPath = useRef(location.state?.from ?? '/movies');

  return (
    <main>
      <section>
        <div>
          {error && <h2>{error}</h2>}
          {/* {isLoading && <h2>Загружаю информацию о фильме ...</h2>} */}

          <Link to={goBackPath.current}>Back</Link>
          <MovieInfo movie={movie} />

          <h4>Additional information</h4>
          <ul>
            <li>
              {/* state={{ from: location.state.from }} */}
              <Link to='cast'>Cast</Link>
            </li>
            <li>
              <Link to='reviews'>Reviews</Link>
            </li>
          </ul>

          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>

        </div>
      </section>
    </main>
  );
}

export default MovieDetails;
