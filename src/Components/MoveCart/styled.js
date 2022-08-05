import styled from "styled-components";
import photo1 from "../../assets/photo1.jpg"
import { IMAGE_PATH, IMAGE_W500_PATH } from "../../constants";
export const StyledMovieCart = styled.div`
    width: 340px;
    min-height: 240px;
    border: 1px solid goldenrod;
    border-radius: 8px;
    background-image: url(${({imageSrc})=>(IMAGE_W500_PATH+imageSrc)});
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    cursor: pointer;
    transition: 0.3s;
    background-color: black;
   
   

    h2{
        color: #e1e1ee;
        font-family:Gabriola,sans-serif ;
        margin-top: 24px;
        letter-spacing: 1px;
    }
    :hover{
        transform: scale(0.9);
        
    }


`