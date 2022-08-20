import React from 'react'
import Card from "../../components/Common/Card";
import Button from "../../components/Common/CustomButton";
import Heading from "../../components/Common/Heading";
import InputWithLabel from "../../components/Common/InputWithLabel";
import Typography from "../../components/Common/Typography";
import { StyledSignInWrapper, StyleSignInButtonWrapper } from "./style";
import { HEADING1, TITLE } from "../../constants/ResetPassword";
import useAuth from "../../lib/ReactQuery/Hooks/Auth";
import { useEffect, useState } from "react";
import { resetPasswordCredentials } from "../../store/InitialState/credentials";
import { changeEvent } from "../../utils/types";
import { validate } from "../../utils/validations";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState(resetPasswordCredentials);
  const [isEmptyFields, setIsEmptyFields] = useState(false);

  useEffect(() => {
    validate.isEmptyFormFiled(newPassword)
      ? setIsEmptyFields(true)
      : setIsEmptyFields(false);
  }, [newPassword]);

  const { resetPassword, isResetting } = useAuth();

  const handleChange = (e: changeEvent) => {
    e.preventDefault();
    setNewPassword({ ...newPassword, [e.target.id]: e.target.value });
  };

  const handleReset = () => {
    const password = newPassword.newPassword;
    if (newPassword.newPassword === newPassword.confirmNewPassword) {
      resetPassword({ 
        oldPassword: newPassword.oldPassword,
        newPassword: newPassword.newPassword,
      confirmNewPassword: newPassword.confirmNewPassword,
      });
      console.log("new", { newPassword: password });
    } else {
      toast.error("Passwords do not match!");
    }
  };

  return (
    <StyledSignInWrapper>
      <Card padding="8%">
        <Heading title={HEADING1} subTitle2 marginTop="0rem" />
        <Typography body1 text={TITLE} />
        <InputWithLabel
          type="password"
          margin="5% 0 0 0"
          label="Current Password"
          id="oldPassword"
          required
          onChange={handleChange}
        />
        <InputWithLabel
          type="password"
          margin="5% 0 0 0"
          label="New Password"
          id="newPassword"
          required
          onChange={handleChange}
        />
        <InputWithLabel
          type="password"
          margin="5% 0 0 0"
          label="Confirm New Password"
          id="confirmNewPassword"
          onChange={handleChange}
          required
        />

        <StyleSignInButtonWrapper>
          <Button
            onClick={handleReset}
            disabled={isResetting || isEmptyFields}
            primary
            shadow
            size={"100%"}
            sizeMd={"100%"}
          >
            {isResetting ? "Resetting ..." : "Reset Password"}
          </Button>
        </StyleSignInButtonWrapper>
      </Card>
    </StyledSignInWrapper>
  );
};

export default ResetPassword;
