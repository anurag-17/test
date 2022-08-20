import styled from "styled-components";
import {BANNER} from "../../components/Assets/ImageConstant";
import { SCREEN_MAX } from "../../utils/ScreenSettings";

export const MainContainer = styled.div`
    height:100vh;
    flex-direction: column;

    @media ${SCREEN_MAX.md} {
        flex-direction: row;
     }
`
export const HeroContainer = styled.div`
    background-image: url(${BANNER});
    min-height:100%;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip:padding-box;
    margin:0px;
    padding-top:3%;
    padding-bottom:4%;

    @media ${SCREEN_MAX.md} {
        padding-top:10%;
        
     }
`
export const Wrapper = styled.div`
     margin-left:4.5%;
     margin-right:4.5%;
     margin-top:2.5%;
     margin-bottom:2.5%;
     height:75vh;
     display:flex;
     align-items:center;
     justify-content:space-between;

     @media ${SCREEN_MAX.md} {
        display:block;
     }

`

export const CardContainer = styled.div`
    width:50%;
    height:70%;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;

    @media ${SCREEN_MAX.md} {
        width:120%;
        height:70%;
        display: flex;
        flex-wrap: none
     }
`
export const FeatureWrapper = styled.div`
    width:32%;
    height:47.5%;
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    flex-direction: column;
    justify-content: center;
    // margin:4rem 20rem;
    

    @media ${SCREEN_MAX.md} {
        width:33%;
        display: flex;
        flex-direction: column;
     }
    
`

export const NewsContainer = styled.div`
    width:30%;
    height:100%;
    background: rgba(255,255,255,.1);
    box-shadow:0 5px 15px rgba(0,0,0,.3);
    backdrop-filter: blur(32px);
    opacity: 1;
    padding:1%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    @media ${SCREEN_MAX.md} {
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        width:100%;
        height:40%;
        align-items:center;
     }
`
export const NewsWrapper = styled.div`
    height:24%;

    @media ${SCREEN_MAX.md} {
        width:49%;
        height:45%;
     }

`

