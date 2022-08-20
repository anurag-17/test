import styled from "styled-components";
import { COLORS } from "../../../lib/StyledComponents/themes";
import { SCREEN_MAX } from "../../../utils/ScreenSettings";

interface Props {
  bgColor?: string;
  padding?: number | string;
  margin?: string | number;
  mt?: number | string;
  mr?: number;
  ml?: number;
  mb?: number | string;
  width?: string | number;
  flexGrow?: string | number;
  order?: string | number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  gap?: number;
}
export const StyledFormGroup = styled.form<Props>`
  background-color: ${(P) => (P.bgColor ? P.bgColor : COLORS.white)};
  border-radius: 8px;
  z-index: 10;
  opacity: 1;
  flex-grow: ${(p) => p.flexGrow && p.flexGrow};
  order: ${(p) => p.order && p.order};
  width: ${(p) => p.width && `${p.width}%`};
  margin: ${(p) =>
    typeof p.margin === "number"
      ? `${p.margin}%`
      : typeof p.margin === "string"
      ? p.margin
      : ""};
  margin-top: ${(p) =>
    typeof p.mt === "number"
      ? `${p.mt}%`
      : typeof p.mt === "string"
      ? p.mt
      : ""};
  margin-bottom: ${(p) =>
    typeof p.mb === "number"
      ? `${p.mb}%`
      : typeof p.mb === "string"
      ? p.mb
      : ""};
  margin-left: ${(p) => p.ml && `${p.ml}%`};
  margin-right: ${(p) => p.mr && `${p.mr}%`};
  padding: ${(p) =>
    typeof p.padding === "number"
      ? `${p.padding}%`
      : typeof p.padding === "string"
      ? p.padding
      : "0.5%"};
  padding-top: ${(p) => p.pt && `${p.pt}%`};
  padding-left: ${(p) => p.pl && `${p.pl}%`};
  padding-bottom: ${(p) => p.pb && `${p.pb}%`};
  padding-right: ${(p) => p.pr && `${p.pr}%`};
  display: flex;
  // justify-content: center;
  // align-items: center;
  gap: ${(p) => p.gap && `${p.gap}px`};

  @media ${SCREEN_MAX.md} {
    flex-wrap: wrap;
  }
`;
