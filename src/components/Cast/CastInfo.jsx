export const CastInfo = ({ casts }) => {
  const IMAGE_CAST_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

  return (
    <ul>
      {casts.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <img src={IMAGE_CAST_BASE_URL + profile_path} alt={name} />
          <p>Name: {name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};
