import React from "react";
import Heading from "../../../components/Common/Heading";

import AccountInformation from "./accountInformation";
import CompanyContactInfo from "./companyContactInfo";
import PersonaSetup from "./personaSetup";
import PersonalInformation from "./personalInformation";

import {
  Aside,
  Container,
  MainContent,
  MainContentHeader,
  MainHeader,
} from "./style";
import Talent from "./talent";
import PortfolioItems from "./portfolioItems";
import Card from "../../../components/Common/Card";
import { TITLE2, HEADING2 } from "../../../constants/AccountSetup";



const AccountSetup = () => {
  

  

 

  return (
    <Container>
      <MainHeader>
        <MainContentHeader>
          <Heading
            title={HEADING2}
            subTitle1
            fontWeight={600}
            marginTop="0rem"
          />
          <Heading title={TITLE2} marginTop="0rem" fontWeight={300} />
        </MainContentHeader>
      </MainHeader>

      <MainContent>
        <Card>
          <AccountInformation />
          <PersonalInformation />
          <CompanyContactInfo />
          <PortfolioItems />
        </Card>
      </MainContent>
      <Aside>
        <Card margin="0 0 5% 0">
          <PersonaSetup />
        </Card>
        <Card margin="5% 0 0 0">
          <Talent />
        </Card>
      </Aside>
    </Container>
  );
};

export default AccountSetup;
