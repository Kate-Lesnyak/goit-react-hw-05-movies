import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api';

import { StyledHeading } from './Home.styled';

import { Container, Section } from 'components/App/App.styled';
import { TrendingMoviesList } from 'components/TrendingMoviesList';
import { MovieError } from 'components/MovieError';
import { Loader } from 'components/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function saveTrendigMovies() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getTrendingMovies();
        setTrendingMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    saveTrendigMovies();
  }, []);

  console.log(trendingMovies);
  return (
    <Section>
      <Container>
        <StyledHeading>Trending today</StyledHeading>
        {error && (
          <MovieError
            message={`Sorry, something went wrong. Please try again later!`}
          />
        )}
        {isLoading && <Loader />}
        <TrendingMoviesList trendingMovies={trendingMovies} />
      </Container>
    </Section>
  );
};

export default Home;
