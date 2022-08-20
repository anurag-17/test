import React from 'react'
import Card from "../../components/Common/Card";
import ContentLayout from "../../components/Common/Layout/ContentLayout";
import { CONTACT_USER } from "../../Navigation/routes";
import {
  USER_PROFILE_SUBTITLE,
  USER_PROFILE_TITLE,
} from "../../constants/UserProfile";
import AboutUser from "./aboutUser";
import AccountInformation from "./accountInformation";
import PortfolioItems from "./portfolioItems";
import { StyledUserProfileWrapper } from "./style";



const UserProfile = () => {
  return (
    <ContentLayout
      title={USER_PROFILE_TITLE}
      subtitle={USER_PROFILE_SUBTITLE}
      button="CONTACT"
      buttonLink={CONTACT_USER}
    >
      <StyledUserProfileWrapper>
        <Card width={"30%"} widthMobile padding="2.5% 0">
          <AboutUser />
        </Card>
        <Card width={"70%"} widthMobile padding="2.5% 18% 2.5%2.5%">
          <AccountInformation />
          <PortfolioItems />
        </Card>
      </StyledUserProfileWrapper>
    </ContentLayout>
  );
};

export default UserProfile;
