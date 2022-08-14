import styled from "styled-components";
import { IMAGE_PATH, IMAGE_W500_PATH } from "../../constants";
export const StyledHeroContent = styled.main`
    width: 100%;
    min-height: 650px;
    background-image: url(${ (props)=>(IMAGE_PATH + props.imageSrc)});
    background-size: cover;
    display: flex;
    justify-content: center;
    background-repeat: no-repeat;
    p{
        max-width: 500px;
        max-height: 120px;
        transition: .7s;
    };
    .slideCart{
        min-width: 300px;
        min-height: 400px;
        background-image: url(${ (props)=>(IMAGE_PATH + props.imageSrc)});
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        border-radius: 24px;
        box-shadow:0px 1px 15px 5px black;
        transition: 0.7s;
        
    }
    .slideCart:hover{
        transform: scale(1.05);
        
    }
    .container{
        display: flex;
        justify-content:space-between;
        align-items: center;
       
    }

    .containerButtons{
        width: 280px;
        display: flex;
        margin-top: 24px;
        justify-content: space-between;
    }
    .cartText{
        font-size: 22px;
        color: goldenrod;
        font-family: Gabriola,sans-serif;
        font-weight: 700;
        letter-spacing: 1px;
        margin-bottom: 48px;
        
    }
   h1{
    font-family: Gabriola,sans-serif;
    font-size: 36px;
    letter-spacing: 2px;
    font-weight: bolder;
    color: red;
    transition: 0.7s;
   };
   h1:hover{
   color: goldenrod;
    font-size: 48px;
    
   }
`