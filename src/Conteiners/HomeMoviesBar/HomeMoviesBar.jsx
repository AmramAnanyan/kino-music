import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {  arrowLeft, arrowRight } from '../../assets/svg';
import { MoveCart } from '../../Components/MoveCart';
import { fetchRecomendedMovies } from '../../redux/actions/asyncActions';
import { selectPopular } from '../../redux/actions/selectFunction';
import { StyledHomeMoviesBar } from './styled';

const HomeMoviesBar = () => {
  const [slideIndex, setSlideIndex] = useState({
    firstIndex: 0,
    lastIndex:6,
 })
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecomendedMovies())
  }, [])
  const recomendedMoves = useSelector(selectPopular);
  console.log(recomendedMoves)

  function slideComeRight() {
    setSlideIndex(({ firstIndex, lastIndex }) => ({
      firstIndex: firstIndex + 1,
      lastIndex:lastIndex+1,
      }))
  }
  function slideComeLeft() {
    setSlideIndex(({ firstIndex, lastIndex }) => ({
      firstIndex: firstIndex - 1,
      lastIndex:lastIndex-1,
      }))
    }

  return (
      <StyledHomeMoviesBar>
      <h1>RECOMENDATIONS</h1>
      <div className='controlSlide'>
        <div className='buttonsSlide'>
           <div onClick={slideComeLeft}><img src={arrowLeft} alt="" srcset="" className='slideIcone' /></div>
           <div  onClick={slideComeRight}><img src={arrowRight} alt="" srcset="" className='slideIcone'/></div>
        </div>
       
      </div>
      <div className='moveBar'>
        {
          recomendedMoves.slice(slideIndex.firstIndex,slideIndex.lastIndex).map((movie) => {
            return (
              <div key={movie.id}>
                <MoveCart imageSrc={movie.backdrop_path} title={movie.title} />
              </div>
              
            )
          })
        }
      </div>
          
      </StyledHomeMoviesBar>
  )
}

export { HomeMoviesBar };