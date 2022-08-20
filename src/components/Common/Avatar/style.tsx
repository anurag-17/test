import styled from "styled-components";
import { COLORS } from "../../../lib/StyledComponents/themes";

interface Props {
  border?: boolean;
  size?: number;
  gap?: any;
  square?: boolean;
}

export const FigureWrapper = styled.figure<Props>`
  ${(p) =>
    p.square
      ? `
      border: 2px solid ${COLORS.white};
      border-radius:8px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      height: ${p.size ? `${p.size}px` : "32px"};
      max-height: ${p.size ? `${p.size}px` : "32px"};
      width: ${p.size ? `${p.size}px` : "32px"};
      max-width: ${p.size ? `${p.size}px` : "32px"};
      background:${COLORS.white};
      `
      : `
      height: ${p.size ? `${p.size}px` : "120px"};
      width: ${p.size ? `${p.size}px` : "120px"};
      border-radius: 100%;
      border: ${p.border && `1px dotted ${COLORS.border}`};
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
 `}
`;

export const Image = styled.img<Props>`
  ${(p) =>
    p.square
      ? `
      height: ${p.size ? `${p.size - (p.gap ? p.gap : 4)}px` : "28px"};
      max-height: ${p.size ? `${p.size - (p.gap ? p.gap : 4)}px` : "28px"};

      width: ${p.size ? `${p.size - (p.gap ? p.gap : 4)}px` : "28px"};
      max-width: ${p.size ? `${p.size - (p.gap ? p.gap : 4)}px` : "28px"};

      border-radius:8px;
      
      
    `
      : `
    height: ${p.size ? `${p.size - (p.gap ? p.gap : 16)}px` : "104px"};
    width: ${p.size ? `${p.size - (p.gap ? p.gap : 16)}px` : "104px"};
    border-radius: 100%;
`}
`;
