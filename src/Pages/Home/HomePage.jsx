import React, { useEffect } from 'react'
import { NavBar } from '../../Components/Navbar/NavBar';
import { StyledHomePage } from './styled';
import { useDispatch } from 'react-redux';
import { fetchPopularMovies } from '../../redux/actions/asyncActions';
import { HeroBar } from '../../Conteiners/HeroBar';
import { HomeMoviesBar } from '../../Conteiners/HomeMoviesBar';


const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies())
  },[])

  return (
      <StyledHomePage>
      <NavBar />
      <HeroBar />
      <HomeMoviesBar />
    </StyledHomePage>
  )
}

export { HomePage };