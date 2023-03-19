import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();

  useEffect(() => {}, []);
  // state, isLoading...

  return <p>Reviews: {movieId} </p>;
};
