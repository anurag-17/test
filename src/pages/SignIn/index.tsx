import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/Common/AuthLayout";
import Card from "../../components/Common/Card";
import Button from "../../components/Common/CustomButton";
import Heading from "../../components/Common/Heading";
import InputWithLabel from "../../components/Common/InputWithLabel";
import Typography from "../../components/Common/Typography";
import useAuth from "../../lib/ReactQuery/Hooks/Auth";
import { LoginCredentials } from "../../store/InitialState/credentials";
import {
  StyledForgotPasswordText,
  StyledSignInWrapper,
  StyleSignInButtonWrapper,
} from "./style";
import { HEADING1, TITLE } from "../../constants/SignIn";
import { validate } from "../../utils/validations";
import { useRecoilValue } from "recoil";
import { ERROR_STATE } from "../../store/atoms/error";


const SignIn = () => {
  const { login, isLoading } = useAuth();

  const [credentials, setCredentials] = useState({ ...LoginCredentials });
  const [emptyFields, setEmptyFields] = useState(false);
  const [hasError, setHasError] = useState(false);

  const isError = useRecoilValue(ERROR_STATE)
 console.log("=======new===>",hasError)

  useEffect(() => {
    validate.isEmptyFormFiled(credentials)
      ? setEmptyFields(true)
      : setEmptyFields(false);
  }, [credentials]);


  const handleChange = (e: any) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };


  const handleLogin = () => {
    if(isError){  
      alert("Invalid Credentials")
    }else{
      login(credentials);
    }
  };

  return (
    <AuthLayout>
      <StyledSignInWrapper>
        <Card padding="8%">
          <Heading title={HEADING1} subTitle2 marginTop="0rem" />
          <Typography body1 text={TITLE} />
          <InputWithLabel
            margin="8% 0 0 0"
            label="Email Address"
            required
            id="email"
            type="email"
            onChange={handleChange}
            hasErrors={(v) => setHasError(v)}

          />
          <Link to={"/forgot-password"}>
            <StyledForgotPasswordText>
              forgot password?
            </StyledForgotPasswordText>
          </Link>
          <InputWithLabel
            type="password"
            margin="6% 0"
            label="password"
            id="password"
            required
            onChange={handleChange}
            hasErrors={(v) => setHasError(v)}
          />

          <StyleSignInButtonWrapper>
         
            <Button
              onClick={handleLogin}
              primary
              shadow
              size={"161px"}
              disabled={emptyFields || isLoading || hasError} 
            >
              {isLoading ? "Signing In ......" : "Sign In"}
            </Button>
          </StyleSignInButtonWrapper>
        </Card>
      </StyledSignInWrapper>
    </AuthLayout>
  );
};

export default SignIn;
