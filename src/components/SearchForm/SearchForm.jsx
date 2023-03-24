import { Notify } from 'notiflix';
import { useState } from 'react';

import { StyledButton, StyledForm, StyledInput } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

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
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        name="movieTitle"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={handleChange}
      />
      <StyledButton type="submit">Search</StyledButton>
    </StyledForm>
  );
};
