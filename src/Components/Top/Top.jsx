import React from 'react'
import { createPortal } from 'react-dom';
import { downTop } from '../../assets/svg';
import goToTop from '../../helpers/goToTop';
import { StyledTop } from './styled';

const Top = () => {
  return (
      <>
          {createPortal(<StyledTop onClick={goToTop}>
              <img src={downTop} alt=""/>
          </StyledTop>,document.body)}
      </>
         

  )
}

export { Top };