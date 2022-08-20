import React from 'react'
import { StyledButton } from "./ButtonStyle";

interface IProps {
  title: string;
  width?: number;
  background?: string;
  color?: string;
  fontSize?: number;
  margin?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  onClick?: () => void;
}

const Button = (props: IProps) => {
  return <StyledButton {...props}>{props.title}</StyledButton>;
};

export default Button;
