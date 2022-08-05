import React from 'react'
import { StyledButton } from './styled';

const Button = ({ children, color }) => {
  console.log(color)
  return (
      <StyledButton color={color}>
          <button className='pulse'>{children }</button>
    </StyledButton>
  )
}

export { Button };