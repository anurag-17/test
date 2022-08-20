import React from 'react'
import Card from "../../../components/Common/Card";
import Button from "../../../components/Common/CustomButton";
import Heading from "../../../components/Common/Heading";
import InputWithLabel from "../../../components/Common/InputWithLabel";
import Typography from "../../../components/Common/Typography";
import { StyledSignInWrapper, StyleSignInButtonWrapper } from "./style";
import { TITLE7, HEADING7 } from "../../../constants/AccountSetup";
import Select from "../../../components/Common/CustomSelect";
// import { USER_PERSONA } from "../../../constants/CreateAccount";
import { changeEvent } from "../../../utils/types";
import { useEffect, useState } from "react";
import { createAccountCredentials } from "../../../store/InitialState/credentials";
import useAuth from "../../../lib/ReactQuery/Hooks/Auth";
import { validate } from "../../../utils/validations";
import useGetUserPersona from "../../../lib/ReactQuery/Hooks/Qurery/useGetUserPersona";

const CreateAccount = () => {
  const { createAccount, isCreatingAccount } = useAuth();
  const [accountCredentials, setAccountCredentials] = useState(
    createAccountCredentials
  );
  const [emptyFields, setEmptyFields] = useState(false);

  const { userPersonas, loadingPersonas, personaError } = useGetUserPersona();

  useEffect(() => {
    validate.isEmptyFormFiled(accountCredentials)
      ? setEmptyFields(true)
      : setEmptyFields(false);
  }, [accountCredentials]);

  const handleChange = (e: changeEvent) => {
    e.preventDefault();
    setAccountCredentials({
      ...accountCredentials,
      [e.target.id]: e.target.value,
    });
  };

  const handleSumit = () => {
  
    createAccount(accountCredentials);
  };



  return (
    <StyledSignInWrapper>
      <Card padding="8%">
        <Heading title={HEADING7} subTitle2 marginTop="0rem" />
        <Typography body1 text={TITLE7} />
        <Select
          listItem={userPersonas}
          error={personaError || ""}
          margin="8% 0 0% 0"
          label="Sign Up As"
          placeHolder={
            loadingPersonas ? "loading Personas..." : "Select Persona"
          }
          required
          id="userPersona"
          onChange={handleChange}
        />
        <InputWithLabel
          margin="5% 0 0 0"
          label="Email Address"
          required
          id="email"
          onChange={handleChange}
        />

        <InputWithLabel
          type="password"
          margin="5% 0"
          label="password"
          id="password"
          onChange={handleChange}
          required
        />

        <InputWithLabel
          type="password"
          margin="5% 0"
          label="confirm password"
          id="confirmPassword"
          onChange={handleChange}
          required
        />
        <StyleSignInButtonWrapper>
       

          <Button
            disabled={isCreatingAccount || emptyFields}
            primary
            shadow
            size={"161px"}
            onClick={handleSumit}
          >
            {isCreatingAccount ? "Creating Account..." : "Create Account"}
          </Button>
        </StyleSignInButtonWrapper>
      </Card>
    </StyledSignInWrapper>
  );
};

export default CreateAccount;
