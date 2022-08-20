// import { ARROW_DOWN, LOGO } from "../../Assets/IconsConstant";
import React from "react";
import { COLORS } from "../../../lib/StyledComponents/themes";
import Heading from "../Heading";
import {
  Container,
  InputWrapper,
  Label,
  StyledAsterik,
} from "./style";
import PhoneInput from 'react-phone-number-input'


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
  onChange: any;
  error?: string;
  disabled?: boolean;
  hasErrors?: (v: boolean) => void;
  maxLength?: number;
  pattern?:any;
}
const PhoneNumberInput = React.forwardRef<HTMLInputElement, IProps>(
  (props) => {
    const {
     
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
      placeHolder,
      value,
      types,
      onChange,
    } = props;

    // const [errorMessage, setErrorMessage] = useState("");
    // const setIsError = useSetRecoilState(ERROR_STATE);
    // const handleChange = (e: changeEvent) => {
    //   const value = e.target.value;
    //   const message = validateInput(type as string, value, required);
    //   if (message) {
    //     setErrorMessage(message);
    //     setIsError(true);
    //     hasErrors && hasErrors(true);
    //   } else {
    //     setErrorMessage("");
    //     setIsError(false);
    //     hasErrors && hasErrors(false);
    //   }
    //   onChange && onChange(e);
    //   //  hasErrors && hasErrors(false);
    // };



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
          {/* <Input
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
          />
          <InputIcon
            iconTop={iconTop}
            src={icon && icon}
            alt={iconText && iconText}
          /> */}
              <PhoneInput
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
    
      />
        </InputWrapper>
        {/* <ErrorText>{error || errorMessage}</ErrorText> */}
      </Container>
    );
  }
);

export default PhoneNumberInput;
