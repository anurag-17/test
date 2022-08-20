import styled from "styled-components";
import { COLORS } from "../../../lib/StyledComponents/themes";
import { SCREEN_MAX } from "../../../utils/ScreenSettings";

interface Props {
  fontSize?: string;
  color?: string;
  fontWeight?: string | number;
  display?: string;
  lineHeight?: string;
  marginTop: string | any
  resFont?:string
  marginLeft?:string
}

export const SubTitle = styled.h3<Props>`
  font-size: ${(p) => (p.fontSize ? p.fontSize : "1.25em")};
  color: ${(p) => (p.color ? p.color : COLORS.black)};
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "bold")};
  display?: ${(p) => (p.display ? p.display : "")};
  line-height: ${(p) => p.lineHeight && p.lineHeight};
  margin-left:${(p)=>p.marginLeft};

  @media ${SCREEN_MAX.md} {
    font-size: ${(p) => (p.resFont && p.resFont)}; 
    margin-left:${(p)=>p.marginLeft};
    }
`;
export const Title = styled.h2<Props>`
  font-size: ${(p) => (p.fontSize ? p.fontSize : "2.5em")};
  color: ${(p) => (p.color ? p.color : COLORS.black)};
  display?: ${(p) => (p.display ? p.display : "")};
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "bold")};
  line-height: ${(p) => p.lineHeight && p.lineHeight};
  margin-left:${(p)=>p.marginLeft};
  @media ${SCREEN_MAX.md} {
    font-size: ${(p) => ("1.8em")};
    margin-top: ${(p) => ("3rem")};
    margin-left:${(p)=>p.marginLeft};
}
`;
