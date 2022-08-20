import React from 'react'
import Card from "../../components/Common/Card";
import Button from "../../components/Common/CustomButton";
import Heading from "../../components/Common/Heading";
import InputWithLabel from "../../components/Common/InputWithLabel";
import Typography from "../../components/Common/Typography";
import { COLORS } from "../../lib/StyledComponents/themes";
import { StyledSignInWrapper, StyleSignInButtonWrapper } from "./style";
import { TITLE, HEADING } from "../../constants/ForgetPassword";
import useAuth from "../../lib/ReactQuery/Hooks/Auth";
import { useEffect, useState } from "react";
import { forgotPasswordCredentials } from "../../store/InitialState/credentials";
import { changeEvent } from "../../utils/types";
import { validate } from "../../utils/validations";
import { SIGN_IN } from "../../Navigation/routes";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [isEmptyField, setIsEmptyField] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState(
    forgotPasswordCredentials
  );

  const { forgotPassword, isSendingForgotPasswordEmail } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    validate.isEmptyFormFiled(forgotPasswordEmail)
      ? setIsEmptyField(true)
      : setIsEmptyField(false);
  }, [forgotPasswordEmail]);

  const handleNavigate = () => {
    navigate(SIGN_IN);
  };

  const handleChange = (e: changeEvent) => {
    setForgotPasswordEmail({
      ...forgotPasswordEmail,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = () => {
    !validate.isValidNotEmail(forgotPasswordEmail.email) &&
      forgotPassword(forgotPasswordEmail);
  };
  return (
    <StyledSignInWrapper>
      <Card padding="8%">
        <Heading title={TITLE} subTitle2 marginTop="0rem" />
        <Typography body1 text={HEADING} />
        <InputWithLabel
          onChange={handleChange}
          id="email"
          margin="8% 0 0 0"
          label="Email Address"
          required
        />

        <StyleSignInButtonWrapper>
          <Button size={"161px"} color={COLORS.grey} onClick={handleNavigate}>
            Sign In
          </Button>
          <Button
            disabled={isSendingForgotPasswordEmail || isEmptyField}
            primary
            shadow
            size={"161px"}
            onClick={handleSubmit}
          >
            {isSendingForgotPasswordEmail ? "Sending Mail..." : "Send Mail"}
          </Button>
        </StyleSignInButtonWrapper>
      </Card>
    </StyledSignInWrapper>
  );
};

export default ForgotPassword;
