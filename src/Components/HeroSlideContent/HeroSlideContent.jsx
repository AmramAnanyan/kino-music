import React from 'react'
import { Button } from '../Button';

import { StyledHeroContent } from './styled';

const HeroSlideContent = ({title,imageSrc,overview}) => {
  return (
    <StyledHeroContent imageSrc={imageSrc}>
      <div className='container'>
        <div >
          <h1>{title}</h1>
          <p className='cartText'>
            {overview.slice(0,240)}
          </p>
          <div className='containerButtons' >
              <Button>Watch now</Button>
              <Button color="goldenrod">Watch trailer</Button>
          </div>
        </div>
        <div className='slideCart'></div>
      </div>
    </StyledHeroContent>
  )
}

export { HeroSlideContent };