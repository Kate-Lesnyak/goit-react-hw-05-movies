import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';
import { CastInfo } from './CastInfo';

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
    <main>
      <section>
        <div>
          {error && <h2>{error}</h2>}
          {isLoading && <h2>Загружаем...</h2>}
          <CastInfo casts={casts} />
        </div>
      </section>
    </main>
  );
};

export default Cast;
