import { useState, useEffect } from 'react';

import { SearchMoviesList } from 'components/SearchMoviesList/SearchMoviesList';
import { getSearchMovies } from '../services/api';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function saveSearchMovies() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getSearchMovies();
        setSearchMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    } saveSearchMovies();
  }, []);

  return (
    <main>
      <section>
        <div>
          {error && <h2>{error}</h2>}
          {isLoading && <h2>Загружаем фильмы ...</h2>}
          <SearchMoviesList searchMovies={searchMovies} />
        </div>
      </section>
    </main>
  );
}

export default Movies;
