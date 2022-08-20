import React, { ReactNode } from 'react'
import { SubTitle, Title } from "./style";

interface Props {
  subTitle1?: boolean;
  subTitle2?: boolean;
  title?: string | number | ReactNode;
  fontSize?: string;
  color?: string;
  fontWeight?: string | number;
  display?: string;
  lineHeight?: string;
  marginTop?: string | any
  resFont?:string | any;
  headline?:string | any
  marginLeft?:string
}
const Heading = ({ ...p }: Props) => {

  return (
    <>
      {p.subTitle1 ? (
        <Title
          fontSize={p.fontSize}
          color={p.color}
          fontWeight={p.fontWeight}
          display={p.display}
          lineHeight={p.lineHeight}
          marginTop={p.marginTop}
          marginLeft={p.marginLeft}


        >
          {p.title}
        </Title>
      ) : (
        <SubTitle
          fontSize={p.fontSize}
          color={p.color}
          fontWeight={p.fontWeight}
          display={p.display}
          lineHeight={p.lineHeight}
          marginTop={p.marginTop}
          resFont={p.resFont}
          marginLeft={p.marginLeft}
        >
          {p.title}
        </SubTitle>
      )}
    </>
  );
};

export default Heading;
