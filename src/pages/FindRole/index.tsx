import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {
  BannerContainer,
  Form,
  Img,
  Input,
  Inputs,
  InputContainer,
  MainContainer,
  RoleAddressWrapper,
  RoleDetailWrapper,
  RolesCard,
  RolesCardWrapper,
  RolesContainer,
  SearchContainer,
  SubmitContainer,
  Wrapper,
} from "./style";
import Heading from "../../components/Common/Heading";
import Typography from "../../components/Common/Typography";
import {
  AUDITION_DESCRIPTION,
  ROLE_DESCRIPTION,
  SEARCH_ROLE,
} from "../../constants";
import { IMAGE_ROLE_THUMBNAIL } from "../../components/Assets/ImageConstant";
import { SEARCH_ICON } from "../../components/Assets/IconsConstant";
import {
  City,
  Find_Role,
  Gender,
  Language,
  MaximumAge,
  MinimumAge,
  PlaceHolder,
  ProjectType,
  Role_Found,
  State,
  TalentRequired,
  View_Details,
  genders,
  searchData,
} from "../../constants/FindRole";
import Picker from "../../components/Common/MultiplePicker";
import {SEARCHROLES } from "../../store/atoms/userAtoms";
import useFindRoles from "../../lib/ReactQuery/Hooks/Qurery/useFindRole";
import useGetAllRoles from "../../lib/ReactQuery/Hooks/Qurery//useGetRoles";
import Loader from "../../components/Common/Spinner/spinner";
import Pagination from "../../components/Common/Pagination";


const FindRole: React.FC = (props) => {

  const { getRole, isLoading, totalPages } =
    useFindRoles();
  const { loadingAllRoles } = useGetAllRoles();
  const [search, setSearch] = useState(searchData);
  const [page, setPage] = useState(0);

  const handleSearch = (e: any) => {
    e.preventDefault();
    getRole(search);
  };

  useEffect(()=> {
    getRole(search);

  }, [page, search,getRole]);


  const handlePageClick = (data: Record<string, any>)=>{
    const currentPage = data.selected;
    search.pageNumber = currentPage;
    setPage(currentPage);
  }

  const searchRole = useRecoilValue(SEARCHROLES);
  
  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSearch((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSelectItem = (item: any, id: any) => {
    if (id === "gender") {
      setSearch((prev: any) => ({
        ...prev,
        [id]: item.value,
      }));
      return;
    }
  };


  return (
    <>
    <MainContainer>
      <Wrapper>
        <BannerContainer>
          <Heading
            subTitle1={true}
            title={Find_Role}
            color="#FFFFFF"
            fontSize="60px"
            marginTop="0rem"
          />
          <Typography
            text={AUDITION_DESCRIPTION}
            maxWidth={"70ch"}
            fontSize="20px"
            color="#FFFFFF"
          />
        </BannerContainer>
        <SearchContainer>
          <Form>
            <InputContainer>
              <Input
                type="text"
                placeholder={PlaceHolder}
                name="projectName"
                onChange={handleChange}
              />
              <Inputs
                type="text"
                placeholder={ProjectType}
                name="projectType"
                onChange={handleChange}
              />
              <Inputs
                type="text"
                placeholder={TalentRequired}
                name="talentSkill"
                onChange={handleChange}
              />
              <Picker
                id="gender"
                types="gender"
                data={genders}
                label="Gender"
                bgColor={"#000"}
                width={"12%"}
                height={"2.7rem"}
                marginTop={"0rem"}
                color="white"
                marginLeft={"7rem"}
                selected={{
                  label: search.gender ? search.gender : Gender,
                  value: search.gender,
                }}
                selectItem={(item: any) => handleSelectItem(item, "gender")}
              />
            </InputContainer>
            <InputContainer>
              <Inputs
                type="text"
                placeholder={MinimumAge}
                name="minAge"
                onChange={handleChange}
              />
              <Inputs
                type="text"
                placeholder={MaximumAge}
                name="maxAge"
                onChange={handleChange}
              />
              <Inputs
                type="text"
                placeholder={City}
                name="location"
                onChange={handleChange}
              />
              <Inputs
                type="text"
                placeholder={State}
                name="state"
                onChange={handleChange}
              />
              <Inputs
                type="text"
                placeholder={Language}
                name="languages"
                onChange={handleChange}
              />
              <SubmitContainer
                onClick={(e) => handleSearch(e)}
                disabled={
                  search.gender === "" ||
                    search.languages === "" ||
                    search.projectName === "" ||
                    search.projectType === ""
                    ? true
                    : false
                }
              >
                {isLoading ? (
                  <Loader size="20" />
                ) : (
                  <img src={SEARCH_ICON} alt="searchicon" />
                )}
              </SubmitContainer>
            </InputContainer>
          </Form>
          <RolesContainer>
            <Heading
              subTitle2={true}
              title={`${searchRole.length} ${Role_Found}`}
              marginTop="0rem"
            />
            <Typography text={SEARCH_ROLE} maxWidth={"105ch"} fontSize="16px" />
          </RolesContainer>

          {!loadingAllRoles || isLoading ? (
            <RolesCardWrapper>
              <>
                {searchRole?.map((items: any, index: any) => (
                  <RolesCard key={index}>
                    <Img src={IMAGE_ROLE_THUMBNAIL} />
                    <RoleDetailWrapper>
                      <Heading
                        subTitle2={true}
                        title={items?.projectName}
                        marginTop="0rem"
                      />
                      <Typography
                        text={items?.projectDescription || ROLE_DESCRIPTION}
                        fontSize="15px"
                      />
                      <RoleAddressWrapper>
                        <Typography
                          text={`${items?.city} ${items?.state}, ${items?.country}`}
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
                      </RoleAddressWrapper>
                    </RoleDetailWrapper>
                  </RolesCard>
                ))}
              </>
            </RolesCardWrapper>
          ) : (
            <Loader />
          )}
        </SearchContainer>
      </Wrapper>
    </MainContainer>
    <Pagination pageCount={totalPages}  handlePageClick={(data)=>handlePageClick(data)}/>

    </>
  );
};

export default FindRole;
