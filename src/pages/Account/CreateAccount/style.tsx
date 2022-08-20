import styled from "styled-components";
import { COLORS } from "../../../lib/StyledComponents/themes";
import { SCREEN_MAX } from "../../../utils/ScreenSettings";

export const StyledSignInWrapper = styled.div`
  position: relative;
  width: 398px;
  margin: 15vh auto;
  border-radius: 8px;

  @media ${SCREEN_MAX.md} {
    width: 388px;
    margin: 15vh auto;
  }
  @media ${SCREEN_MAX.sm} {
    width: 88%;
    margin: 5vh auto;
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
  bottom: 39.5%;
  right: 10%;
  text-align: right;
  text-transform: uppercase;
  color: ${COLORS.primary};
  font-size: 0.75em;
`;
