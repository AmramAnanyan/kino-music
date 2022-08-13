import React, {useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleSearchModal } from '../../redux/actions/action';
import { fetchSearchMovies } from '../../redux/actions/asyncActions';
import { StyledInput } from './styled';

const SearchInput = () => {
  const dispatch = useDispatch();
  const [inputState, setInputState] = useState("");

  function handleSearchInput(event) {
    setInputState(event.target.value)

  }
  function searchMovie() {
    dispatch(fetchSearchMovies(inputState))
    setInputState("")
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