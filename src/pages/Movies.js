import { useEffect } from 'react';

// import { MoviesList } from 'components/MoviesList/MoviesList';
import { getSearchMovies } from '../services/api';

const Movies = () => {
  useEffect(() => { }, [])
  // state, isLoading...
  const movies = getSearchMovies();

  return (
    <main>
      {/* <MoviesList movies={movies} /> */}
      <ul movies={movies}></ul>
    </main>
  );
}

export default Movies;
