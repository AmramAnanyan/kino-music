import React, {useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleSearchModal } from '../../redux/actions/action';
import { fetchSearchMovies } from '../../redux/actions/asyncActions';
import { StyledInput } from './styled';

const SearchInput = ({page}) => {
  const dispatch = useDispatch();
  const [inputState, setInputState] = useState("");

  useEffect(() => {
    dispatch(fetchSearchMovies(inputState,page))
  },[page])

  function handleSearchInput(event) {
    setInputState(event.target.value)

  }

  function searchMovie() {
    dispatch(fetchSearchMovies(inputState))
    dispatch(toggleSearchModal())
  }
  return (
      <StyledInput>
          <input type="text" value={inputState} placeholder='search' onChange={(evt)=>handleSearchInput(evt)}/>
          <button onClick={searchMovie}>Search</button>
    </StyledInput>
  )
}

export { SearchInput };