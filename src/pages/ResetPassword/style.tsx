import styled from "styled-components";
import { SCREEN_MAX } from "../../utils/ScreenSettings";

export const StyledSignInWrapper = styled.div`
  position: relative;
  width: 398px;
  margin: 15vh auto;
  border-radius: 8px;

  @media ${SCREEN_MAX.md} {
    width: 388px;
    margin: 20vh auto;
  }
  @media ${SCREEN_MAX.sm} {
    width: 88%;
    margin: 20vh auto;
  }
`;
export const StyleSignInButtonWrapper = styled.section`
  margin-top: 7%;
  margin-bottom: 2%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
