import styled from "styled-components"
import {SMALL} from "../../components/Assets/ImageConstant";
import { SCREEN_MAX } from "../../utils/ScreenSettings";

export const MainContainer = styled.div`
    min-height:85vh;
    flex-direction: column;
    
`
export const Wrapper = styled.div`
    min-height:85vh;
    background: #E6E6E6 0% 0% no-repeat padding-box;
    opacity: 1;
`
export const BannerContainer = styled.div`
    background-image: url(${SMALL});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    background-clip:padding-box;
    height:30vh;
    width:100%;
    padding-left:5%;
    padding-right:5%;
    padding-top:1.5%;
`
export const SearchContainer = styled.div`
    padding-left:5%;
    padding-right:5%;
    padding-top:2%;

`
export const Form = styled.form`
    background: #212529 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    width:100%;
    height:15vh;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;

    @media ${SCREEN_MAX.md} {
        transform:scale(0.95,0.85);
    }

    @media ${SCREEN_MAX.xs} {
        min-height:30vh
    }

`
export const Input = styled.input`
    background: #212529 0% 0% no-repeat padding-box;
    border: 2px solid #343A40;
    border-radius: 8px;
    opacity: 1;
    width:47.7%;
    padding-left:1%;
    color:#FFFFFF;
    outline:none;

    ::placeholder {
        color:#FFFFFF;
        text-align: left;
        font: normal normal 300 14px/19px SF Pro;
        letter-spacing: 0px;
    };
`
export const Inputs = styled.input`
    background: #212529 0% 0% no-repeat padding-box;
    border: 2px solid #343A40;
    border-radius: 8px;
    opacity: 1;
    width:16%;
    padding-left:1%;
    color:#FFFFFF;
    outline:none;

    ::placeholder {
        color:#FFFFFF;
        text-align: left;
        font: normal normal 300 14px/19px SF Pro;
        letter-spacing: 0px;
    };
`
export const Select = styled.select`
    background: #212529 0% 0% no-repeat padding-box;
    border: 2px solid #343A40;
    border-radius: 8px;
    opacity: 1;
    width:15%;
    outline:none;
    padding: 0.5% 3.5% 0.5% 1%;
    color:#FFFFFF;
    text-align: left;
    font: normal normal 300 14px/19px SF Pro;
    letter-spacing: 0px;

`
export const InputContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
    height:35%;
`
export const RolesContainer = styled.div`
    padding-top:1%;
    padding-bottom:1.4%;
    text-align:left;
`
export const RolesCardWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;


`
export const RolesCard = styled.div`
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 8px 24px #2125290a;
    border-radius: 8px;
    opacity: 1;
    width:49.3%;
    min-height:20vh;
    padding:1%;
    display:flex;
    justify-content:space-between;
    margin-bottom:1.5%;
`
export const Img = styled.img`
    height:100%;
    width:30%;
`
export const RoleDetailWrapper = styled.div`
    width:68.5%;
    display:flex;
    flex-direction:column;
    justify-content:center;
`
export const RoleAddressWrapper = styled.div`
    display:flex;

    span {
        padding-left:2%
    }
`
export const SubmitContainer = styled.button`
    background: #C92A2A 0% 0% no-repeat padding-box;
    border: 2px solid #343A40;
    border-radius: 8px;
    opacity: 1;
    width:15%;
    outline:none;
    padding: 0.5% 3.5% 0.5% 1%;
    color:#FFFFFF;
    text-align: left;
    font: normal normal 300 14px/19px SF Pro;
    letter-spacing: 0px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    

`