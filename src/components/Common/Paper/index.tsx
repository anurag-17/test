import React, { ReactNode } from "react";
import { StyledPaperWrapper } from "./style";

interface Props {
  children: ReactNode;
  padding?: number | string;
  margin?: number | string;
  mt?: number | string;
  mr?: number;
  ml?: number;
  mb?: number | string;
  width?: string | number;
  flexGrow?: string | number;
  order?: string | number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  bgColor?: string;
}
const Paper = ({
  children,
  padding,
  margin,
  mt,
  mb,
  ml,
  mr,
  width,
  flexGrow,
  order,
  pt,
  pb,
  pl,
  pr,
  bgColor,
}: Props) => {
  return (
    <StyledPaperWrapper
      padding={padding}
      margin={margin}
      mt={mt}
      ml={ml}
      mb={mb}
      mr={mr}
      width={width}
      flexGrow={flexGrow}
      order={order}
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
      bgColor={bgColor}
    >
      {children}
    </StyledPaperWrapper>
  );
};

export default Paper;
