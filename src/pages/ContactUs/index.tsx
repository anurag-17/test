import React, { useEffect, useState } from "react";
// import reCAPTCHA from "react-google-recaptcha";
import AuthLayout from "../../components/Common/AuthLayout";
import Card from "../../components/Common/Card";
import Button from "../../components/Common/CustomButton";
import Heading from "../../components/Common/Heading";
import Typography from "../../components/Common/Typography";
import InputWithLabel from "../../components/Common/InputWithLabel";
import useContactUs from "../../lib/ReactQuery/Hooks/Mutations/useContactUs";
import { ContactUsPayload } from "../../store/InitialState/store";
import {
  StyledSignInWrapper,
  StyleSignInButtonWrapper,
} from "./style";
import { validate } from "../../utils/validations";
import { useRecoilValue } from "recoil";
import { ERROR_STATE } from "../../store/atoms/error";
import { CONTACT_US_TITLE } from "../../constants/ContactUs";
import { SUBTITLE } from "../../constants/ContactUs";
import TextArea from "../../components/Common/TextArea";


const ContactUs = () => {
  const { contactUs, isLoading } = useContactUs();

  const [contactUsPayload, setContactUsPayload] = useState({ ...ContactUsPayload });
  const [emptyFields, setEmptyFields] = useState(false);
  const [hasError, setHasError] = useState(false);

  const isError = useRecoilValue(ERROR_STATE)

  useEffect(() => {
    validate.isEmptyFormFiled(contactUsPayload)
      ? setEmptyFields(true)
      : setEmptyFields(false);
  }, [contactUsPayload]);


  const handleChange = (e: any) => {
    e.preventDefault();
    setContactUsPayload({ ...contactUsPayload, [e.target.id]: e.target.value });
  };


  const handleLogin = () => {
    if(isError){  
      alert("Invalid Information Provided")
    }else{
      contactUs(contactUsPayload);
    }
  };

  return (
    <AuthLayout>
      <StyledSignInWrapper>
        <Card padding="8%">
          <Heading title={CONTACT_US_TITLE} subTitle2 marginTop="0rem" />
          <Typography body1 text={SUBTITLE} />
          <InputWithLabel
            margin="8% 0 0 0"
            label="Name"
            required
            id="contactorName"
            type="text"
            onChange={handleChange}
            hasErrors={(v) => setHasError(v)}

          />
          <InputWithLabel
            margin="8% 0 0 0"
            label="Email Address"
            required
            id="contactorEmail"
            type="email"
            onChange={handleChange}
            hasErrors={(v) => setHasError(v)}

          />
          <TextArea
          cols={30}
          rows={4}
          label={"Message"}
          id="message"
          placeHolder="Your Message"
          onChange={handleChange}
        />
          <StyleSignInButtonWrapper>
          {/* <reCAPTCHA /> */}
            
         
            <Button
              onClick={handleLogin}
              primary
              shadow
              size={"161px"}
              disabled={emptyFields || isLoading || hasError} 
            >
              {isLoading ? "Submitting...." : "Submit"}
            </Button>
          </StyleSignInButtonWrapper>
        </Card>
      </StyledSignInWrapper>
    </AuthLayout>
  );
};

export default ContactUs;
