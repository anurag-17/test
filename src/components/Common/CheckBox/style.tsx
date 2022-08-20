import styled from "styled-components";
import { COLORS } from "../../../lib/StyledComponents/themes";
import { CHECk_ICON } from "../../Assets/IconsConstant";

interface Props {
  padding?: number;
  size?: number;
  margin?: number;
  borderBottom?: boolean;
  fontWeight?: number | string;
}
export const StyledCheckBoxWrapper = styled.div<Props>`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
  align-items: center;
  padding: ${(p) => p.padding && `${p.padding}%`};
  margin: ${(p) => p.margin && `${p.margin}%`} 0%;
  // border: 2px solid black;
  // border-bottom: 1px solid ${COLORS.inputBorder};
  border-bottom: ${(p) => p.borderBottom && `1px solid ${COLORS.inputBorder}`};
`;

export const StyledCheckBoxLabel = styled.label<Props>`
  font-weight: ${(p) => p.fontWeight && p.fontWeight};
  display: inline-block;
  text-transform: lowercase;
  &::first-letter {
    text-transform: capitalize;
  }
`;
export const StyledInput = styled.input<Props>`
  appearance: none;
  height: ${(p) => (p.size ? `${p.size}px` : "21px")};
  width: ${(p) => (p.size ? `${p.size}px` : "21px")};
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid ${COLORS.inputBorder};
  &:checked {
    appearance: none;
    background: ${COLORS.primary} url(${CHECk_ICON}) 0% 0% no-repeat;
    height: ${(p) => (p.size ? `${p.size + 2}px` : "24px")};
    width: ${(p) => (p.size ? `${p.size + 2}px` : "24px")};
    border-radius: 10px;
    border: 0px;
  }
`;
