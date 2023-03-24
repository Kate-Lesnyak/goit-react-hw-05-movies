import {
  MovieWrapper,
  StyledAverage,
  StyledHeadingGenres,
  StyledHeadingOverview,
  StyledHeadingTitle,
  StyledPparagraph,
} from './MovieInfo.styled';

import noImage from '../../images/no-image.jpg';

export const MovieInfo = ({
  movie: { title, poster_path, overview, release_date, genres, vote_average },
}) => {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

  return (
    <MovieWrapper>
      <img
        src={poster_path ? IMAGE_BASE_URL + poster_path : noImage}
        alt={title}
        width="300"
      />

      <div>
        <StyledHeadingTitle>
          {title} ({release_date && release_date.slice(0, 4)})
        </StyledHeadingTitle>

        <StyledAverage>
          User score: {(vote_average * 10).toFixed(1)}%
        </StyledAverage>

        <StyledHeadingOverview>Overview </StyledHeadingOverview>
        <StyledPparagraph>{overview}</StyledPparagraph>

        <StyledHeadingGenres>Genres: </StyledHeadingGenres>
        <StyledPparagraph>
          {genres > 0 &&
            Object.values(genres.map(({ name }) => name)).join(', ')}
        </StyledPparagraph>
      </div>
    </MovieWrapper>
  );
};
