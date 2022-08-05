import React, { useState } from 'react'
import { StyledLogo, StyledNavBar, StyledNavigatinMenu, StyledUl,linkStyle } from './styled';
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import activeStyle from '../../helpers/activeStyleLink';
import { SearchInput } from '../Input';
const NavBar = () => {
    const { pathname } = useLocation();
  return (
      <StyledNavBar>
          <StyledNavigatinMenu>
              <StyledLogo><Link to="/" style={linkStyle}>Kino-Music</Link></StyledLogo>
              <SearchInput />
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