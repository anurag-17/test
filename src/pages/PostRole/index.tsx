import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from "axios";
import Card from "../../components/Common/Card";
import Button from "../../components/Common/CustomButton";
import Heading from "../../components/Common/Heading";
import InputWithLabel from "../../components/Common/InputWithLabel";
import TextArea from "../../components/Common/TextArea";
import Typography from "../../components/Common/Typography";
import {
  CREATING_ROLE,
  HEADING,
  POST_ROLE,
  TITLE,
  DATA,
  LABEL_TYPE,
  OTHER,
  STATE,
  CITY,
  COUNTRY,
  POSTALZIPCODE,
  DESCRIPTION,
  MIN_AGE,
  MAX_AGE
} from "../../constants/PostRole";
import { PostRoleCredentials } from "../../store/InitialState/credentials";
import useAuth from "../../lib/ReactQuery/Hooks/Auth";
import { CAST_CALLS } from "../../Navigation/routes";
import Picker from "../../components/Common/MultiplePicker";
import {
  PROJECTS_TYPE,
  GENDER,
  GENDER_TYPE,
  GENDER_LABEL,
  LABELS,
} from "../../constants/CastCalls";

import {
  StyledBorderTop,
  StyledPostRoleForm,
  StyledPostRoleWrapper,
  StylePostRoleButton,
  DatePickerContainer,
  Label,
  StyledAsterik,
  Container,
} from "./style";
import { validate } from "../../utils/validations";
import { COLORS } from "../../lib/StyledComponents/themes";
import { ARROW_DOWN_PNG } from "../../components/Assets/IconsConstant";
import CustomMultiSelect from "../../components/Common/CustomMultiSelect";
import { convertToArrayOfObject } from "../../utils/helpers";
import { HEADERS } from "../../lib/Config";
import { useRecoilValue } from "recoil";
import { USER } from "../../store/atoms";


const PostRole = () => {
  const talents = useRecoilValue(USER);

  const oldRoles = convertToArrayOfObject(
    talents?.roles.map((genres: any) => genres.roleTitle)
  );




  
  const navigate = useNavigate();
  const { createPost, isCreatingPost } = useAuth();
  const [credentials, setCredentials] = useState(PostRoleCredentials);

  const [language, setLanguage] = useState([])
  const [roles, setRoles] = useState(oldRoles);
  const [, setEmptyFields] = useState(false);
  const [postRole, setPostRole] = useState<any>(DATA);
  const [startDate, setStartDate] = useState(new Date());
  const [allRoles, setAllRoles] = useState([]);
  const [allLanguages, setAllLanguages] = useState([]);
  const [ProjectType, setProjectType] = useState([]);
  console.log('allLanguages', allLanguages)
const {
    projectName,
    projectType,
    projectDescription,
    gender,
    minAge,
    maxAge,
    postExpiryDate,
    languages,
    state,
    city,
    country,
    talentSkill,
  } = credentials


  useEffect(() => {
    validate.isEmptyFormFiled({
      projectName,
      projectType,
      projectDescription,
      gender,
      minAge,
      maxAge,
      postExpiryDate,
      languages,
      state,
      city,
      country,
      talentSkill,
    })
      ? setEmptyFields(true)
      : setEmptyFields(false);
      // eslint-disable-next-line 
  }, [credentials]);

  useEffect(()=>{
    const fetchLanguages = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/language/`,
      );
      const languages = response.data.map((language: any) => {
        return language.languageName;
      });
      const formatLanguages = convertToArrayOfObject(languages)
      setAllLanguages(formatLanguages);
    }
    fetchLanguages()
  },[])

  useEffect(()=>{

    const fetchRoles = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/get-all-roles/`, HEADERS
      );
      const roles = response.data.content.map((role: any) => {
        return {
          label: role.roleTitle,
          value: role.roleTitle
        }
      });
      setAllRoles(roles);
    }

    const getProjectTypes = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/get-project-types`, HEADERS
      );
      const types = response.data.payload.data.map(({ name }: { name: string }) => ({ value: name, label: name }))
      setProjectType(types);
    };

    fetchRoles();
    getProjectTypes()
  },[])



  const handleRoleChange = (value: any) => {
    setRoles(value);
    const newRoles = [];
    for (let i in value) {
      newRoles.push({ roleTitle: value[i].value });
    }
    setUserState({
      ...useState, roles: newRoles });
  };

  

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCredentials((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSpokenLanguage = (value: any) => {
    // setCredentials({
    //   ...credentials,  languages: e.target.value });

      
    setLanguage(value);
    const newGenre: string[] = [];
    for (let i in value) {
      newGenre.push(value[i].value);
    }

    setCredentials({
      ...credentials,
      languages: [...newGenre],
    });
  };

  const convertDate = () => {
    const date = new Date(startDate).toISOString().split("T")[0];

    return date;
  };

  const date = convertDate();
  credentials.projectType = postRole.projectType;
  credentials.postExpiryDate = date;
  credentials.maxAge = Number(postRole.maxAge);
  credentials.minAge = Number(postRole.minAge);
  credentials.gender = postRole.gender;
  const handleSumit = () => {
    createPost(credentials);
    setTimeout(() => {
      handleNavigate();
    }, 2000);
  };

  const handleNavigate = () => {
    navigate(CAST_CALLS);
  };

  const handleSelectItem = (item: any, id: any) => {
    if (id === "projectType") {
      setPostRole((prev: any) => ({
        ...prev,
        [id]: item.value,
      }));
      return;
    } else if (id === "gender") {
      setPostRole((prev: any) => ({
        ...prev,
        [id]: item.value,
      }));
      return;
    } else if (id === "minAge") {
      setPostRole((prev: any) => ({
        ...prev,
        [id]: item.value,
      }));
      return;
    } else if (id === "maxAge") {
      setPostRole((prev: any) => ({
        ...prev,
        [id]: item.value,
      }));
      return;
    }
  };

  return (
    <StyledPostRoleWrapper>
      <StyledBorderTop />
      <Card>
        <Heading subTitle2 title={HEADING} marginTop="0rem" />
        <Typography text={TITLE} fontSize="1em" />
        <StyledPostRoleForm>
          <InputWithLabel
            width={"48.9%"}
            label="Project Name"
            required
            name="projectName"
            placeHolder="Enter project name..."
            fontWeightPlaceHolder={300}
            onChange={handleChange}
          />
          <Container>
            <Label>
              <Heading
                title={LABEL_TYPE}
                color={COLORS.grey}
                fontSize="0.725em"
                fontWeight={600}
                marginTop="0rem"
              />
              {"required" && <StyledAsterik>*</StyledAsterik>}
            </Label>
            <Picker
              id="projectType"
              types="postrole"
              data={ProjectType}
              bgColor={"#fff"}
              width={"48.9%"}
              color="black"
              height={"2.7rem"}
              typing={"project_type"}
              borderRadius={"1px solid #DEE2E6"}
              marginLeft={"18rem"}
              marginTop={"0.3rem"}
              selected={{
                label: postRole.projectType
                  ? postRole.projectType
                  : PROJECTS_TYPE,
                value: postRole.projectType,
              }}
              selectItem={(item: any) => handleSelectItem(item, "projectType")}
            />
          </Container>
          <TextArea
            width="100%"
            rows={10}
            count={
              credentials?.projectDescription?.length
                ? credentials?.projectDescription?.length
                : 0
            }
            label="Project Description"
            name="projectDescription"
            placeHolder={DESCRIPTION}
            onChange={handleChange}
            maxLength={250}
          
          />

          <CustomMultiSelect
            // listItem={ROLES_LIST}
            listItem={allRoles}
            label="Talent/Skill Required"
            value={roles}
            onChange={handleRoleChange}
            labelledBy="roles"
            width="100%"
          />
          <Picker
            id="gender"
            types="postrole"
            data={GENDER}
            labels={GENDER_LABEL}
            bgColor={"#000"}
            width={"46%"}
            color="black"
            typing={"gender"}
            borderRadius={"1px solid #DEE2E6"}
            height={"2.7rem"}
            marginLeft={"15rem"}
            marginTop={"0.4rem"}
            selected={{
              label: postRole.gender ? postRole.gender : GENDER_TYPE,
              value: postRole.gender,
            }}
            selectItem={(item: any) => handleSelectItem(item, "gender")}
          />

          <InputWithLabel
            width={"60%"}
            label="Min Age"
            required
            placeHolder={MIN_AGE}
            onChange={handleChange}
            min={0}
            max={100}
            fontWeightPlaceHolder={300}
            name="Min_Age"
            type ="Number"
            
          />
          
          <InputWithLabel
            width={"48.9%"}
            label=" Max Age"
            required
            placeHolder={MAX_AGE}
            onChange={handleChange}
            min={0}
            max={100}
            fontWeightPlaceHolder={300}
            name="Max_Age"
            type ="Number"
          />
          <InputWithLabel
            width={"48.9%"}
            label="Country"
            required
            types={"country"}
            placeHolder={COUNTRY}
            fontWeightPlaceHolder={300}
            onChange={handleChange}
            name="country"
          />
          <InputWithLabel
            width={"48.9%"}
            label="City"
            required
            placeHolder={CITY}
            onChange={handleChange}
            fontWeightPlaceHolder={300}
            name="city"
          />
          <InputWithLabel
            width={"48.9%"}
            label="State"
            required
            placeHolder={STATE}
            onChange={handleChange}
            fontWeightPlaceHolder={300}
            name="state"
          />
          <InputWithLabel
            width={"48.9%"}
            label="postal Zip Code"
            onChange={handleChange}
            placeHolder={POSTALZIPCODE}
            fontWeightPlaceHolder={300}
            name="postal Zip Code"
          />
          <CustomMultiSelect
            // listItem={LANGUAGES}
            listItem={allLanguages}
            value={language}
            label="Languages Spoken"
            id="spokenLanguages"
            onChange={handleSpokenLanguage}
            width="100%"
            icon={ARROW_DOWN_PNG}
          />
          <InputWithLabel
            width={"48.9%"}
            label="Other Requirements"
            placeHolder={OTHER}
            onChange={handleChange}
            name="otherRequirements"
            fontWeightPlaceHolder={300}
          />
          <DatePickerContainer>
            <Label>
              <Heading
                title={LABELS}
                color={COLORS.grey}
                fontSize="0.725em"
                fontWeight={600}
                marginTop="0rem"
              />
              {"required" && <StyledAsterik>*</StyledAsterik>}
            </Label>
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
            />
          </DatePickerContainer>
        </StyledPostRoleForm>
        <StylePostRoleButton>
          <Button
            medium
            primary
            shadow
            padding="2%"
            onClick={handleSumit}
            // disabled={isCreatingPost || emptyFields}
          >
            {isCreatingPost ? CREATING_ROLE : POST_ROLE}
          </Button>
        </StylePostRoleButton>
      </Card>
    </StyledPostRoleWrapper>
  );
};

export default PostRole;
// eslint-disable-next-line
function setAllRoles(roles: any) {
  throw new Error("Function not implemented.");
}
// eslint-disable-next-line
function setRoles(value: any) {
  throw new Error("Function not implemented.");
}

function setUserState(arg0: any) {
  throw new Error("Function not implemented.");
}

