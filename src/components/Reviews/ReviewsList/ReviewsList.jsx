import { StyledReviewsList, StyledReviewsItem } from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <StyledReviewsList>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <StyledReviewsItem key={id}>
            <p>
              <b>Author:</b> {author}
            </p>
            <p>
              <b>Content:</b> {content}
            </p>
          </StyledReviewsItem>
        ))
      ) : (
        <p>
          <b>
            Sorry, but at the moment there are no reviews for this movie. :(
          </b>
        </p>
      )}
    </StyledReviewsList>
  );
};
