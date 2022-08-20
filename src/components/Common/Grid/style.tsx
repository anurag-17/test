import styled from "styled-components";
import { COLORS } from "../../../lib/StyledComponents/themes";

interface Props {
  item?: boolean;
  justifyContent?: string;
  alignItems?: string;
  gap?: number;
  direction?: string;
  column?: boolean;
  row?: boolean;
  borderBottom?: boolean | string;
  padding?: string;
  pt?: number;
  pr?: number;
  pl?: number;
  pb?: number;
  mt?: number;
  mr?: number;
  ml?: number;
  mb?: number;
  margin?: number | string;
  width?: number;
}

export const StyledGridWrapper = styled.section<Props>`
  ${(p) =>
    p.item
      ? `
       display:flex;
       flex-direction: ${
         p.direction ? p.direction : p.column ? "column" : "row"
       };
       justify-content: ${p.justifyContent ? p.justifyContent : "flex-start"};
       align-items: ${p.alignItems ? p.alignItems : "flex-start"};
       border-bottom:${
         p.borderBottom ? `1px dashed ${COLORS.inputBorder}` : p.borderBottom
       };
       padding: ${p.padding && p.padding};
       padding-top: ${p.pt && `${p.pt}%`};
       padding-bottom: ${p.pb && `${p.pb}%`};
       padding-left: ${p.pl && `${p.pl}%`};
       padding-right: ${p.pr && `${p.pr}%`};
       
      // border:2px solid black;
      width:${p.width ? `${p.width}%` : "100%"};
      gap: ${p.gap && p.gap}px;
      margin-top: ${p.mt && `${p.mt}%`};
      margin-bottom: ${p.mb && `${p.mb}%`};
      margin-left: ${p.ml && `${p.ml}%`};
      margin-right: ${p.mr && `${p.mr}%`};
      margin:${typeof p.margin === "number" ? `${p.margin}%` : p.margin};
      > * {
        &:last-child {
          border-bottom: 0px;
        }
      }
       `
      : `
      display: flex;
      flex-direction: ${p.direction ? p.direction : p.row ? "row" : "column"};
      flex-wrap: wrap;
      justify-content: ${p.justifyContent ? p.justifyContent : "flex-start"};
      align-items: ${p.alignItems ? p.alignItems : "flex-start"};
      gap: ${p.gap && p.gap}px;
      padding: ${p.padding && p.padding};
      margin-top: ${p.mt && `${p.mt}%`};
      margin-bottom: ${p.mb && `${p.mb}%`};
      margin-left: ${p.ml && `${p.ml}%`};
      margin-right: ${p.mr && `${p.mr}%`};
      margin:${typeof p.margin === "number" ? `${p.margin}%` : p.margin};
      width:${p.width ? `${p.width}%` : "100%"};

     
      `}
`;
