import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {  arrowLeft, arrowRight } from '../../assets/svg';
import { MoveCart } from '../../Components/MoveCart';
import { selectPopular } from '../../redux/actions/selectFunction';
import { StyledHomeMoviesBar } from './styled';

const HomeMoviesBar = () => {
  const [slideIndex, setSlideIndex] = useState({
    firstIndex: 0,
    lastIndex:6,
 })
  const recomendedMoves = useSelector(selectPopular);

  function slideComeRight() {
    setSlideIndex(({ firstIndex, lastIndex }) => {
      if (firstIndex >= 0 && lastIndex <= 20) {
        return {
          firstIndex: firstIndex + 1,
          lastIndex:lastIndex + 1,
        }
      } else {
        return slideIndex
      }
    })
  }
  function slideComeLeft() {
    setSlideIndex(({ firstIndex, lastIndex }) => {
      if ((firstIndex > 0) && (lastIndex <= 21)) {
        return {
          firstIndex: firstIndex - 1,
          lastIndex:lastIndex - 1,
        }
      } else {
        return slideIndex
      }
    })
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