import styled from "styled-components";
import { COLORS } from "../../../lib/StyledComponents/themes";
import { SCREEN_MAX } from "../../../utils/ScreenSettings";

import { ARROW_DOWN_RED } from "../../Assets/IconsConstant";
interface IInputFieldProps {
  width?: string | number;
  required?: boolean;
  margin?: string | number;
  bgColor?: string;
  pt?: number;
  pr?: number;
  pl?: number;
  pb?: number;
  mt?: number;
  mr?: number;
  ml?: number;
  mb?: number;
  iconTop?: number;
  borderColor?: string;
  fontWeightPlaceHolder?: number | string;
  color?: string;

  background?: string;

  fontSize?: number;
  icon?:string;
  paddingVertical?: number;
  paddingHorizontal?: number;
  height?: number;
  focusBackgroundColor?: string;
  borderRadius?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const Container = styled.section<IInputFieldProps>`
  width: ${(p) => (p.width ? p.width : "100%")};
  margin: ${(p) => p.margin && p.margin};

  padding-top: ${(p) => p.pt && `${p.pt}%`};
  padding-bottom: ${(p) => p.pb && `${p.pb}%`};
  padding-left: ${(p) => p.pl && `${p.pl}%`};
  padding-right: ${(p) => p.pr && `${p.pr}%`};
  margin-top: ${(p) => p.mt && `${p.mt}%`};
  margin-bottom: ${(p) => p.mb && `${p.mb}%`};
  margin-left: ${(p) => p.ml && `${p.ml}%`};
  margin-right: ${(p) => p.mr && `${p.mr}%`};

  @media ${SCREEN_MAX.md} {
    width: 100%;
  }
`;
export const StyledSelect = styled.select.attrs(
  (props: IInputFieldProps) => props
)`
  width: 100%;
  margin: 1% 0;
  border: 0;
  font-size: 1.125em;
  padding: 10px 14px;
  border-radius: 8px;
  outline: none;
  border: 1px solid
    ${(p) => (p.borderColor ? p.borderColor : COLORS.inputBorder)};
  background-color: ${(p) => (p.bgColor ? p.bgColor : "")};
  background: ${(p) => (p.icon ? `url(${p.icon}) no-repeat right` : `url(${ARROW_DOWN_RED}) no-repeat right`)};
  background-position-y: 50%;
  background-position-x: 95%;
  appearance: none;
  &:focus {
    outline: none;
    background: ${COLORS.inputBackground} 0% 0% no-repeat padding-box;
    border: 1px solid ${COLORS.primary};
  }

  &:first-child {
    color: ${(p) => (p.bgColor ? COLORS.white : COLORS.text)};
    font-family: Source Sans Pro;
    font-size: 1em;
    background-color: ${(p) => (p.bgColor ? p.bgColor : COLORS.white)};
    font-weight: ${(p) =>
      p.fontWeightPlaceHolder ? p.fontWeightPlaceHolder : 300};
  }
`;

export const StyledAutocompleteInputWrapper = styled.div.attrs(
  (props: IInputFieldProps) => props
)`
  border-radius: 8px;
  position: relative;

  // width: ${(p) => (p.width ? p.width : "100%")};

  // background: ${COLORS.text};
  // background: #212529 0% 0% no-repeat padding-box;
  margin-top: ${(p) => (p.required ? "0.3%" : "0.5%")};
  border: 0;
  // background-color: ${(p) => (p.bgColor ? p.bgColor : "")};

  &:focus {
    outline: none;
  }
  @media ${SCREEN_MAX.md} {
    width: 100%;
  }
`;
export const StyledSelectAsterik = styled.span`
  color: #c92a2a;
  padding-left: 0.3%;
  // padding: 0;
`;

export const StyledSelectLabel = styled.label`
  display: flex;
  wrap: no-wrap;
  text-transform: uppercase;
`;
