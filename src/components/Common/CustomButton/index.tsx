import React, { ReactNode } from 'react';
import { COLORS } from '../../../lib/StyledComponents/themes';
import { StyledPrimaryButton, StyledSecondaryButton } from './style';

interface Props {
  children: string | ReactNode;
  bgColor?: string;
  primary?: boolean;
  small?: boolean;
  large?: boolean;
  medium?: boolean;
  size?: string;
  shadow?: boolean;
  secondary?: boolean;
  padding?: string;
  margin?: string;
  bottom?: string | number;
  fontSize?: number;
  color?: string;
  sizeMd?: string;
  position?: string;
  marginLeft?: string;
  borderRadius?: number;
  onClick?: any;
  disabled?: boolean;
}

const Button = ({
  children,
  bgColor,
  primary,
  bottom,
  small,
  large,
  medium,
  size,
  shadow,
  secondary,
  padding,
  margin,
  fontSize,
  color,
  sizeMd,
  marginLeft,
  position,
  borderRadius,
  onClick,
  disabled,
}: Props) => {
  return (
    <>
      {primary && (
        <StyledPrimaryButton
          small={small}
          large={large}
          medium={medium}
          size={size}
          bottom={bottom}
          bgColor={primary ? COLORS.primary : bgColor}
          shadow={shadow}
          secondary={secondary}
          padding={padding}
          margin={margin}
          marginLeft={marginLeft}
          fontSize={fontSize}
          sizeMd={sizeMd}
          position={position}
          borderRadius={borderRadius}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </StyledPrimaryButton>
      )}

      {!primary && (
        <StyledSecondaryButton
          bgColor={bgColor}
          small={small}
          large={large}
          medium={medium}
          size={size}
          sizeMd={sizeMd}
          shadow={shadow}
          secondary={secondary}
          padding={padding}
          margin={margin}
          fontSize={fontSize}
          color={color}
          position={position}
          borderRadius={borderRadius}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </StyledSecondaryButton>
      )}
    </>
  );
};

export default Button;
