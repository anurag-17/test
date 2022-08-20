import styled from "styled-components";
import { SCREEN_MAX } from "../../../utils/ScreenSettings";

interface Props {
  padding?: number | string;
  margin?: string | number;
  width?: string | number;
  height?: string | number;
  position?: string;
  flexGrow?: string | number;
  order?: string | number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  widthMobile?: boolean | number | string;
}
export const Section = styled.section<Props>`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 8px 24px #2125290a;
  border-radius: 8px;
  z-index: 10;
  opacity: 1;
  flex-grow: ${(p) => p.flexGrow && p.flexGrow};
  order: ${(p) => p.order && p.order};
  width: ${(p) => p.width && p.width};
  height: ${(p) => p.height && p.height};
  position: relative;
  margin: ${(p) =>
    typeof p.margin === "number"
      ? `${p.margin}%`
      : typeof p.margin === "string"
      ? p.margin
      : ""};
  padding: ${(p) =>
    typeof p.padding === "number"
      ? `${p.padding}%`
      : typeof p.padding === "string"
      ? p.padding
      : "2.5%"};
  padding-top: ${(p) => p.pt && `${p.pt}%`};
  padding-left: ${(p) => p.pl && `${p.pl}%`};
  padding-bottom: ${(p) => p.pb && `${p.pb}%`};
  padding-right: ${(p) => p.pr && `${p.pr}%`};

  @media ${SCREEN_MAX.md} {
    padding-left: 20px;
    padding-right: 20px;
    flex-grow: ${(p) => (p.flexGrow ? p.flexGrow : "1")};
    width: ${(p) =>
      typeof p.widthMobile === "number"
        ? `${p.widthMobile}%`
        : typeof p.widthMobile === "string"
        ? p.widthMobile
        : p.widthMobile === true
        ? "100%"
        : "100%"};
  }
`;
