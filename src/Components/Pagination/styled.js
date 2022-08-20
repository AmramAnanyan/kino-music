import styled from "styled-components";

export const StyledPgination = styled.div`
    width: 100%;
    min-height: 72px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1e1e1e;
    gap: 12px;
   

`

export const StyledPageButton = styled.button`
        width: 58px;
        height: 42px;
        background-image: linear-gradient(to right,gold,red);
        cursor: pointer;
        border: none;
        box-shadow: 10px 7px 5px 4px #0f0f10;
        border-radius: 4px;
        font-size: 20px;
        font-weight: 900;
        transition: .5s;
        :hover{
            width: 64px;
            height: 48px;
            box-shadow: 0px 0px 4px 7px greenyellow;
            color: white;
        }
`