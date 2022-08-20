// import { ARROW_DOWN, LOGO } from "../../Assets/IconsConstant";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { COLORS } from "../../../lib/StyledComponents/themes";
import { ERROR_STATE } from "../../../store/atoms/error";

import { changeEvent } from "../../../utils/types";
import { validateInput } from "../../../utils/validations";
import Heading from "../Heading";
import {
  Container,
  ErrorText,
  Input,
  InputIcon,
  InputWrapper,
  Label,
  StyledAsterik,
} from "./style";

interface IProps {
  icon?: string;
  iconText?: string;
  label?: string;
  width?: string;
  required?: boolean;
  fontWeightPlaceHolder?: number | string;
  margin?: string;
  type?: string;
  bgColor?: string;
  pt?: number;
  pr?: number;
  pl?: number;
  pb?: number;
  mt?: number;
  mr?: number | any;
  ml?: number | any;
  mb?: number;
  iconTop?: number;
  placeHolder?: string;
  id?: string;
  name?: string;
  value?: string;
  borderColor?: string;
  color?: string;
  types?: string | any;
  onChange?: (e: changeEvent) => void;
  error?: string;
  disabled?: boolean;
  hasErrors?: (v: boolean) => void;
  maxLength?: number;
  pattern?:any;
  min?: number;
  max?: number;
}
const InputWithLabel = React.forwardRef<HTMLInputElement, IProps>(
  (props, ref) => {
    const {
      icon,
      iconText,
      label,
      width,
      required,
      margin,
      type,
      bgColor,
      mt,
      mb,
      ml,
      mr,
      pt,
      pb,
      pl,
      pr,
      iconTop,
      placeHolder,
      id,
      name,
      value,
      borderColor,
      fontWeightPlaceHolder,
      color,
      types,
      onChange,
      hasErrors,
      error,
      disabled,
      maxLength,
      pattern,
      min,
      max,
    } = props;

    const [errorMessage, setErrorMessage] = useState("");
    const setIsError = useSetRecoilState(ERROR_STATE);
    const handleChange = (e: changeEvent) => {
      const value = e.target.value;
      const message = validateInput(type as string, value, required);
      if (message) {
        setErrorMessage(message);
        setIsError(true);
        hasErrors && hasErrors(true);
      } else {
        setErrorMessage("");
        setIsError(false);
        hasErrors && hasErrors(false);
      }
      onChange && onChange(e);
      //  hasErrors && hasErrors(false);
    };



    return (
      <Container
        width={width}
        margin={margin}
        pt={pt}
        pl={pl}
        pb={pb}
        pr={pr}
        mt={mt}
        ml={ml}
        mb={mb}
        mr={mr}
        types={types}
        
      >
        <Label>
          <Heading
            title={
              <>
                {label}
                {required && <StyledAsterik>*</StyledAsterik>}
              </>
            }
            color={COLORS.grey}
            fontSize="0.725em"
            fontWeight={600}
            marginTop="0rem"
          />
        </Label>
        <InputWrapper required={required}>
          <Input
            id={id}
            name={name}
            value={value}
            placeholder={placeHolder}
            type={type}
            bgColor={bgColor}
            borderColor={borderColor}
            fontWeightPlaceHolder={fontWeightPlaceHolder}
            color={color}
            onChange={handleChange}
            ref={ref}
            disabled={disabled}
            required={required}
            maxLength={maxLength || 255}
            pattern={pattern}
            min={min}
            max={max}
          />
          <InputIcon
            iconTop={iconTop}
            src={icon && icon}
            alt={iconText && iconText}
          />
        </InputWrapper>
        <ErrorText>{error || errorMessage}</ErrorText>
      </Container>
    );
  }
);

export default InputWithLabel;
