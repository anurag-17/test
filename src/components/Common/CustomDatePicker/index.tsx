// import { ARROW_DOWN, LOGO } from "../../Assets/IconsConstant";
import React from 'react'
import { COLORS } from "../../../lib/StyledComponents/themes";
import Heading from "../Heading";
import DatePicker from "react-datepicker";
import {
  Container,
  InputWrapper,
  Label,
  StyledAsterik,
} from "./style";
import { IDatePicker } from '../../../Interface/datePicker';


const CustomDatePicker = ({

  label,
  width,
  required,
  margin,
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,
  onChange,
  selected
}: IDatePicker) => {
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
    >
      <Label>
        <Heading
          title={label}
          color={COLORS.grey}
          fontSize="0.725em"
          fontWeight={600}
          marginTop="0rem"
        />
        {required && <StyledAsterik>*</StyledAsterik>}
      </Label>
      <InputWrapper required={required}>
      <DatePicker selected={selected} onChange={onChange} />
      </InputWrapper>
    </Container>
  );
};

export default CustomDatePicker;
