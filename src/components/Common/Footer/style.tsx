import styled from "styled-components";
import { SCREEN_MAX } from "../../../utils/ScreenSettings";

export const StyledFooter = styled.div`
    width:100%;
    height: 91px;
    background: #212529 0% 0% no-repeat padding-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 350;
    

    .mid {
        text-align: left;
        color: #FFFFFF;
        opacity: 1;
        font-family: "Roboto", sans-serif;

        @media ${SCREEN_MAX.md} {
            font-size:12px
        }
    }

    .mid:hover {
        color:#868E96
    }

    .main {
        text-align: left;
        color: #FFFFFF;
        opacity: 1;
        font-family: "Roboto", sans-serif;  
        margin-left: -8rem;
        @media ${SCREEN_MAX.md} {
           text-align:center;
           font-size:14px
        }
    }

    @media ${SCREEN_MAX.md} {
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`

export const SubWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:25%;
    font-family: "Roboto", sans-serif;
    margin-right: -5rem;
    @media ${SCREEN_MAX.md} {
        flex-direction:row;
        justify-content:center;
        align-items:center;
        width:100%;
    }
`