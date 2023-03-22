export const MovieInfo = ({
  movie: { title, poster_path, overview, release_date, genres, vote_average },
}) => {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

  return (
    <>
      <div>
        <img
          src={poster_path ? IMAGE_BASE_URL + poster_path : 'no photo'}
          alt={title}
        />
      </div>

      <h2>{title}</h2>
      {/* <p>{release_date.slice(0, 4)}</p> */}

      {/* <p>{vote_average.toFixed(1)}</p> */}

      <h3>Overview </h3>
      <p>{overview}</p>

      <h4>
        {/* Genres: {Object.values(genres.map(({ name }) => name)).join(', ')} */}
      </h4>
    </>
  );
};
