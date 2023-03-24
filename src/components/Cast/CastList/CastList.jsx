import {
  StyledCastList,
  StyledCastItem,
  CastItemWrapper,
  CastThumb,
  StyledCastTitle,
  StyledCastName,
} from './CastList.styled';

import noFhoto from '../../../images/no-fhoto.png';

export const CastList = ({ casts }) => {
  const IMAGE_CAST_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

  return (
    <StyledCastList>
      {casts.map(({ id, name, character, profile_path }) => (
        <StyledCastItem key={id}>
          <CastItemWrapper>
            <CastThumb>
              <img
                src={
                  profile_path ? IMAGE_CAST_BASE_URL + profile_path : noFhoto
                }
                alt={name}
                loading="lazy"
              />
            </CastThumb>

            <StyledCastTitle>
              <StyledCastName>
                <b>Name:</b> {name}
              </StyledCastName>
              <p>
                <b>Character:</b> {character}
              </p>
            </StyledCastTitle>
          </CastItemWrapper>
        </StyledCastItem>
      ))}
    </StyledCastList>
  );
};
