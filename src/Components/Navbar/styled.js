import styled from "styled-components";

export const StyledNavBar = styled.nav`
    width: 100%;
    display: flex;
    height: 54px;
    background-color: #1e1e1e;
`

export const StyledLogo = styled.div`
    max-width: 160px;
    max-height: 54px;
    font-size: 28px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    /* letter-spacing: 2px; */

`

export const StyledNavigatinMenu = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

`

export const StyledUl = styled.ul`
    width: 560px;
    max-height: 54px;
    display: flex;
    justify-content: stretch;
    align-items: center;
    list-style: none;
    justify-content: space-around;
    font-size: 24px;
    font-family: Gabriola,'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 700;
    letter-spacing: 2px;
  
`

export const linkStyle = {
    textDecoration: "none",
    color: "goldenrod",
    "/movies": {
        color: "red",
    },
    "/": {
        color: "red",
    }

}