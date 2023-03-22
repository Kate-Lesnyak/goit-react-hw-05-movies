export const ReviewsInfo = ({ reviews }) => {
  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <p>Content: {content}</p>
          </li>
        ))
      ) : (
        <p>Sorry, but at the moment there are no reviews for this movie.</p>
      )}
    </ul>
  );
};
