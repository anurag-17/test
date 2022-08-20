import React from "react";
import { COLORS } from "../../../lib/StyledComponents/themes";
import Heading from "../Heading";
import {
  Container,
  StyledAutocompleteInputWrapper,
  StyledSelect,
  StyledSelectAsterik,
  StyledSelectLabel,
} from "./style";

interface InputFieldWithIconProps {
  placeholder?: string;
  listItem: string[];

  fontSize?: number;
  error?: any;
  paddingVertical?: number;
  paddingHorizontal?: number;
  height?: number;
  focusBackgroundColor?: string;
  borderRadius?: number;
  icon?: string;
  iconText?: string;
  label?: string;
  width?: string | number;
  required?: boolean;
  fontWeightPlaceHolder?: number | string;
  margin?: string | number;
  type?: string;
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
  placeHolder?: string;
  id?: string;
  name?: string;
  value?: string;
  borderColor?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  multiple?: boolean;
}

function Select(props: InputFieldWithIconProps) {
  return (
    <Container
      width={props.width}
      margin={props.margin}
      pt={props.pt}
      pl={props.pl}
      pb={props.pb}
      pr={props.pr}
      mt={props.mt}
      ml={props.ml}
      mb={props.mb}
      mr={props.mr}
    >
      <StyledSelectLabel>
        <Heading
          title={props.label}
          color={COLORS.grey}
          fontSize="0.725em"
          fontWeight={600}
          marginTop="0rem"
        />
        {props.required && <StyledSelectAsterik>*</StyledSelectAsterik>}
      </StyledSelectLabel>
      <StyledAutocompleteInputWrapper width={props.width}>
        <StyledSelect id="listItem" {...props} icon={props.icon} defaultValue={"DEFAULT"}
        multiple={props.multiple}
        >
          <option value="DEFAULT" disabled hidden>
            {props.error ? props.error : props.placeHolder}
          </option>

          {props.listItem ? (
            props.listItem.map((item, index) => (
              <option key={index} value={item}>
                {item.includes("_") ? item.replace("_", " ") : item}
              </option>
            ))
          ) : (
            <option disabled hidden>
              {"loading..."}
            </option>
          )}
        </StyledSelect>
      </StyledAutocompleteInputWrapper>
    </Container>
  );
}

export default Select;
