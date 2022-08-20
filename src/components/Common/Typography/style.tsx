import styled from "styled-components";
import { COLORS } from "../../../lib/StyledComponents/themes";
import { SCREEN_MAX } from "../../../utils/ScreenSettings";

interface Props {
  color?: string;
  textAlign?: string;
  fontSize?: string;
  padding?: string;
  fontWeight?: string | number;
  body1?: boolean;
  width?: number;
  lineHeight?: number;
  resFont?: string;
  maxWidth?: string;
  margin?: string;
  bgColor?: string;
  borderRadius?: number;
}
export const StyledTypographyWrapper = styled.p<Props>`
  text-align: ${(p) => (p.textAlign ? p.textAlign : "left")};
  color: ${(p) => (p.color ? p.color : COLORS.text)};
  font-size: ${(p) => (p.fontSize ? p.fontSize : p.body1 ? "1em" : "1.125em")};

  padding: ${(p) => (p.padding ? p.padding : "0.3em 0em")};
  margin: ${(p) => p.margin && p.margin};
  background-color: ${(p) => p.bgColor && p.bgColor};
  max-width: ${(p) => p.maxWidth && p.maxWidth};
  width: ${(p) => p.width && `${p.width}%`};
  line-height: ${(p) => p.lineHeight && `${p.lineHeight}px`};
  padding: ${(p) => (p.padding ? p.padding : "0.3em 0px")};
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : 350)};

  @media ${SCREEN_MAX.md} {
    font-size: ${(p) => p.resFont && p.resFont};
  }

  border-radius: ${(p) => p.borderRadius && `${p.borderRadius}px`};
`;
