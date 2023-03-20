import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../services/api';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  // const location = useLocation();

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
  }, [id])

  // const goBackPath = location.state.from || '/';


  return (
    <main>
      <section>
        <div>
          {error && <h2>{error}</h2>}
          {isLoading && <h2>Загружаю информацию о фильме ...</h2>}

          {/* <button path={goBackPath}>Back</button> */}
          <MovieInfo movie={movie} />

          <h4>Additional information</h4>
          <ul>
            <li>
              <Link to='cast'>Cast</Link>
            </li>
            <li>
              <Link to='reviews'>Reviews</Link>
            </li>
          </ul>

          <Outlet />
        </div>
      </section>
    </main>
  );
}
