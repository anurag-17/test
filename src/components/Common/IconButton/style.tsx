import styled from "styled-components";
import { COLORS } from "../../../lib/StyledComponents/themes";

interface Props {
  size?: number;
  iconSize?: number;
  background?: string;
  opacity?: number;
}
export const StyledIconButton = styled.button<Props>`
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(p) => (p.size ? `${p.size}px` : "34px")};
  height: ${(p) => (p.size ? `${p.size}px` : "34px")};
  border-radius: 100%;
  background: ${(p) =>
    p.background
      ? p.background
      : `${COLORS.black} 0% 0% no-repeat padding-box`};
  opacity: ${(p) => (p.opacity ? `${p.opacity}` : "0.6")};
  cursor: pointer;
  &:hover {
    transform: scale(1.2);

    background: ${COLORS.blackThick};
    opacity: 0.4;
  }
  &:active {
    transform: scale(1.5);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
    opacity: 0.7;
    transition: visibility 0s 2s, opacity 2s linear;
  }
`;
export const StyledIconButtonImage = styled.img<Props>`
  width: ${(p) => p.iconSize && `${p.iconSize}px`};
  height: ${(p) => p.iconSize && `${p.iconSize}px`};
`;
