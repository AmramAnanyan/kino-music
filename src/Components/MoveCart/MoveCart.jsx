import React from 'react'
import { StyledMovieCart } from './styled';

const MoveCart = ({ imageSrc, title, id }) => {
  return (
    <StyledMovieCart imageSrc={imageSrc}>
      <h2 onClick={console.log}>{title.slice(0,24)}</h2>
    </StyledMovieCart>
  )
}

export { MoveCart };