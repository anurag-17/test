import styled from "styled-components";
import { SCREEN_MAX } from "../../../utils/ScreenSettings";

export const StyledAuthLayoutWrppper = styled.div`
  height: 80vh;
  flex-direction: column;
  // padding: 8% 0;
  // // text-align: center;
  // width: 100%;
  // // margin: 20% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  // // flex-flow: column no-wrap;
  // flex-direction: column;
  // background-color: blue;

  @media ${SCREEN_MAX.md} {
    // width: 388px;
    // padding: 10% 0;
  }
`;

export const StyledHeader = styled.header`
  width: 100%;
  // flex-basis: 100%;
`;
export const StyledMain = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  // height: 70%;
`;
// export const
