import React, { ReactNode } from "react";
import { StyledGridWrapper } from "./style";

interface Props {
  item?: boolean;
  children: ReactNode;
  justifyContent?: string;
  alignItems?: string;
  gap?: number;
  direction?: string;
  column?: boolean;
  row?: boolean;
  borderBottom?: boolean | string;
  padding?: string;
  pt?: number;
  pr?: number;
  pl?: number;
  pb?: number;
  mt?: number;
  mr?: number;
  ml?: number;
  mb?: number;
  margin?: number | string;
  width?: number;
}

const Grid = ({
  item,
  children,
  justifyContent,
  alignItems,
  gap,
  direction,
  column,
  row,
  borderBottom,
  padding,
  margin,
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,
  width,
}: Props) => {
  return (
    <StyledGridWrapper
      item={item}
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      direction={direction}
      column={column}
      borderBottom={borderBottom}
      padding={padding}
      pt={pt}
      pl={pl}
      pb={pb}
      pr={pr}
      margin={margin}
      mt={mt}
      ml={ml}
      mb={mb}
      mr={mr}
      row={row}
      width={width}
    >
      {children}
    </StyledGridWrapper>
  );
};

export default Grid;
