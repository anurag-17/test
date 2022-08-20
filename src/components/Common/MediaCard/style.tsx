import styled from "styled-components";
import { COLORS } from "../../../lib/StyledComponents/themes";
import { SCREEN_MAX } from "../../../utils/ScreenSettings";
import { PROFILE_ITEMS_BACKGROUND } from "../../Assets/ImageConstant";

interface Props {
  audio?: boolean;
  size?: number;
  smallScreenWrap?: boolean;
  backgroundImage?:string
}
export const StyledMediaCardContainer = styled.div<Props>`
  // background: transparent url("${PROFILE_ITEMS_BACKGROUND}") 0% 0% no-repeat;
  // background: linear-gradient(180deg, #000000 40%, #6a6d7000) padding-box;
  background: ${(p) =>
    p.audio
      ? `${COLORS.dark}`
      : "linear-gradient(180deg, #000000 40%, #6a6d7000) padding-box"};
  // border: 2px solid black;
  border-radius: 8px;
  width: ${(p) => (p.size ? `${p.size}px` : "160px")};
  height: ${(p) => (p.size ? `${p.size}px` : "160px")};
  opacity: 1;
  position: relative;
  // width: 100%;

  @media ${SCREEN_MAX.xs} {
    ${(p) => (p.smallScreenWrap ? `` : `width:100%`)}}
    // width: ${(p) => (p.smallScreenWrap ? "0" : "100%")};
  
`;

export const StyledMediaButtonsWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row no-wrap;
  gap: 5px;
  text-align: center;
  width: 100%;
  bottom: 10%;
`;
export const StyledMediaTitle = styled.section`
  position: absolute;
  top: 10%;
  text-align: center;
  width: 100%;
`;

//====================media components (video, audio, image)==========
export const StyledMediaCardVideo = styled.video<Props>`
  width: ${(p) => (p.size ? `${p.size}px` : "160px")};
  height: ${(p) => (p.size ? `${p.size}px` : "160px")};
  opacity: 0.5;
  @media ${SCREEN_MAX.xs} {
    width: 100%;
  }
`;

export const StyledMediaImg = styled.img<Props>`
  width: ${(p) => (p.size ? `${p.size}px` : "160px")};
  height: ${(p) => (p.size ? `${p.size}px` : "160px")};
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
    transform: scale(1.15);
    z-index: 100000;
  }
  @media ${SCREEN_MAX.xs} {
    width: 100%;
  }
`;
export const StyledMediaAudio = styled.audio<Props>`
  width: ${(p) => (p.size ? `${p.size}px` : "160px")};
  height: ${(p) => (p.size ? `${p.size}px` : "160px")};

  @media ${SCREEN_MAX.xs} {
    width: 100%;
  }
`;

//=====================add media component=============
export const StyledAddMediaWrapper = styled.div<Props>`
  width: ${(p) => (p.size ? `${p.size}px` : "160px")};
  height: ${(p) => (p.size ? `${p.size}px` : "160px")};
  border: 1px dashed ${COLORS.thinGrey};
  // padding: 5%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row no-wrap;

  @media ${SCREEN_MAX.xs} {
    width: 100%;
  }
`;

export const StyledAddMediaButtonWrapper = styled.div<Props>`
  width: ${(p) => (p.size ? `${p.size - 24}px` : "144px")};
  height: ${(p) => (p.size ? `${p.size - 24}px` : "144px")};
  background: ${COLORS.secondary};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row no-wrap;
  word-wrap: break-word;
  position:relative;

  @media ${SCREEN_MAX.xs} {
    width: 100%;
  }
`;

export const StyledAddMediaText = styled.p<Props>`
  bottom:80px;
  padding: 1em;
  position:absolute;


  // margin:auto;
  text-align:justify;
  word-break: break-word;
  white-space: pre-line;
  overflow-wrap: break-word;
  -ms-word-break: break-word;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
   z-index:50;

`;
