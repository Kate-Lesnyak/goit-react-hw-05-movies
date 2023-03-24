import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { ReviewsList } from './ReviewsList';

import { Loader } from 'components/Loader';
import { MovieError } from 'components/MovieError';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function saveMovieReviews() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getMovieReviews(id);
        setReviews(data.results);
        console.log(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    saveMovieReviews();
  }, [id]);

  return (
    <>
      {error && (
        <MovieError
          message={`Sorry, but the ${id} was not found. Please try again later!`}
        />
      )}

      {isLoading && <Loader />}

      <ReviewsList reviews={reviews} />
    </>
  );
};

export default Reviews;
