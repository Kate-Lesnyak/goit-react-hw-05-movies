import { Link } from 'react-router-dom';
import { StyledNotFound } from './NotFound.styled';

const NotFound = () => {
  return (
    <StyledNotFound>
      Sorry, this page does not exist, please go to -<Link to="/">HOME</Link>
    </StyledNotFound>
  );
};
export default NotFound;
