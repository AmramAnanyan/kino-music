import React, { useRef, useState } from 'react';
import { StyledSearchImage, StyledSearchModal } from './styled';
import { useSelector,useDispatch} from 'react-redux/es/exports';
import { selectSearch } from '../../redux/actions/selectFunction';
import useClickOutSide from '../../hooks/useClickOutside';
import { closeSearchModal } from '../../redux/actions/action';
import { anglesDown } from '../../assets/svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const SearchModal = ({addPage}) => {
    const searchMovies = useSelector(selectSearch);
    const dispatch = useDispatch();
    let [page, setPage] = useState(2);

    const ref = useRef(null);


    const { clickOutSide } = useClickOutSide();

    function handleOutSide() {
        dispatch(closeSearchModal())
    }
    clickOutSide(ref, handleOutSide)
    
    function handleGoPage() {
        setPage((page) => {
            page++
            return page
        })
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
                                          <Link to={`/details/${id}`}>details</Link>
                                      </div>
                                     
                                  </div>
                              )
                              
                              
                          })
                     }
                        <div className='goPage' >
                            <a  >
                      <img src={anglesDown} alt="" onClick={handleGoPage} />
                             </a> 
                        </div>
                  </div>
       
        
   
      </StyledSearchModal>
  )
}

export { SearchModal}