import styled from "styled-components";
import { IMAGE_PATH, IMAGE_W500_PATH } from "../../constants";
import photo1 from "../../assets/photo1.png";


export const StyledDetailsPage = styled.div`
        width: 100%;
        background-image: url(${(props)=>props.backImage?IMAGE_PATH+props.backImage:photo1});
        text-align: center;
        color: gold;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-size: cover;
        background-repeat: no-repeat;
 
        h2{
            padding-top: 24px;
        }
        .titleStyle{
            display: flex;
            justify-content: space-around;
            margin-top: 12px;
        }
        .description{
            width: 580px;
            background-color: #1f1f11;
            box-shadow: 0px 0px 17px 7px whitesmoke;
            border-radius: 24px;
           
          
            
        }
        p{
            font-size: 18px;
            letter-spacing: 1px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-style: oblique;
        }

`

export const StyledDetailsImage = styled.div`
    width: 360px;
    height: 560px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.image ? (IMAGE_W500_PATH + props.image) : photo1});
    border-radius: 24px;
    box-shadow: 0px 0px 17px 7px whitesmoke;
    

`

export const StyledSpanHash = styled.span`
    font-size: 18px;
    color: #007aff;

`

export const StyledCompany = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    margin-top: 24px;
    font-size: 18px;

    .companyImage{
        background-image: url(${(props) => (props.image ? IMAGE_PATH + props.image : photo1)});
        width: 120px;
        height: 36px;
        background-size: contain;
        background-repeat: no-repeat;
        background-color: #007aff;
        background-position: 50%;
        border-radius: 8px;

    }

`

export const StyledRedSpane = styled.span`
    color: red;
`

export const StyledDetailsLogo = styled.h1`
    width: 100%;
    height: 120px;
    font-size: 56px;
    letter-spacing: 2px;
    color: red;
    margin-top: 48px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: lighter;
   
`