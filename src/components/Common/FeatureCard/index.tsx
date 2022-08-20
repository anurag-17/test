import React from "react";
import { Link } from "react-router-dom";
import {
  BUTTON_TEXT,
} from "../../../constants/FeatureCard";
import { COLORS } from "../../../lib/StyledComponents/themes";
import Heading from "../Heading";
import Typography from "../Typography";
import { ButtonWrapper, Container, ImageWrapper, Img } from "./style";

interface Iprops {
  image: string;
  title: string;
  subtitle: string;
  link: string
  
}

const FeatureCard: React.FC<Iprops> = ({image, title, subtitle, link}) => {
  return (
    <Container>
      <ImageWrapper>
        <Img src={image} alt="videologo" />
      </ImageWrapper>
      <Heading
        subTitle2
        title={title}
        fontSize="15px"
        color={COLORS.white}
        resFont="12px"
        marginTop="0rem"
      />
      <Typography
        text={subtitle}
        fontSize="15px"
        color={COLORS.white}
        resFont="12px"
      />
      <Link to={link} >
      <ButtonWrapper onClick={(e) => console.log("button clicked")}>
        <Typography
          text={BUTTON_TEXT}
          fontSize="15px"
          color={COLORS.white}
          resFont="12px"
        />
      </ButtonWrapper>
      </Link>
    </Container>
  );
};

export default FeatureCard;
