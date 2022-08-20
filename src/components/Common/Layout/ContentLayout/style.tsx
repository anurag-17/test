import styled from "styled-components";
import { COLORS } from "../../../../lib/StyledComponents/themes";
import { SCREEN_MAX } from "../../../../utils/ScreenSettings";
import { MOBILE_BANNER, SMALL } from "../../../Assets/ImageConstant";

interface Props {
  padding?: string;
  subTitleWidth?: string;
  formGroupBorder?: boolean;
  show?: boolean;
  buttonSize?: number;
  backgroundImageTop?: boolean;
  pt?: number;
  pr?: number;
  pl?: number;
  pb?: number;
  mt?: number;
  mr?: number;
  ml?: number;
  mb?: number;
  centerText?: boolean;
  widthMobile?: number | boolean;
  width?: number;
  flexBasisHeader?: number;
  marginHeader?: string;
}

//=================================
//layout styles begins here
//==================================
export const Container = styled.div<Props>`
  width: ${(p) => (p.width ? `${p.width}%` : "90%")};
  margin: auto;
  margin-top: ${(p) => (p.mt ? `${p.mt}%` : "1%")};
  margin-bottom: ${(p) => (p.mb ? `${p.mb}%` : "1%")};
  margin-left: ${(p) => p.ml && `${p.ml}%`};
  margin-right: ${(p) => p.mr && `${p.mr}%`};
  padding: ${(p) => p.padding && p.padding};
  padding-top: ${(p) => p.pt && `${p.pt}%`};
  padding-bottom: ${(p) => p.pb && `${p.pb}%`};
  padding-left: ${(p) => p.pl && `${p.pl}%`};
  padding-right: ${(p) => p.pr && `${p.pr}%`};
  display: flex;
  justify-content: center;
  // align-items: flex-end;
  flex-flow: row wrap;
  // border: 2px solid black;

  @media ${SCREEN_MAX.md} {
    width: ${(p) => (p.widthMobile === true ? "100%" : "90%")};
    margin: auto;
    margin-top: ${(p) => (p.mt ? `${p.mt}%` : "2%")};
    display: flex;
    justify-content: center;
    // align-items: flex-end;
    flex-flow: column wrap;
    ${
      (p) =>
        p.backgroundImageTop &&
        `flex-flow: row wrap;
      `
      //   border: 2px solid black;
    }
  }
`;
export const MainContent = styled.section`
  flex-basis: 95%;
  margin: 1.5% 0;
  // border: 2px solid black;
`;

export const MainHeader = styled.section<Props>`
  display: flex;
  justify-content: ${(p) => (p.centerText ? "center" : "space-between")};
  align-items: ${(p) => (p.centerText ? "center" : "flex-end")};
  flex-basis: ${(p) => (p.flexBasisHeader ? `${p.flexBasisHeader}%` : "95%")};
  margin: ${(p) => (p.marginHeader ? p.marginHeader : "0 0.5% 0.5% 0.5%")};
  // border: 2px solid black;
  text-align: ${(p) => (p.centerText ? "center" : "")};
  ${(p) =>
    p.backgroundImageTop &&
    `
  background-image: url(${SMALL});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  background-clip:padding-box;
  // height:30vh;
  width:100%;
  padding-left:5%;
  padding-right:5%;
  // padding-top:1.5%;
  padding-top:5vh;
  padding-bottom:7vh;
  `}
  @media ${SCREEN_MAX.sm} {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-flow: column wrap;
    //   border: 2px solid black;
  }

  @media ${SCREEN_MAX.sm} {
    ${
      (p) =>
        p.backgroundImageTop &&
        `flex-flow: row wrap;
      // background-image: url(${MOBILE_BANNER});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top center;
      background-clip:padding-box;
      // height:40vh;
      width:100%;
      padding-left:5%;
      padding-right:5%;
      padding-top:10vh;
      padding-bottom:10vh;
      background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${MOBILE_BANNER});
      `
      //   border: 2px solid black;
    }
  }
`;

export const StyledHeaderImageBackground = styled.div<Props>`
  width: 100%;
  ${(p) =>
    p.backgroundImageTop &&
    `
  background-image: url(${SMALL});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  background-clip:padding-box;
  height:auto;
  width:100%;
  padding-top:1.5%;
  
  `}
  @media ${SCREEN_MAX.sm} {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-flow: column wrap;
    //   border: 2px solid black;
  }
`;
//================================
//layout ends here
//================================
export const MainContentHeader = styled.section<Props>`
  width: ${(p) => (p.subTitleWidth ? p.subTitleWidth : "60%")};
  // margin: 1% 0 2% 0;

  @media ${SCREEN_MAX.lg} {
    width: ${(p) => (p.subTitleWidth ? p.subTitleWidth : "60%")};
  }
  @media ${SCREEN_MAX.md} {
    width: 100%;
  }
`;

//===================================
//Account informatin component styles starts
//===================================

//Account informatin component styles Ends
//===================================

export const StyledContentButtonWrapper = styled.section<Props>`
  margin: 0 0 0.7% 0;
  text-align: right;
  width: ${(p) => (p.buttonSize ? `${p.buttonSize}%` : "10%")};
  padding: 0.5%;
  // border: 2px solid black;
  cursor: pointer;
  border-radius: 28px;
  background: ${COLORS.primary};
  color: ${COLORS.white};
  box-shadow: 0px 8px 20px ${COLORS.lightPitch};
  //   box-shadow: 0px 8px 20px ${COLORS.lightPitch};
  &:hover {
    background: ${COLORS.red};
    opacity: 0.6;
  }
  &:active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
    background: ${COLORS.red};
    opacity: 0.7;
    transition: 0.5s;
  }
  @media ${SCREEN_MAX.md} {
    text-align: center;
    width: 100%;
    cursor: none;
    border-radius: 0px;
    background: none;
    color: none;
    box-shadow: none;
    &:hover {
      background: none;
      opacity: none;
    }
    &:active {
      transform: none;
      /* Scaling button to 0.98 to its original size */
      box-shadow: none;
      /* Lowering the shadow */
      background: none;
      opacity: none;
      transition: none;
    }

    // border: 2px solid black;
  }
  // @media ${SCREEN_MAX.md} {
  //   display: none;
  // }
`;
