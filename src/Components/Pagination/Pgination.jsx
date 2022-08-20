import React from 'react'
import { StyledPageButton, StyledPgination } from './styled';


const Pgination = () => {
    let buttons=["<<",2,3,"...",">>"]
  return (
      <StyledPgination>
          {
              buttons.map((button) => {
                  return (
                      <StyledPageButton key={button}>{button}</StyledPageButton>
                  )
              })
          }
    </StyledPgination>
  )
}

export { Pgination };