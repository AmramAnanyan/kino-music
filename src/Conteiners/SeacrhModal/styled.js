import styled from "styled-components";
import { IMAGE_PATH } from "../../constants";


export const StyledSearchModal = styled.div`
    width: 340px;
    height: 240px;
    background-color: #1e1e1e;
    opacity: 0.9;
    position: absolute;
    z-index: 3;
    border-radius: 8px;
    left: 252px;
    top: 48px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 10px;
        }
    ::-webkit-scrollbar-thumb {
        background-image:repeating-linear-gradient(gold,red) ; //#007aff
        border-radius: 24px;
        box-shadow:0px 1px 14px 6px black;

        }
    ::-webkit-scrollbar-track {
    background-image: linear-gradient(to bottom,red,gold);
    border-radius: 24px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-image:repeating-linear-gradient(red,gold) 
    }

    
    .searchItem{
     
      width: 320px;
      height: 72px;
      border-bottom: 1px solid white;
      display: flex;
      justify-content: space-between;
     
    }
    .searchTitle{
        width: 160px;
        display: flex;
        flex-direction: column;
        justify-content: center;

       
       
    }
    .searchTitle h4 {
        color: red;
        
    }
    .searchTitle h5 {
        color: goldenrod;
       
    }
    




`

export const StyledSearchImage = styled.div`
    width: 120px;
    background-image: url(${(props) => (IMAGE_PATH + props.image)});
    background-size: contain;
    background-repeat: no-repeat;

`