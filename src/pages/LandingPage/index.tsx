import React from "react";
import Button from "../../components/Common/button/Button";

import {
  ALL_AUDITIONS_JOBS,
  LANDING_INFO,
  LANDING_SUB_INFO,
  SEARCH_TALENTS,
  SELECT_GENDER,
  SELECT_LOCATION,
} from "../../constants";
import {
  HeroContainer,
  MainContainer,
  Form,
  Select,
  Input,
  SearchConatiner,
} from "./style";

const LandingPage: React.FC = (props) => {
  return (
    <MainContainer>
      <HeroContainer>
        <SearchConatiner>
          <h2>{SEARCH_TALENTS}</h2>
        </SearchConatiner>
        <SearchConatiner>
          <p>{LANDING_INFO}</p>
          <p>{LANDING_SUB_INFO}</p>
        </SearchConatiner>
        <Form>
          <Input type="text" placeholder="Enter Keywords..." />
          <Select>
            <option value="All">{ALL_AUDITIONS_JOBS}</option>
          </Select>
          <Select>
            <option value="All">{SELECT_LOCATION}</option>
          </Select>
          <Select>
            <option value="All">{SELECT_GENDER}</option>
          </Select>
          <Button title="Search Now" />
        </Form>
      </HeroContainer>
     
    </MainContainer>
  );
};

export default LandingPage;
