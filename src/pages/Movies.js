import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { nanoid } from 'nanoid';
import { getSearchMovies } from '../services/api';

import { SearchMoviesList } from 'components/SearchMoviesList/SearchMoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Section, Container } from 'components/App/App.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [searchValue, setSearchValue] = useState('');
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

  // const visibleMovies = movies.filter(movie => movie.title.includes(movieTitle));


  const handleSubmit = newValue => {
    setSearchParams({ movieTitle: newValue });
    // setSearchValue(newValue);
    setReqId(nanoid());
    // setPage(1);
    setMovies([]);
    // setShowBtn(false);
    setError(null);
  };


  return (
    <main>
      <Section>
        <Container>
          <SearchForm onSubmit={handleSubmit} />

          {error && <h2>{error}</h2>}
          {/* {isLoading && <h2>Загружаем фильмы ...</h2>} */}
          <SearchMoviesList movies={movies} />
        </Container>
      </Section>
    </main>
  );
}

export default Movies;
