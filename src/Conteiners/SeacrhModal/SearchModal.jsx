import React, { useRef, useState } from 'react';
import { StyledSearchImage, StyledSearchModal } from './styled';
import { useSelector,useDispatch} from 'react-redux/es/exports';
import { selectSearch } from '../../redux/actions/selectFunction';
import useClickOutSide from '../../hooks/useClickOutside';
import { closeSearchModal } from '../../redux/actions/action';
import { anglesDown } from '../../assets/svg';


const SearchModal = ({addPage}) => {
    const searchMovies = useSelector(selectSearch);
    const dispatch = useDispatch();
    let [page, setPage] = useState(1);
    console.log(searchMovies);
    const ref = useRef(null);
 
    const { clickOutSide } = useClickOutSide();

    function handleOutSide() {
        dispatch(closeSearchModal())
    }
    clickOutSide(ref, handleOutSide)
    
    function handleGoPage() {
        setPage(page++)
        addPage(page);
        
    }

  return (
      <StyledSearchModal >
          
             
                  <div ref={ref}>
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
                        <div className='goPage' >
                            <img src={anglesDown} alt="" onClick={handleGoPage}  />
                        </div>
                  </div>
       
        
   
      </StyledSearchModal>
  )
}

export { SearchModal}