import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { nanoid } from 'nanoid';
import { getSearchMovies } from '../../services/api';

import { Section, Container } from 'components/App/App.styled';

import { SearchMoviesList } from 'components/SearchMoviesList';
import { SearchForm } from 'components/SearchForm';
import { MovieError } from 'components/MovieError';
import { Loader } from 'components/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reqId, setReqId] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const movieTitle = searchParams.get('movieTitle') ?? '';

  useEffect(() => {
    if (!movieTitle) return;

    async function saveSearchMovies() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getSearchMovies(movieTitle);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    } saveSearchMovies();
  }, [movieTitle, reqId]);

  const handleSubmit = newValue => {
    setSearchParams({ movieTitle: newValue });
    setReqId(nanoid());
    setMovies([]);
    setError(null);
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />

        {error && (
          <MovieError
            message={`Sorry, but the ${movieTitle} was not found. Please try again later!`}
          />
        )}

        {isLoading && <Loader />}

        <SearchMoviesList movies={movies} />
      </Container>
    </Section>
  );
}

export default Movies;
