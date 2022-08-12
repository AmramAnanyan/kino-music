import React from 'react';
import { Routes ,Route} from "react-router-dom";
import { HomePage } from '../Pages/Home';
import { MoviesPage } from '../Pages/Movies';

const Routers = () => {
  return (
      <>
          <Routes>
              
                  <Route path='/' element={<HomePage />} />
                  <Route path='/movies' element={<MoviesPage />} />
              
         </Routes>
      </>
  )
}

export { Routers };