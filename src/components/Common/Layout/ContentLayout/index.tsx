import React, { ReactNode } from "react";

import { Link } from "react-router-dom";

import Button from "../../CustomButton";
import Heading from "../../Heading";

import {
  Container,
  MainContent,
  MainContentHeader,
  MainHeader,
  StyledContentButtonWrapper,
} from "./style";

interface Props {
  title: string;
  subtitle?: string;
  button?: string;
  children?: ReactNode;
  backgroundImageTop?: boolean;
  buttonLink?: any;
  buttonSize?: number;
  padding?: string;
  pt?: number;
  pr?: number;
  pl?: number;
  pb?: number;
  mt?: number;
  mr?: number;
  ml?: number;
  mb?: number;
  centerText?: boolean;
  titleColor?: string;
  subtitleColor?: string;
  fontWeightTitle?: string | number;
  fontWeightSubTitle?: string | number;
  fontSizeTitle?: string;
  fontSizeSubTitle?: string;
  widthMobile?: number | boolean;
  width?: number;
  flexBasisHeader?: number;
  marginHeader?: string;
}

const ContentLayout = ({
  title,
  subtitle,
  button,
  children,
  buttonLink,
  buttonSize,
  backgroundImageTop,
  padding,
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,
  centerText,
  titleColor,
  subtitleColor,
  fontWeightTitle,
  fontWeightSubTitle,
  fontSizeTitle,
  fontSizeSubTitle,
  widthMobile,
  width,
  flexBasisHeader,
  marginHeader,
}: Props) => {
  return (
    <Container
      padding={padding}
      pt={pt}
      pl={pl}
      pb={pb}
      pr={pr}
      mt={mt}
      ml={ml}
      mb={mb}
      mr={mr}
      backgroundImageTop={backgroundImageTop}
      widthMobile={widthMobile}
      width={width}
    >
      <MainHeader
        backgroundImageTop={backgroundImageTop}
        centerText={centerText}
        flexBasisHeader={flexBasisHeader}
        marginHeader={marginHeader}
      >
        <MainContentHeader>
          <Heading
            color={titleColor}
            title={title}
            subTitle1
            fontSize={fontSizeTitle}
            fontWeight={fontWeightTitle || 600}
            marginTop="0rem"
          />
          <Heading
            color={subtitleColor || titleColor}
            title={subtitle}
            fontSize={fontSizeSubTitle}
            fontWeight={fontWeightSubTitle || 300}
            marginTop="0rem"
          />
        </MainContentHeader>

        {button && (
          <StyledContentButtonWrapper buttonSize={buttonSize}>
            <Link to={buttonLink}>
              <Button primary shadow size="100%">
                {button}
              </Button>
            </Link>
          </StyledContentButtonWrapper>
        )}
      </MainHeader>

      <MainContent>{children}</MainContent>
    </Container>
  );
};

export default ContentLayout;
