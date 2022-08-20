import React, { useState } from 'react'
import {  arrowLeft, arrowRight } from '../../assets/svg';
import { MoveCart } from '../../Components/MoveCart';
import { StyledHomeMoviesBar } from './styled';

const HomeMoviesBar = ({recomendedMoves,header}) => {
  const [slideIndex, setSlideIndex] = useState({
    firstIndex: 0,
    lastIndex:6,
 })
  
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
      <h1>
      <marquee width="60%" direction="right" height="100px" scrollamount="12">  {header}</marquee>
       
      </h1>
     
      <div className='controlSlide'>
        <div className='buttonsSlide'>
           <div onClick={slideComeLeft}><img src={arrowLeft}  className='slideIcone' /></div>
           <div  onClick={slideComeRight}><img src={arrowRight}  className='slideIcone'/></div>
        </div>
       
      </div>
      <div className='moveBar'>
        {
          recomendedMoves.slice(slideIndex.firstIndex,slideIndex.lastIndex).map((movie) => {
            return (
              <div key={movie.id}>
                <MoveCart imageSrc={movie.backdrop_path} title={movie.title} id={movie.id} />
              </div>
              
            )
          })
        }
      </div>
          
      </StyledHomeMoviesBar>
  )
}

export { HomeMoviesBar };