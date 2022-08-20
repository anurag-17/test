import styled from "styled-components";
import { COLORS } from "../../../lib/StyledComponents/themes";
import { SCREEN_MAX } from "../../../utils/ScreenSettings";

interface Props {
  bgColor?: string;
  small?: boolean;
  large?: boolean;
  medium?: boolean;
  size?: string;
  shadow?: boolean;
  primary?: boolean;
  secondary?: boolean;
  padding?: string;
  margin?: string;
  fontSize?: number;
  color?: string;
  sizeMd?: string;
  bottom?: string | number;
  marginLeft?: string;
  position?: string;
  borderRadius?: number;
}
export const StyledPrimaryButton = styled.button<Props>`
  border: 0px;
  padding: ${(p) => (p.padding ? p.padding : "6%")};
  margin: ${(p) => p.margin && p.margin};
  font-size: ${(p) => p.fontSize && `${p.fontSize}em`};
  width: ${(p) =>
    p.small
      ? "6.875em"
      : p.large
      ? "10.375em"
      : p.medium
      ? "9.75em"
      : p.size
      ? p.size
      : "10.75em"};
  cursor: pointer;
  border-radius: ${(p) => (p.borderRadius ? `${p.borderRadius}px` : "28px")};
  background: ${(p) => p.bgColor && p.bgColor};
  position: ${(p) => p.position && p.position};
  color: ${COLORS.white};
  margin-left: ${(p) => p.marginLeft && p.marginLeft};;
  bottom: ${(p) => p.bottom && p.bottom};;
  box-shadow: ${(p) => p.shadow && `0px 8px 20px ${COLORS.lightPitch}`};
  //   box-shadow: 0px 8px 20px ${COLORS.lightPitch};
  &:hover {
    background: ${COLORS.red};
    opacity: 0.6;
  }
  ${(props) =>
    props.disabled &&
    `
    opacity: 0.6;
    pointer-events: none;
      /* Disabled styles */
    `};
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
    width: ${(p) =>
      p.small
        ? "6.875em"
        : p.large
        ? "10.375em"
        : p.medium
        ? "9.75em"
        : p.sizeMd
        ? p.sizeMd
        : "10.75em"};
  }
`;

export const StyledSecondaryButton = styled.button<Props>`
  border: 0px;
  padding: 5%;
  width: ${(p) =>
    p.small
      ? "6.875em"
      : p.large
      ? "10.375em"
      : p.medium
      ? "9.75em"
      : p.size
      ? p.size
      : "10.75em"};
  margin: ${(p) => p.margin && p.margin};
  font-size: ${(p) => p.fontSize && `${p.fontSize}em`};
  cursor: pointer;
  border-radius: ${(p) => (p.borderRadius ? `${p.borderRadius}px` : "28px")};
  color: ${(p) => (p.color ? p.color : `${COLORS.white}`)};
  box-shadow: 0px 8px 20px ${COLORS.lightGrey};
  &:active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
    opacity: 0.7;
    transition: 0.5s;
  }
  @media ${SCREEN_MAX.md} {
    width: ${(p) =>
      p.small
        ? "6.875em"
        : p.large
        ? "10.375em"
        : p.medium
        ? "9.75em"
        : p.sizeMd
        ? p.sizeMd
        : "100%"};
  }
  }
`;
