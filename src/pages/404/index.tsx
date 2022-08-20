import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Common/CustomButton";
import Heading from "../../components/Common/Heading";
import Typography from "../../components/Common/Typography";
import { TITLE,SUBTITLE1, SUBTITLE2, ERROR_TEXT, BUTTON } from "../../constants/Error404";
import { Container, Overlay } from "./style";


const Error404 = () => {
  return (
    <Container>
      <Overlay/>
<div style={{
  zIndex: "100",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}}>

          <Heading title={TITLE} marginTop="0rem" fontSize="2.5rem" color="white"/>
          <Typography body1 text={SUBTITLE1} color="white"/>
          <Typography body1 text={SUBTITLE2} color="white"/>
            <Link to="/">
            <Button
              primary
              size="large"
              fontSize={0.7}
              padding="1rem 2.5rem"
              borderRadius={5}
              margin="1rem 0 0 0"
            >
              {BUTTON}
            </Button>
            </Link>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}>
              <Typography body1 text={"|"} color="#C92A2A" fontSize="35px" margin="0 5px 0 0"/>
              <Typography body1 text={ERROR_TEXT} color="white" fontSize="35px"/>
            </div>
          </div>
    </Container>
  );
};

export default Error404;
