import React, { useState } from 'react'
import { StyledLogo, StyledNavBar, StyledNavigatinMenu, StyledUl,linkStyle } from './styled';
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import activeStyle from '../../helpers/activeStyleLink';
import { SearchInput } from '../Input';
import { SearchModal } from '../../Conteiners/SeacrhModal';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectModalState } from '../../redux/actions/selectFunction';

const NavBar = () => {
    const { pathname } = useLocation();
    const isOpenModal = useSelector(selectModalState);
    const [pageState, setPageState] = useState(1);
    function addPage(page) {
        setPageState(page)
    }
    console.log(pageState)
  return (
      <StyledNavBar>
          <StyledNavigatinMenu>
              <StyledLogo><Link to="/" style={linkStyle}>Kino-Music</Link></StyledLogo>
              <SearchInput page={pageState} />
              {(isOpenModal) && <SearchModal addPage={addPage} />}
              <StyledUl>
                  <li><NavLink to="/" style={()=>activeStyle(pathname,"/")}>Home</NavLink></li>
                  <li><NavLink to="/movies" style={()=>activeStyle(pathname,"/movies")}>Movies</NavLink></li>
                  <li><NavLink to="/music" style={linkStyle}>Music</NavLink></li>
              </StyledUl>
          </StyledNavigatinMenu>
    </StyledNavBar>
  )
}

export { NavBar };