import styled from "styled-components";
import { COLORS } from "../../lib/StyledComponents/themes";
import { SCREEN_MAX } from "../../utils/ScreenSettings";
import {BANNER} from "../../components/Assets/ImageConstant";

export const StyledSignInWrapper = styled.div`
  position: relative;
  width: 398px;
  border-radius: 8px;

  @media ${SCREEN_MAX.md} {
    width: 388px;
  }
  @media ${SCREEN_MAX.sm} {
    width: 88%;
  }
`;
export const StyleSignInButtonWrapper = styled.section`
  margin-top: 4%;
  margin-bottom: 2%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledForgotPasswordText = styled.p`
  position: absolute;
  bottom: 40.5%;
  right: 10%;
  text-align: right;
  text-transform: uppercase;
  color: ${COLORS.primary};
  font-size: 0.75em;
`;

export const Container = styled.div`
    background-image: url(${BANNER});
    position: relative;
    display:flex;
    flex-direction:column ;
    justify-content:center;
    align-items:center;
    width:100vw;
    height:80vh;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    @media ${SCREEN_MAX.md} {
        padding-top:10%;
     }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    width:100vw;
    height:80vh;
   
`