import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/actions/action';
import { fetchPopularsTrailer } from '../../redux/actions/asyncActions';
import { Button } from '../Button';
import { StyledHeroContent } from './styled';
import useNavigateToPath from '../../hooks/useNavigateToPath';

const HeroSlideContent = ({ title, imageSrc, overview, movieId }) => {
  const dispatch = useDispatch();

  function handleTrailerButton(id) {
    dispatch(fetchPopularsTrailer(id))
    dispatch(toggleModal())
  }
  const navigate = useNavigateToPath("/details/", movieId);
  return (
    <StyledHeroContent imageSrc={imageSrc}>
      <div className='container'>
        <div >
          <h1>{title}</h1>
          <p className='cartText'>
            {overview.slice(0,240)}
          </p>
          <div className='containerButtons' >
              <Button onClick={navigate}>Watch now</Button>
              <Button color="goldenrod" onClick={()=>handleTrailerButton(movieId)}>Watch trailer</Button>
          </div>
        </div>
        <div className='slideCart'></div>
      </div>
    </StyledHeroContent>
  )
}

export { HeroSlideContent };