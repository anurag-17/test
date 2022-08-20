import React from 'react'
import { ReactNode } from "react";
import { Section } from "./style";

interface Props {
  children: ReactNode;
  padding?: number | string;
  margin?: number | string;
  width?: string | number;
  height?: string | number;
  position?: string;
  flexGrow?: string | number;
  order?: string | number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  widthMobile?: boolean | number | string;
}
const Card = ({
  children,
  padding,
  margin,
  width,
  height,
  position,
  flexGrow,
  order,
  pt,
  pb,
  pl,
  pr,
  widthMobile,
}: Props) => {
  return (
    <Section
      padding={padding}
      margin={margin}
      width={width}
      height={height}
      position={position}
      flexGrow={flexGrow}
      order={order}
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
      widthMobile={widthMobile}
    >
      {children}
    </Section>
  );
};

export default Card;
