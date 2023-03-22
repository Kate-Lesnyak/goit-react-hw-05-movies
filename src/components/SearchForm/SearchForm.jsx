import { Notify } from 'notiflix';
import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  // const [searchParams, setSearchParams] = useSearchParams();

  // const movieTitle = searchParams.get('movieTitle') ?? '';

  // const handleSubmit = e => {
  // const form = e.currentTarget;
  // setSearchParams({ movieTitle: form.elements.movieTitle.value });
  // form.reset();
  // };

  // const handleChange = e => {
  //   const nextParams =
  //     e.target.value !== '' ? { movieTitle: e.target.value } : {};
  //   setSearchParams(nextParams);
  // };

  // const handleChange = e => {
  //   const movieTitleValue = e.target.value;
  //   movieTitleValue !== ''
  // ? setSearchParams({ movieTitle: movieTitleValue })
  //     : setSearchParams({});
  // };

  const handleChange = e => {
    const { value } = e.target;
    setQuery(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return Notify.info('Please, fill in the search field!');
    }
    onSubmit(query);
    reset();
  };

  const reset = () => {
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="movieTitle"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={handleChange}
      />

      <button type="submit">Search</button>
    </form>
  );
};
