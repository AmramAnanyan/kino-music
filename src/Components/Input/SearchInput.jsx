import React from 'react'
import { StyledInput } from './styled';

const SearchInput = () => {
  return (
      <StyledInput>
          <input type="text" placeholder='search' />
          <button>Search</button>
    </StyledInput>
  )
}

export { SearchInput };