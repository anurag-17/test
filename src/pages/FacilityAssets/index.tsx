import React from "react";
import {
  BannerContainer,
  Form,
  Img,
  InputContainer,
  MainContainer,
  FacilityAddressWrapper,
  RoleDetailWrapper,
  FacilityCard,
  FacilityCardWrapper,
  FacilityContainer,
  SearchContainer,
  Select,
  SubmitContainer,
  Wrapper,
} from "./style";
import Heading from "../../components/Common/Heading";
import Typography from "../../components/Common/Typography";
import {
  ROLE_ADDRESS,
  ROLE_DESCRIPTION,
  SEARCH_FACILITY,
  FACILITY_DESCRIPTION,
} from "../../constants";
import { IMAGE_ROLE_THUMBNAIL } from "../../components/Assets/ImageConstant";
import { SEARCH_ICON } from "../../components/Assets/IconsConstant";
import {
  City,
  Facility_assets,
  Quantity,
  SearchFacility,
  AssetType,
  Facility_Found,
  Title_Name,
  State,
  View_Details,
} from "../../constants/FacilityAssets";

const FindRole: React.FC = (props) => {
  return (
    <MainContainer>
      <Wrapper>
        <BannerContainer>
          <Heading
            subTitle1={true}
            title={Facility_assets}
            color="#FFFFFF"
            fontSize="60px"
            marginTop="0em"
          />
          <Typography
            text={FACILITY_DESCRIPTION}
            maxWidth={"130ch"}
            fontSize="18px"
            color="#FFFFFF"
          />
        </BannerContainer>
        <SearchContainer>
          <Form>
            <InputContainer>
              <Select>
                <option value="All">{SearchFacility}</option>
              </Select>
              <Select>
                <option value="All">{AssetType}</option>
              </Select>
              <Select>
                <option value="All">{Quantity}</option>
              </Select>
              <Select>
                <option value="All">{City}</option>
              </Select>
              <Select>
                <option value="All">{State}</option>
              </Select>
              <SubmitContainer>
                <img src={SEARCH_ICON} alt="searchicon" />
              </SubmitContainer>
            </InputContainer>
          </Form>
          <FacilityContainer>
            <Heading subTitle2={true} title={Facility_Found} marginTop="0rem" />
            <Typography text={SEARCH_FACILITY} maxWidth={"45ch"} fontSize="14px" />
          </FacilityContainer>
          <FacilityCardWrapper>
            <FacilityCard>
              <Img src={IMAGE_ROLE_THUMBNAIL} />
              <RoleDetailWrapper>
                <Heading subTitle2={true} title={Title_Name} marginTop="0rem" />
                <Typography text={ROLE_DESCRIPTION} fontSize="15px" />
                <FacilityAddressWrapper>
                  <Typography
                    text={ROLE_ADDRESS}
                    fontSize="14px"
                    fontWeight={600}
                  />
                  <span>
                    <Typography
                      text={View_Details}
                      fontSize="14px"
                      fontWeight={600}
                      color="#C92A2A;"
                    />
                  </span>
                </FacilityAddressWrapper>
              </RoleDetailWrapper>
            </FacilityCard>
            <FacilityCard>
              <Img src={IMAGE_ROLE_THUMBNAIL} />
              <RoleDetailWrapper>
                <Heading subTitle2={true} title={Title_Name} marginTop="0rem" />
                <Typography text={ROLE_DESCRIPTION} fontSize="15px" />
                <FacilityAddressWrapper>
                  <Typography
                    text={ROLE_ADDRESS}
                    fontSize="14px"
                    fontWeight={600}
                  />
                  <span>
                    <Typography
                      text={View_Details}
                      fontSize="14px"
                      fontWeight={600}
                      color="#C92A2A;"
                    />
                  </span>
                </FacilityAddressWrapper>
              </RoleDetailWrapper>
            </FacilityCard>
            <FacilityCard>
              <Img src={IMAGE_ROLE_THUMBNAIL} />
              <RoleDetailWrapper>
                <Heading subTitle2={true} title={Title_Name} marginTop="0rem" />
                <Typography text={ROLE_DESCRIPTION} fontSize="15px" />
                <FacilityAddressWrapper>
                  <Typography
                    text={ROLE_ADDRESS}
                    fontSize="14px"
                    fontWeight={600}
                  />
                  <span>
                    <Typography
                      text={View_Details}
                      fontSize="14px"
                      fontWeight={600}
                      color="#C92A2A;"
                    />
                  </span>
                </FacilityAddressWrapper>
              </RoleDetailWrapper>
            </FacilityCard>
            <FacilityCard>
              <Img src={IMAGE_ROLE_THUMBNAIL} />
              <RoleDetailWrapper>
                <Heading subTitle2={true} title={Title_Name} marginTop="0rem" />
                <Typography text={ROLE_DESCRIPTION} fontSize="15px" />
                <FacilityAddressWrapper>
                  <Typography
                    text={ROLE_ADDRESS}
                    fontSize="14px"
                    fontWeight={600}
                  />
                  <span>
                    <Typography
                      text={View_Details}
                      fontSize="14px"
                      fontWeight={600}
                      color="#C92A2A;"
                    />
                  </span>
                </FacilityAddressWrapper>
              </RoleDetailWrapper>
            </FacilityCard>
          </FacilityCardWrapper>
        </SearchContainer>
      </Wrapper>
    </MainContainer>
  );
};

export default FindRole;
