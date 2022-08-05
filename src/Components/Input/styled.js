import styled from "styled-components";

export const StyledInput = styled.div`
    max-width: 460px;
    height: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;


    input{
        width: 280px;
        height: 28px;
        border: none;
        background-color: gold;
        border-radius: 12px;
        outline: none;
        font-size: 18px;
    }
    button{
        width: 100px;
        height: 28px;
        background-color: goldenrod;
        border: none;
        cursor: pointer;
        font-size: 20px;
        font-family: Gabriola,sans-serif;
        font-weight: 700;
        letter-spacing: 1px;
        border-radius: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.5s;
    }
    button:hover{
        background-color: red;
        color: gold;
    }

`;