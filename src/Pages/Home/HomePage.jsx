import React, { useEffect } from 'react'
import { NavBar } from '../../Components/Navbar/NavBar';
import { StyledHomePage } from './styled';
import { useDispatch,useSelector } from 'react-redux';
import { fetchNowPlaying, fetchPopularMovies } from '../../redux/actions/asyncActions';
import { HeroBar } from '../../Conteiners/HeroBar';
import { HomeMoviesBar } from '../../Conteiners/HomeMoviesBar';
import { TrailerModal } from '../../Components/TrailerModal';
import { selectOpenModal,selectTrailerKey,selectPopular, selectNowPlaing } from '../../redux/actions/selectFunction';
import { Top } from '../../Components/Top';
import { Pgination } from '../../Components/Pagination';
import { MyFooter } from '../../Components/Footer';


const HomePage = () => {
  const dispatch = useDispatch();
  const trailerKey = useSelector(selectTrailerKey);
  console.log(trailerKey)
  const isOpenModal = useSelector(selectOpenModal);


  useEffect(() => {
    dispatch(fetchPopularMovies())
    dispatch(fetchNowPlaying())
  }, [])
  
  const recomendedMoves = useSelector(selectPopular);
  const nowPlaying = useSelector(selectNowPlaing);
  console.log(nowPlaying)
  return (
    <StyledHomePage>
      <NavBar />
      <HeroBar />
      <HomeMoviesBar recomendedMoves={recomendedMoves} header="RECOMENDATIONS"/>
      {
        (isOpenModal &&  <TrailerModal trailerKey={trailerKey} />)
      }
      <HomeMoviesBar recomendedMoves={nowPlaying.nowPlaying} header="Now Playing" />
      <Pgination />
      <MyFooter />
     <Top />
    </StyledHomePage>
  )
}

export { HomePage };