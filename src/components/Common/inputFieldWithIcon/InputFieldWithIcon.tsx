import React from "react";
import { StyledInputFieldWithIcon } from "./InputFieldWithIconStyle";

interface InputFieldWithIconProps {
  placeholder: string;
  listItem: string[];
  borderColor: string;
  width: number;
  fontSize?: number;
  margin?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  height?: number;
  focusBackgroundColor?: string;
  borderRadius?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

function InputFieldWithIcon(props: InputFieldWithIconProps) {
  return (
    <>
      <label>
        <StyledInputFieldWithIcon list="listItem" name="item" {...props} />
      </label>
      <datalist id="listItem">
        {props.listItem.map((item, index) => (
          <option key={index} value={item} />
        ))}
      </datalist>
    </>
  );
}

export default InputFieldWithIcon;
