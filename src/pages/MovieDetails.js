import { useEffect, useParams } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getMoviesDetails } from '../services/api';

export const MovieDetails = () => {
  const { id } = useParams();
  // const { movieId } = useParams();

  useEffect(() => { }, [])
  // state, isLoading...

  const movie = getMoviesDetails(id);
  return (
    <>
      <h2>Movie Item {movie.id} - {id}</h2>
      <ul>
        <li>
          <Link to='cast'>Cast</Link>
        </li>
        <li>
          <Link to='reviews'>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
