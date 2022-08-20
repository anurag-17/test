import React, { useEffect, useState } from "react";
import axios from 'axios';
import Heading from "../../../components/Common/Heading";

import InputWithLabel from "../../../components/Common/InputWithLabel";
import {
  AccountSetupSection,
  AcntInfoFormGroup,
  MainContentHeader,
  SaveButton,
  StyledAccountDiv,
} from "./style";
import {
  TITLE6,
  HEADING6,
  // GENRE,
  // ROLES_LIST,
  // SKIN_TONE,
  // ETHNICITY,
  // LANGUAGES,
} from "../../../constants/AccountSetup";
import { USER } from "../../../store/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { changeEvent } from "../../../utils/types";
import Select from "../../../components/Common/CustomSelect";
import { convertToArrayOfObject } from "../../../utils/helpers";
import { ARROW_DOWN_PNG } from "../../../components/Assets/IconsConstant";
import CustomMultiSelect from "../../../components/Common/CustomMultiSelect";
import { patterns } from "../../../utils/validations";
import Button from "../../../components/Common/CustomButton";
import useTalentsSetup from "../../../lib/ReactQuery/Hooks/Mutations/AccountSetup/useTalentSetup";
import { HEADERS } from "../../../lib/Config";

const Talent = () => {
  const [userState, setUserState] = useRecoilState(USER);
  const { saveTalent, isSavingTalent, payload } = useTalentsSetup();
  const talents = useRecoilValue(USER);

  const oldGenres = convertToArrayOfObject(
    talents?.genres.map((genres: any) => genres.genreTitle)
  );
  const oldRoles = convertToArrayOfObject(
    talents?.roles.map((genres: any) => genres.roleTitle)
  );
  const [genre, setGenre] = useState(oldGenres);
  const [roles, setRoles] = useState(oldRoles);
  const [height, setHeight] = useState(talents?.height || "");
  const [weight, setWeight] = useState(talents?.weight || "");
  const [education, setEducation] = useState(talents?.education || "");
  const [skinTone, setSkinTone] = useState(talents?.skinTone || "");

  const [allLanguages, setAllLanguages] = useState([]);
  const [allSkinTones, setAllSkinTones] = useState([]);
  const [allEthnicity, setAllEthnicity] = useState([]);
  const [allGenres, setAllGenres] = useState([]);
  const [allRoles, setAllRoles] = useState([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/language/`,
      );
      const languages = response.data.map((language: any) => {
        return language.languageName;
      });
      setAllLanguages(languages);
    }
    
    const fetchSkinTones = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/skintone/`,
      );
      const skinTones = response.data
      setAllSkinTones(skinTones);
    }

    const fetchEthnicity = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/race/`,
      );
      const ethnicity = response.data
      setAllEthnicity(ethnicity)
    }

    const fetchGenres = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/genre/`,
      );
      const genres = response.data.map((genre: any) => {
        return {
          label: genre.genreTitle,
          value: genre.genreTitle
        }
      });
      setAllGenres(genres);
    }

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

    fetchLanguages();
    fetchSkinTones();
    fetchEthnicity();
    fetchGenres();
    fetchRoles();
  }, []);


  const handleGenreChange = (value: any) => {
    setGenre(value);
    const newGenre = [];
    for (let i in value) {
      newGenre.push({ genreTitle: value[i].value });
    }

    setUserState({
      ...userState,
      genres: [...newGenre],
    });
  };

  const handleRoleChange = (value: any) => {
    setRoles(value);
    const newRoles = [];
    for (let i in value) {
      newRoles.push({ roleTitle: value[i].value });
    }
    setUserState({
      ...userState, roles: newRoles });
  };


  const handleSpokenLanguage = (e: changeEvent) => {
    const languague = {
      language: e.target.value,
      // proficiency: "ADVANCED"
    };
    setUserState({
      ...userState, spokenLanguages: [languague] });
  };

  const handleChange = (e: changeEvent) => {
    const value = e.target.value;
    setUserState({
      ...userState, [e.target.id]: value });
  };

  const handleHeightChange = (e: any) => {
    let text = e.target.value;
    setHeight(text.replace(patterns.measurement, ""));
    setUserState({
      ...userState, height: text });
  };

  const handleEducationChange = (e: any) => {
    let text = e.target.value;
    setEducation(text.replace(patterns.textAndCharacters, ""));
    setUserState({
      ...userState, education: text });
  };

  const handleWeigtChange = (e: any) => {
    let text = e.target.value;
    setWeight(text.replace(patterns.measurement, ""));
    setUserState({
      ...userState, weight: text });
  };


  const handleSkinToneChange = (e: any) => {
    let text = e.target.value;
    setSkinTone(text)
    const skinTone = text.replace(" ", "_") 
    setUserState({
      ...userState, skinTone: skinTone });
  };
 

  const handleSaveTalent = () => {
    saveTalent(payload);
  };
  return (
    <AccountSetupSection padding="5% 0">
      <StyledAccountDiv>
        <Heading title={HEADING6} marginTop="0rem" />
        <MainContentHeader subTitleWidth="100%">
          <Heading
            fontSize="1em"
            fontWeight={300}
            title={TITLE6}
            marginTop="0rem"
          />
        </MainContentHeader>

        <AcntInfoFormGroup>
          <CustomMultiSelect
            // listItem={ROLES_LIST}
            listItem={allRoles}
            label="Type of Roles Sort"
            value={roles}
            onChange={handleRoleChange}
            labelledBy="roles"
            width="100%"
          />

          <CustomMultiSelect
            // listItem={GENRE}
            listItem={allGenres}
            label="Genre"
            id="genres"
            value={genre}
            onChange={handleGenreChange}
            labelledBy="Genre"
            // width="100%"
          />
          <Select
            // listItem={LANGUAGES}
            listItem={allLanguages}
            label="Languages Spoken"
            id="spokenLanguages"
            onChange={handleSpokenLanguage}
            width="100%"
            icon={ARROW_DOWN_PNG}
            placeHolder={talents?.spokenLanguages[0]?.language || ""}
          />

          <InputWithLabel
            label="Height in Ft"
            id="height"
            value={height || ""}
            type="height"
            onChange={handleHeightChange}
            width="100%"
            placeHolder="e.g. 18 or 18.00"
            maxLength={6}
          />
          <InputWithLabel
            label="Weight in kg"
            id="weight"
            value={weight || ""}
            type="weight"
            onChange={handleWeigtChange}
            placeHolder="e.g. 75 0r 75.00"
            width="100%"
            maxLength={6}
          />
          <Select
            label="Skin Tone"
            // listItem={SKIN_TONE}
            listItem={allSkinTones}
            id="skinTone"
            placeHolder={skinTone}
            onChange={handleSkinToneChange}
            width="100%"
            icon={ARROW_DOWN_PNG}
          />
          <Select
            label="Ethnicity"
            id="ethnicity"
            // listItem={ETHNICITY}
            listItem={allEthnicity}
            placeHolder={talents?.ethnicity || ""}
            onChange={handleChange}
            icon={ARROW_DOWN_PNG}
            width="100%"
          />
          <InputWithLabel
            label="Education"
            id="education"
            value={education}
            onChange={handleEducationChange}
            width="100%"
            placeHolder="e.g MSC. Education"
          />
        </AcntInfoFormGroup>
        <SaveButton>
          <Button onClick={handleSaveTalent} 
          disabled={isSavingTalent}
          primary shadow small padding="2%">
            {isSavingTalent ? "Saving..." : "Save"}
          </Button>
        </SaveButton>
      </StyledAccountDiv>
    </AccountSetupSection>
  );
};

export default Talent;
