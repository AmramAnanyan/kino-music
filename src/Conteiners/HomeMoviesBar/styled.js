import styled from "styled-components";

export const StyledHomeMoviesBar = styled.section`
        width: 100%;
        height: auto;
        background-color: #1e1e1e;
        text-align: center;
        cursor: default;
        position: relative;

        .moveBar{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            gap: 24px;
        }

        h1{
            color: red;
            font-size: 48px;
            font-weight: 900;
            font-family: Gabriola,sans-serif;
            padding-bottom: 48px;
            padding-top: 48px;
            /* border-top: 2px goldenrod dotted;
            border-bottom: 2px goldenrod dotted; */

        }

        span{
            color: red;
            font-size: 54px;
        }
        .slideIcone{
            width: 64px;
            height: 64px;
            transition-duration: 0.4s;
            transition-duration: 0.5s;
        }

        .controlSlide{
            z-index: 10;
            position: absolute;
            top: 400px;
           
        }

        .buttonsSlide{
            width: 98vw;
            height: auto;
            display: flex;
            justify-content: space-evenly;
            cursor: pointer;

        }
      
       

`