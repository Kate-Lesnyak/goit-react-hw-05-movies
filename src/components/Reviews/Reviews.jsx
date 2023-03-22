import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { ReviewsInfo } from './ReviewsInfo/ReviewsInfo';

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
    <main>
      <section>
        <div>
          {error && <h2>{error}</h2>}
          {isLoading && <h2>Загружаем инфу ...</h2>}
          <ReviewsInfo reviews={reviews} />
        </div>
      </section>
    </main>
  );
};

export default Reviews;
