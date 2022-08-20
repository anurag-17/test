import React, { useState } from 'react'
import Heading from "../../../components/Common/Heading";

import InputWithLabel from "../../../components/Common/InputWithLabel";
import {
  AccountSetupSection,
  AcntInfoFormGroup,
  MainContentHeader,
  SaveButton,
} from "./style";

import { TITLE, HEADING1 } from "../../../constants/AccountSetup";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { USER } from '../../../store/atoms';
import { changeEvent } from '../../../utils/types';
import { ERROR_STATE } from '../../../store/atoms/error';
import { patterns } from '../../../utils/validations';
import PhoneNumberInput from '../../../components/Common/PhoneNumberInput';
import Button from '../../../components/Common/CustomButton';
import useUpdatePersonalInfo from '../../../lib/ReactQuery/Hooks/Mutations/AccountSetup/useUpdatePersonalInfo';

const CompanyContactInfo = () => {

  const [userState, setUserState] = useRecoilState(USER)
const user = useRecoilValue(USER)
const setHasErrors = useSetRecoilState(ERROR_STATE)

const [companyName, setCompanyName] = useState(user?.companyName || '')
const [country, setCountry] = useState(user?.country || '')
const [addressLine1, setAddressLine1] = useState(user?.addressLine1 || '')
const [addressLine2, setAddressLine2] = useState(user?.addressLine2 || '')
const [workPhoneNumber, setWorkPhoneNumber] = useState(user?.workPhoneNumber || '')
const [city, setCity] = useState(user?.city||'')
const [state, setState] = useState(user?.state||'')
const [postalCode, setPostalCode] = useState(user?.postalCode||'')
const [phoneNo, setPhoneNo] = useState(user?.phoneNumber || '')
const {updatePersonalInfo, isSavingPersonalInfo, payload} = useUpdatePersonalInfo()


const handleChangeAddressLine1 = (e: changeEvent) => {
  let value = e.target.value;
  setAddressLine1(value.replace(patterns.text, ""));
  setUserState({ ...userState, addressLine1: value });
}

const handleChangeAddressLine2 = (e: changeEvent) => {
  let value = e.target.value;
  setAddressLine2(value.replace(patterns.text, ""));
  setUserState({ ...userState, addressLine2: value });
}

const handleChangeCity = (e: changeEvent) => {
  let value = e.target.value;
  setCity(value.replace(patterns.text, ""));
  setUserState({ ...userState, city: value });
}

const handleChangeState = (e: changeEvent) => {
  let value = e.target.value;
  setState(value.replace(patterns.text, ""));
  setUserState({ ...userState, state: value });
}

const handleChangePostalCode = (e: changeEvent) => {
  let value = e.target.value;
  setPostalCode(value.replace(patterns.text, ""));
  setUserState({ ...userState, postalCode: value });
}
const handleChangeCompanyName = (e: changeEvent) => {
  let value = e.target.value;
  setCompanyName(value.replace(patterns.text, ""));
  setUserState({ ...userState, companyName: value });
}

const handleChangeCountry = (e: changeEvent) => {
  let value = e.target.value;
  setCountry(value.replace(patterns.name, ""));
  setUserState({ ...userState, country: value });
}
const handlePhoneNo = (value:string) => {
  setPhoneNo(value)
  setUserState({ ...userState, phoneNumber: value });
}
const handleChangeWorkPhone = (value:string) => {
    setWorkPhoneNumber(value)
    setUserState({ ...userState, workPhoneNumber: value });
  }

const handleSave = () => {
  console.log("payload======>", payload)
  updatePersonalInfo(payload)
}

  

  return (
    <AccountSetupSection padding="2.5% 0 20px 0" formGroupBorder>
      <div>
        <Heading title={HEADING1} marginTop="0rem" />
        <MainContentHeader subTitleWidth="80%">
          <Heading
            fontSize="1em"
            fontWeight={300}
            title={TITLE}
            marginTop="0rem"
          />
        </MainContentHeader>
      </div>

      <AcntInfoFormGroup>
        <InputWithLabel label="Company Name" 
        onChange={handleChangeCompanyName}
        id='companyName'
        type='text'
        value={companyName}
        width="32%" 
        maxLength={31}
        hasErrors={(v) => setCompanyName(v)}
        />
      
        <PhoneNumberInput 
        label="Work Phone Number" 
        onChange={handleChangeWorkPhone}
        id='workPhoneNumber'
        value={workPhoneNumber}
        width="32%" 
        type='phone'
        />
        <PhoneNumberInput 
        label="Mobile Phone Number" 
        onChange={handlePhoneNo}
        id='phoneNumber'
        value={phoneNo}
        width="32%" 
        type='phone'
        maxLength={15}
        hasErrors={(v) => setHasErrors(v)}
        />
        <InputWithLabel label="Address Line 1" 
        onChange={handleChangeAddressLine1}
        id='addressLine1'
        value={addressLine1}
        type='address'
        width="32%" 
        maxLength={31}
        />
        <InputWithLabel label="Address Line 2" 
        onChange={handleChangeAddressLine2} 
        id='addressLine2'
        value={addressLine2}
        type='address'
        width="32%" 
        maxLength={31}
        />
        <InputWithLabel label="City" 
        onChange={handleChangeCity}
        id='city'
        value={city}
        type='city'
        width="32%" 
        maxLength={31}
        />
        <InputWithLabel label="Country" 
        onChange={handleChangeCountry}
        id='country'
        value={country}
        type='country'
        width="32%" 
        maxLength={31}
        />
        <InputWithLabel 
        label="State/Province" 
        onChange={handleChangeState}
        id='state'
        type='state'
        value={state}
        width="32%" 
        maxLength={31}
        />
        <InputWithLabel label="postal code" 
        onChange={handleChangePostalCode}
        id='postalCode'
        type='postalCode'
        value={postalCode}
        width="32%" 
        maxLength={8}
        />
      </AcntInfoFormGroup>
      <SaveButton>
          <Button onClick={handleSave} 
          disabled={isSavingPersonalInfo}
          primary shadow small padding="1%">
            {isSavingPersonalInfo ? "Saving..." : "Save"}
          </Button>
        </SaveButton>
    </AccountSetupSection>
  );
};

export default CompanyContactInfo;
