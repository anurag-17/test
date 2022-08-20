import React from "react";
import CheckBox from "../../../components/Common/CheckBox";
import Heading from "../../../components/Common/Heading";

import {
  AccountSetupSection,
  MainContentHeader,
  PersonaForm,
  PersonWrapper,
  SaveButton,
  StyledAccountDiv,
} from "./style";

import {
  TITLE3,
  HEADING3,
  PRODUCER,
  CREW_MEMBER,
  TALENT,
} from "../../../constants/AccountSetup";
import { useRecoilState, useRecoilValue } from "recoil";
import Button from "../../../components/Common/CustomButton";
import usePersonaSetup from "../../../lib/ReactQuery/Hooks/Mutations/AccountSetup/usePersonaSetup";
import { USER } from "../../../store/atoms";

const PersonaSetup = () => {
  const [userState, setUserState] = useRecoilState(USER);
  const {savePersona, isSavingPersona, payload} = usePersonaSetup()
  const { userPersonas } =  useRecoilValue(USER);

  ;

  const getPersonaStatus = (personaType: string) => {
    return userPersonas?.find(
      (personas: any) => personas?.persona === personaType
    )?.status;
  };
  const handleChange = (e: any) => {
    const id = e.target.id;
    const checked = e.target.checked;
    console.log("person na id", id, checked)
    if (id === CREW_MEMBER) {
      setUserState({
        ...userState,
        userPersonas: [
          {
            persona: PRODUCER,
            status: getPersonaStatus(PRODUCER),
          },
          { persona: CREW_MEMBER, status: checked },
          { persona: TALENT, status: getPersonaStatus(TALENT) },
        ],
      });
    } else if (id === PRODUCER) {
      setUserState({
        ...userState,
        userPersonas: [
          { persona: PRODUCER, status: checked },
          {
            persona: CREW_MEMBER,
            status: getPersonaStatus(CREW_MEMBER),
          },
          { persona: TALENT, status: getPersonaStatus(TALENT) },
        ],
      });
    } else if (id === TALENT) {
      setUserState({
        ...userState,
        userPersonas: [
          {
            persona: PRODUCER,
            status: getPersonaStatus(PRODUCER),
          },
          {
            persona: CREW_MEMBER,
            status: getPersonaStatus(CREW_MEMBER),
          },
          { persona: TALENT, status: checked },
        ],
      });
    }
  };


   const handleSavePersona = () => {
    savePersona(payload)
   }
  return (
    <AccountSetupSection padding="5% 0">
      <StyledAccountDiv>
        <Heading title={HEADING3} marginTop="0rem" />
        <MainContentHeader subTitleWidth="100%">
          <Heading
            fontSize="1em"
            fontWeight={300}
            title={TITLE3}
            marginTop="0rem"
          />
          <PersonWrapper>
            <PersonaForm>
              {userPersonas.map((userPersona: any, index: any) => (
                <CheckBox
                  key={index}
                  label={
                    userPersona.persona === "CREW_MEMBER"
                      ? userPersona.persona.replace("_", " ")
                      : userPersona.persona
                  }
                  id={userPersona.persona}
                  padding={5}
                  borderBottom
                  fontWeight={400}
                  checked={userPersona.status}
                  value={userPersona.status}
                  onChange={handleChange}
                />
              ))}
            </PersonaForm>
          </PersonWrapper>
        </MainContentHeader>
        <SaveButton>
          <Button
            // marginLeft="50%"
            primary
            shadow
            small
            padding="2%"
            onClick={handleSavePersona}
            disabled={isSavingPersona}
          >
            {isSavingPersona?"Saving...":"Save"}
          </Button>
        </SaveButton>
      </StyledAccountDiv>
    </AccountSetupSection>
  );
};

export default PersonaSetup;
