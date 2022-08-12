import React from 'react'
import { StyledButton } from './styled';

const Button = ({ children, color,onClick }) => {

  return (
      <StyledButton color={color}>
          <button className='pulse' onClick={onClick}>{children }</button>
    </StyledButton>
  )
}

export { Button };