import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';

import { Container, Section } from 'components/App/App.styled';
import {
  LinkWrapperMovie,
  StyledLinkMovie,
  StyledHeadingAdditional,
} from './MovieDetails.styled';

import { MovieInfo } from 'components/MovieInfo';
import { GoBackButton } from 'components/GoBackButton';
import { MovieError } from 'components/MovieError';
import { Loader } from 'components/Loader';

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
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    saveMovieDetails();
  }, [id]);

  const goBackPath = useRef(location.state?.from ?? '/movies');

  return (
    <Section>
      <Container>
        {error && (
          <MovieError
            message={`Sorry, but the ${id} was not found. Please try again later!`}
          />
        )}

        {isLoading && <Loader />}

        <GoBackButton to={goBackPath.current}>&larr; Go Back</GoBackButton>
        <MovieInfo movie={movie} />

        <StyledHeadingAdditional>
          Additional information
        </StyledHeadingAdditional>
        <LinkWrapperMovie>
          <li>
            {/* state={{ from: location.state.from }} */}
            <StyledLinkMovie to="cast">Cast</StyledLinkMovie>
          </li>
          <li>
            <StyledLinkMovie to="reviews">Reviews</StyledLinkMovie>
          </li>
        </LinkWrapperMovie>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </Section>
  );
};

export default MovieDetails;
