import React from 'react'
import { StyledMovieCart } from './styled';

const MoveCart = ({imageSrc,title}) => {
  return (
    <StyledMovieCart imageSrc={imageSrc}>
      <h2>{title.slice(0,24)}</h2>
    </StyledMovieCart>
  )
}

export { MoveCart };