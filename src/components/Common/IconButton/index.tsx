import React from 'react'
import { StyledIconButtonImage, StyledIconButton } from "./style";

interface Props {
  icon: string;
  alt?: string;
  onClick?: any;
  size?: number; //wrapper size and background
  iconSize?: number; //icon/img siz online
  background?: string;
  opacity?: number;
  id?: string;
  onChange?: any;
}
const IconButton = ({
  icon,
  alt,
  onClick,
  size,
  iconSize,
  background,
  opacity,
  id,
  onChange
}: Props) => {
  return (
    <StyledIconButton
      size={size}
      onClick={onClick}
      background={background}
      opacity={opacity}
    >
      <StyledIconButtonImage 
      id={id}
      src={icon} alt={alt} iconSize={iconSize} 
      onChange={ onChange}
      />
    </StyledIconButton>
  );
};

export default IconButton;
