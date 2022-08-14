import React from 'react';
import { Routes ,Route} from "react-router-dom";
import { Details } from '../Pages/Details';
import { HomePage } from '../Pages/Home';
import { MoviesPage } from '../Pages/Movies';

const Routers = () => {
  return (
      <>
          <Routes>
              
                  <Route path='/' element={<HomePage />} />
                  <Route path='/movies' element={<MoviesPage />} />
                  <Route path='/details/:id' element={<Details />} />
            
         </Routes>
      </>
  )
}

export { Routers };