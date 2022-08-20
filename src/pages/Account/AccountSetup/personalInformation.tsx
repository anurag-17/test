import React, { useEffect, useState } from 'react';
import Heading from '../../../components/Common/Heading';

import InputWithLabel from '../../../components/Common/InputWithLabel';

import {
  AccountSetupSection,
  AcntInfoFormGroup,
  MainContentHeader,
} from './style';
import { TITLE4, HEADING4, USER_TITLE, GENDER } from '../../../constants/AccountSetup';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { USER } from '../../../store/atoms';
import { changeEvent } from '../../../utils/types';
import Select from '../../../components/Common/CustomSelect';
import { ARROW_DOWN_PNG } from '../../../components/Assets/IconsConstant';
import CustomDatePicker from '../../../components/Common/CustomDatePicker';
import { convertDate } from '../../../utils/dateUtils';
import { ERROR_STATE } from '../../../store/atoms/error';
import { patterns } from '../../../utils/validations';

const PersonalInformation = () => {
  const [userState, setUserState] = useRecoilState(USER);
  const setHasErrors = useSetRecoilState(ERROR_STATE)
  const user = useRecoilValue(USER);
  const [firstname, setFirstname] = useState(user?.firstName || '');
  const [lastname, setLastname] = useState(user?.surname || '');
  const [middleName, setMiddleName] = useState(user?.middleName || '');



  const [dateOfBirth, setDateOfBirth] = useState(
    user?.dateOfBirth ? new Date(user?.dateOfBirth) : new Date()
  );
  const date = convertDate(dateOfBirth);

  const handleFirstNameChange = (e: changeEvent) => {
    let value = e.target.value;
    setFirstname(value.replace(patterns.name, ""));
    setUserState({ ...userState, firstName: value });
  }
  const handleLastNameChange = (e: changeEvent) => {
    let value = e.target.value;
    setLastname(value.replace(patterns.name, ""));
    setUserState({ ...userState, surname: value });
  }

  const handleMiddleNameChange = (e: changeEvent) => {
    let value = e.target.value;
    setMiddleName(value.replace(patterns.name, ""));
    setUserState({ ...userState, middleName: value });
  }
  const handleChange = (e: changeEvent) => {
    let value = e.target.value;
    setUserState({ ...userState, [e.target.id]: value });
  };

  useEffect(() => {
    setUserState({ ...userState, dateOfBirth: date });
    // eslint-disable-next-line
  }, [dateOfBirth, date]);

  // userState.dateOfBirth = date
  return (
    <AccountSetupSection padding="2.5% 0 20px 0" formGroupBorder>
      <div>
        <Heading title={HEADING4} marginTop="0rem" />
        <MainContentHeader subTitleWidth="80%">
          <Heading
            fontSize="1em"
            fontWeight={300}
            title={TITLE4}
            marginTop="0rem"
          />
        </MainContentHeader>
      </div>

      <AcntInfoFormGroup>
        <Select
          label="TITLE"
          id="title"
          listItem={USER_TITLE}
          placeHolder={user?.title || ''}
          onChange={handleChange}
          icon={ARROW_DOWN_PNG}
          width="32%"
        />
        <InputWithLabel
          label="FIRST NAME"
          id="firstName"
          value={firstname}
          type='name'
          onChange={handleFirstNameChange}
          width="32%"
          required
          hasErrors={(v) => setHasErrors(v)}
          maxLength={31}

        />

        <InputWithLabel
          label="MIDDLE NAME"
          id="middleName"
          type='name'
          value={middleName}
          onChange={handleMiddleNameChange}
          width="32%"
          hasErrors={(v) => setHasErrors(v)}
          maxLength={31}
        />
        <InputWithLabel
          label="LAST NAME"
          id="surname"
          type='name'
          value={lastname}
          onChange={handleLastNameChange}
          width="32%"
          hasErrors={(v) => setHasErrors(v)}
          required
          maxLength={31}
        />
        <CustomDatePicker
          label="DATE OF BIRTH*"
          id="dateOfBirth"
          value={user?.dateOfBirth || ''}
          onChange={(date: Date) => setDateOfBirth(date)}
          selected={dateOfBirth}
          width="32%"
        />
        <Select
          label="GENDER"
          id="gender"
          listItem={GENDER}
          placeHolder={user?.gender || ''}
          onChange={handleChange}
          icon={ARROW_DOWN_PNG}
          width="32%"
        />
      </AcntInfoFormGroup>
    </AccountSetupSection>
  );
};

export default PersonalInformation;
