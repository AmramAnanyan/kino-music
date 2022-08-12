import React, { useEffect } from 'react'
import { NavBar } from '../../Components/Navbar/NavBar';
import { StyledHomePage } from './styled';
import { useDispatch,useSelector } from 'react-redux';
import { fetchPopularMovies } from '../../redux/actions/asyncActions';
import { HeroBar } from '../../Conteiners/HeroBar';
import { HomeMoviesBar } from '../../Conteiners/HomeMoviesBar';
import { TrailerModal } from '../../Components/TrailerModal';
import { selectOpenModal, selectTrailerKey } from '../../redux/actions/selectFunction';


const HomePage = () => {
  const dispatch = useDispatch();
  const trailerKey = useSelector(selectTrailerKey);
  console.log(trailerKey)
  const isOpenModal = useSelector(selectOpenModal);

  useEffect(() => {
    dispatch(fetchPopularMovies())
  },[])

  return (
      <StyledHomePage>
      <NavBar />
      <HeroBar />
      <HomeMoviesBar />
      {
        (isOpenModal &&  <TrailerModal trailerKey={trailerKey} />)
      }
     
    </StyledHomePage>
  )
}

export { HomePage };