import React from 'react'
import { StyledTypographyWrapper } from "./style";

interface Props {
  color?: string;
  textAlign?: string;
  fontSize?: string;
  children?: any;
  padding?: string;
  text?: string;
  resFont?: string;
  maxWidth?: string;
  fontWeight?: string | number;
  body1?: boolean;
  width?: number;
  lineHeight?: number;
  margin?: string;
  bgColor?: string;
  borderRadius?: number;
}

const Typography = ({
  color,
  textAlign,
  children,
  fontSize,
  fontWeight,
  padding,
  text,
  body1,
  maxWidth,
  width,
  lineHeight,
  resFont,
  margin,
  bgColor,
  borderRadius,
}: Props) => {
  return (
    <StyledTypographyWrapper
      padding={padding}
      color={color}
      textAlign={textAlign}
      fontSize={fontSize}
      fontWeight={fontWeight}
      body1={body1}
      maxWidth={maxWidth}
      width={width}
      lineHeight={lineHeight}
      resFont={resFont}
      margin={margin}
      bgColor={bgColor}
      borderRadius={borderRadius}
    >
      {children || text}
    </StyledTypographyWrapper>
  );
};

export default Typography;
