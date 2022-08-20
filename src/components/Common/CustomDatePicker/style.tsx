import styled from "styled-components";
import { COLORS } from "../../../lib/StyledComponents/themes";
import { SCREEN_MAX } from "../../../utils/ScreenSettings";
import { CALENDER_ICON } from "../../Assets/IconsConstant";

interface Props {
  width?: string;
  required?: boolean;
  margin?: string;
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
}
export const Container = styled.section<Props>`
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
export const Label = styled.label`
  display: flex;
  wrap: no-wrap;
  text-transform: uppercase;
`;
export const StyledAsterik = styled.span`
  color: #c92a2a;
  padding-left: 0.3%;
  // padding: 0;
`;

export const Input = styled.input<Props>`
  width: 100%;
  font-size: 1.125em;
  border: 0;
  padding: 10px 14px;
  border-radius: 8px;
  outline: none;
  border: 1px solid
    ${(p) => (p.borderColor ? p.borderColor : COLORS.inputBorder)};
  margin: 1% 0px;
  background-color: ${(p) => (p.bgColor ? p.bgColor : "")};
  color: ${(p) => p.color && p.color};

  &:focus {
    outline: none;
    background: ${COLORS.inputBackground} 0% 0% no-repeat padding-box;
    border: 1px solid ${COLORS.primary};
    color: ${(p) => (p.bgColor === COLORS.text ? COLORS.white : COLORS.text)};
  }
  &::placeholder {
    color: ${(p) => (p.bgColor ? COLORS.white : COLORS.text)};
    font-family: Source Sans Pro;
    font-size: 0.8em;
    font-weight: ${(p) => p.fontWeightPlaceHolder && p.fontWeightPlaceHolder};
  }
`;

export const InputIcon = styled.img<Props>`
  position: absolute;
  top: ${(p) => (p.iconTop ? `${p.iconTop}px` : "12px")};
  right: 20px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    // background: ${COLORS.red};
    opacity: 0.6;
  }
  &:active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
    // background: ${COLORS.red};
    opacity: 0.7;
    transition: 0.5s;
  }

  @media ${SCREEN_MAX.md} {
    top: ${(p) => (p.iconTop ? `${p.iconTop - p.iconTop / 2.5}px` : "12px")};
  }
`;
export const InputWrapper = styled.div<Props>`
  border-radius: 8px;
  position: relative;
  width: 100%;
  // background: ${COLORS.white};
  margin-top: ${(p) => (p.required ? "0.3%" : "0.5%")};
  border: 0;
  // background-color: ${(p) => (p.bgColor ? p.bgColor : "")};

  &:focus {
    outline: none;
  }
  input{
    cursor:pointer;
    width: 100%;
    font-size: 1.125em;
    border: 0;
    padding: 10px 14px;
    border-radius: 8px;
    outline: none;
    border: 1px solid
      ${(p) => (p.borderColor ? p.borderColor : COLORS.inputBorder)};
    margin: 1% 0px;
    background-color: ${(p) => (p.bgColor ? p.bgColor : "")};
    background:  url(${CALENDER_ICON}) no-repeat right;
    background-position-y: 50%;
    background-position-x: 95%;
    appearance: none;
    color: ${(p) => p.color && p.color};
  
    &:focus {
      outline: none;
      background: ${COLORS.inputBackground} 0% 0% no-repeat padding-box;
      border: 1px solid ${COLORS.primary};
      color: ${(p) => (p.bgColor === COLORS.text ? COLORS.white : COLORS.text)};
    }
    &::placeholder {
      color: ${(p) => (p.bgColor ? COLORS.white : COLORS.text)};
      font-family: Source Sans Pro;
      font-size: 0.8em;
      font-weight: ${(p) => p.fontWeightPlaceHolder && p.fontWeightPlaceHolder};
    }
  }
`;
