import React from 'react'


import {
  StyledCheckBoxLabel,
  StyledCheckBoxWrapper,
  StyledInput,
} from "./style";


interface Props {
  padding?: number;
  id?: string;
  size?: number;
  label?: string | number;
  margin?: number;
  borderBottom?: boolean;
  fontWeight?: number | string;
  value?: string | number;
  onChange?:(e:any)=>void;
  checked?:boolean
}


const CheckBox = ({
  padding,
  id,
  size,
  label,
  margin,
  borderBottom,
  fontWeight,
  value,
  onChange,
  checked
}: Props) => {
  
  return (
    <>
      {!label && (
        <StyledInput
          size={size}
          id={id || "check"}
          padding={padding}
          type="checkbox"
          value={value}
        />
      )}
      {label && (
        <StyledCheckBoxWrapper
          borderBottom={borderBottom}
          padding={padding}
          margin={margin}
        >
          <StyledCheckBoxLabel htmlFor={id || "check"} fontWeight={fontWeight}>
            {label}
          </StyledCheckBoxLabel>

          <StyledInput
            size={size}
            id={id || "check"}
            padding={padding}
            type="checkbox"
            value={value}
            defaultChecked={checked}
            onChange={onChange}
          />
        </StyledCheckBoxWrapper>
      )}
    </>
  );
};

export default CheckBox;
