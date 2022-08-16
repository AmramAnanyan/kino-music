import React from 'react'
import useNavigateToPath from '../../hooks/useNavigateToPath';
import { StyledMovieCart } from './styled';

const MoveCart = ({ imageSrc, title, id }) => {
  const navigate = useNavigateToPath("/details/", id);
  return (
    <StyledMovieCart imageSrc={imageSrc} onClick={navigate}>
      <h2>{title.slice(0,24)}</h2>
    </StyledMovieCart>
  )
}

export { MoveCart };