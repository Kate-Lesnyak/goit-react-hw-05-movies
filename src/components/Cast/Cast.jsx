import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';

import { CastList } from './CastList';
import { Loader } from 'components/Loader';
import { MovieError } from 'components/MovieError';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function saveMovieCast() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getMovieCast(id);
        setCasts(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    saveMovieCast();
  }, [id]);

  return (
    <>
      {error && (
        <MovieError
          message={`Sorry, but the ${id} was not found. Please try again later!`}
        />
      )}

      {isLoading && <Loader />}

      <CastList casts={casts} />
    </>
  );
};

export default Cast;
