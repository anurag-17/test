import React from "react";
import { MultiSelect } from "react-multi-select-component";
import { COLORS } from "../../../lib/StyledComponents/themes";
import { ARROW_DOWN_PNG } from "../../Assets/IconsConstant";
import Heading from "../Heading";
import {
  Container,
  StyledAutocompleteInputWrapper,
  StyledSelectAsterik,
  StyledSelectLabel,
} from "./style";



interface InputFieldWithIconProps {
  placeholder?: string;
  listItem: any;

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
  value?: any;
  borderColor?: string;
  onChange?:any;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  multiple?: boolean;
  labelledBy?:any
  isLoading?:boolean
}

const CustomIcon = () => {
  return(
    <img src={ARROW_DOWN_PNG} alt="open" />
  )
}
function CustomMultiSelect(props: InputFieldWithIconProps) {
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
      <MultiSelect
       isLoading={props.isLoading}
        options={props.listItem}
        value={props.value}
        onChange={props.onChange}
        labelledBy={props.labelledBy}
        ClearSelectedIcon={null}
        ArrowRenderer={()=> 
          <div  >
            <CustomIcon />
          </div>
          }
      />
      </StyledAutocompleteInputWrapper>
    </Container>
  );
}

export default CustomMultiSelect;
