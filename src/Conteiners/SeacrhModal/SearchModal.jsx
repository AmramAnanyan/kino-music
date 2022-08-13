import React from 'react';
import { createPortal } from 'react-dom';
import { IMAGE_PATH } from '../../constants';
import { StyledSearchImage, StyledSearchModal } from './styled';
import { useSelector } from 'react-redux/es/exports';
import { selectSearch } from '../../redux/actions/selectFunction';


const SearchModal = () => {
    const searchMovies = useSelector(selectSearch);
    console.log(searchMovies)
  return (
      <StyledSearchModal >
          
             
                  <div>
                      {
                          searchMovies.movies.map(({ id,title,release_date,backdrop_path }) => {
                              return (
                                  <div key={id} className="searchItem">   
                                      <StyledSearchImage image={backdrop_path}></StyledSearchImage>
                                      <div className='searchTitle'>
                                          <h4 >{title}</h4>
                                          <h5 >{release_date}</h5>
                                          <a href="#" className="href">details</a>
                                      </div>
                                  </div>
                              )
                              
                              
                          })
                       }
                  </div>
       
        
   
      </StyledSearchModal>
  )
}

export { SearchModal}