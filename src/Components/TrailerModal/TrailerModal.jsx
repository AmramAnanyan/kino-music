import React from 'react'
import { StyledModal } from './styled';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux/es/exports';
import { TRAILER_YOUTUBE_PATH } from '../../constants';
import { xmark } from "../../assets/svg/index";
import { toggleModal } from '../../redux/actions/action';

const TrailerModal = ({ children, trailerKey }) => {
  const videSrc = `${TRAILER_YOUTUBE_PATH + trailerKey}`;
  const dispatch = useDispatch();
  function closeModal() {
    dispatch(toggleModal())
  }
  return (
    <div className='modal-wrapper'>
      {createPortal(
        <StyledModal>
          <div className='hystmodal__wrap'>
            <div className='hystmodal__window '>
              <iframe src={videSrc} frameborder="0" className='modal-video'></iframe>
             
            </div>
            <div onClick={closeModal}>
              <img className='xmark' src={xmark} alt=""  />
            </div>
            
          </div>
        </StyledModal>
        , document.body)}
       </div>
     )
   
}

export { TrailerModal };