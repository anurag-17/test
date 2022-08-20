import React from "react";
import { StyledInputField } from "./InputFieldStyle";

interface InputFieldProps {
  placeholder: string;
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  width?: number;
  background?: string;
  borderColor?: string;
  color?: string,
  fontSize?: number,
  margin?: number,
  paddingVertical?: number,
  paddingHorizontal?: number,
  height?: number,
  focusBackgroundColor?: string,
  borderRadius?: number,
}

function InputField(props: InputFieldProps) {
  return <StyledInputField {...props} />;
}

export default InputField;

