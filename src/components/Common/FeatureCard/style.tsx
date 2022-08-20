import styled from "styled-components";
import { SCREEN_MAX } from "../../../utils/ScreenSettings";

export const Container = styled.div`
    width:100%;
    height:100%;
    padding:4.5%;
    background: rgba(255,255,255,.1);
    box-shadow:0 5px 15px rgba(0,0,0,.3);
    backdrop-filter: blur(32px);
    opacity: 1;
    border-radius:8px;
    display:flex;
    justify-content:center;
    flex-direction:column;
    position: relative;
`

export const ImageWrapper = styled.div`
    height:40px;
    width:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    background: rgba(0,0,0,.3);
    border-radius: 8px;
    margin-bottom:4%;
    position: absolute;
    top: 1rem;

    @media ${SCREEN_MAX.md} {
        height:30px;
        width:30px;
        border-radius: 4px;
    }
`

export const Img = styled.img`
    height:20px;
    width:20px;

    @media ${SCREEN_MAX.md} {
        height:18px;
        width:18PX;
    }

`

export const ButtonWrapper = styled.div`
    width:90%;
    background: rgba(0,0,0,.3);
    height:18%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 8px;
    margin-top:4.5%;
    position: absolute;
    bottom: 0.6rem;
    cursor: pointer;

    :hover {
        background: rgba(255,99,71,0.5); 
    }

`