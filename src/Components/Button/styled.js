import styled from "styled-components";

export const StyledButton = styled.div`
    width: 120px;
    height: 50px;
    button{
        width: 128px;
        height: 42px;
        border-radius: 12px;
        cursor: pointer;
        background-color: ${({color}) =>color||"red" };
        color: #e1e1ee;
        font-size: 22px;
        letter-spacing: 2px;
        font-family: Gabriola,sans-serif;
        font-weight: 700;
        transition: 0.3s;
        box-shadow:0px 1px 15px 5px black;

    };

    .pulse {
    border: 4px solid transparent;
    border-image: linear-gradient(red , goldenrod);
   -moz-border-image: -moz-linear-gradient(red , goldenrod);
   -webkit-border-image: -webkit-linear-gradient(red , goldenrod);
    border-image-slice: 1;
    border-radius: 12px;
    border-image-outset: 8px;
}
.pulse:hover{
    border: 6px solid transparent;
    -moz-border-image: -moz-linear-gradient(20deg,red 40%,  goldenrod);
    -webkit-border-image: -webkit-linear-gradient(20deg, red 40%, goldenrod );
    border-image: linear-gradient(20deg, red 40%,  goldenrod );
    border-image-slice: 1;
    background-color: #e1e1ee;
    color: red;
}
`;