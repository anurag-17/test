import styled from "styled-components";
import { SCREEN_MAX } from "../../../utils/ScreenSettings";

export const BorderSolid = styled.div<{ width: string, height: string, marginTop: string, borderRadius: string, typing: string | any }>`
  border: ${({ borderRadius }) => (borderRadius ? borderRadius : "1px solid #343a40")}; 
  border-radius: 8px;
  width: ${({ typing }) => (typing === "project_type" ? "330px" : "105%")};
  height: ${({ height }) => (height ? height : "2.7rem")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0.1rem")};
  cursor: pointer;
  margin-left: ${({ typing }) => (typing === "minage" ? "1rem" : "0rem")};

  @media ${SCREEN_MAX.md} {
    width: ${({ typing }) => (typing === "project_type" ? '200px' : "100%")};
    margin-left: ${({ typing }) => (typing === "minage" ? "0rem" : "0rem")};
    
  }
`;

export const BorderSolidFirst = styled.div`
  color: white;
`;

export const Toggle = styled.div<{ bgColor?: string, color: string }>`
  color: ${({ bgColor }) => (bgColor ? bgColor : "bg-white")};
  margin-left: 1rem;
  margin-top: 0.5rem;
  color: ${({ color }) => (color ? color : "white")};
`;

export const ToggleP = styled.p<{ selected?: Record<string, unknown> }>`
  color: ${({ selected }) =>
    selected?.label ? "text-opacity-100" : "text-opacity-70"};


  font-weight: 300;
`;

export const FontP = styled.div<{ marginLeft?: string, }>`
  position: absolute;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "10rem")};
  margin-top: -1rem;
  color: red;

  @media ${SCREEN_MAX.md} {
    margin-left: ${({ marginLeft }) => (marginLeft ? '10rem' : "10rem")};
    
  }
`;

export const PickerPopups = styled.div`
  
  margin-left: 5rem;
  color: white;
`;

export const PickerPopup = styled.div<{ width?: string, types?: string }>`
 position: absolute;
 z-index: 999;
 background: #343a40;
 cursor: pointer;
 border-radius: 0.5rem;
 width: ${({ width, types }) => (width === "10%" && types === "gender"  ? '12%' : types === "postrole" ? "46%" :"21%")};
 
 box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
 @media ${SCREEN_MAX.md} {
   width: ${({ width, types }) => (width === "10%" && types === "gender"  ? '150px' : types === "postrole" ? "203px" :"21%")};
  
}
`;

export const PickerLabel = styled.div<{ color?: string, marginLeft: string, types?: string }>`
  color: white
  display: flex;
  margin-left: ${({ marginLeft, types }) => (marginLeft === '3rem' && types === "gender" ? '-0.8rem' : "2.5rem")};
  
  @media ${SCREEN_MAX.md} {
    margin-left: ${({ marginLeft, types }) => (marginLeft === '3rem' && types === "gender" ? '-1rem' : "-4rem")};
    color: white;
    margin: 0.4rem;
  }
`;
export const Container = styled.section<{width: string}>`
  width: ${(p) => (p.width  ? p.width : "20%")};
  

  @media ${SCREEN_MAX.md} {
    width: 100%;
  }
`;

export const Label = styled.label<{margin: string, typing: string}>`
  display: flex;
  wrap: no-wrap;
  text-transform: uppercase;
  margin-left: ${({ typing }) => (typing === "minage" ? "1rem" : "0rem")};
`;
export const StyledAsterik = styled.span`
  color: #c92a2a;
  padding-left: 0.3px;
`;

export const Img = styled.img`
    height:100%;
    width:100%;
    background-color: gray;
    border-radius: 3px
`