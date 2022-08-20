import React, { useRef, useState } from "react";
import { ADD_ICON_CIRCLE } from "../../../components/Assets/IconsConstant";
import Avatar from "../../../components/Common/Avatar";
import Heading from "../../../components/Common/Heading";
import Typography from "../../../components/Common/Typography";
import { COLORS } from "../../../lib/StyledComponents/themes";

import InputWithLabel from "../../../components/Common/InputWithLabel";
import TextArea from "../../../components/Common/TextArea";
import {
  AccountSetupSection,
  AccountProfilePicture,
  FigCaption,
  AcntInfoFormGroup,
  MainContentHeader,
  AddIconWrapper,
  StyledInput,
} from "./style";
import { HEADLINE, STATUS } from "../../../constants/AccountSetup";
import {  useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { USER } from "../../../store/atoms";
import { changeEvent } from "../../../utils/types";
import IconButton from "../../../components/Common/IconButton";
import { initialProfilePicState } from "../../../store/atoms/userAtoms/getUser";
import { patterns } from "../../../utils/validations";
import useUploadProfilePic from "../../../lib/ReactQuery/Hooks/Mutations/AccountSetup/useUploadProfilePic";
import Loader from "react-spinners/ScaleLoader";

const AccountInformation = () => {
  const [userState, setUserState] = useRecoilState(USER);
  const user = useRecoilValue(USER);

  const setInitialProfilePic = useSetRecoilState(initialProfilePicState);
  const [countChar, setCountChar] = useState(0);
  const imageRef = useRef<HTMLInputElement>(null);

  const { uploadProfilePic, isUploading } = useUploadProfilePic();

  const [displayName, setDisplayName] = useState(user?.displayName || "");

  const handleChange = (e: changeEvent) => {
    e.preventDefault();
    setUserState({ ...userState, [e.target.id]: e.target.value });
    if (e.target.id === "status" || e.target.id === "headline") {
      setCountChar(e.target.value.length);
    }
  };

  const handleDisplayNameChange = (e: changeEvent) => {
    let value = e.target.value;
    setDisplayName(value.replace(patterns.text, ""));
    setUserState({ ...userState, displayName: value });
  };

  const handleImageChange = (e: any) => {
    e.preventDefault();

    const file = e.target.files[0];
    setUserState({ ...userState, profilePictureUrl: file });
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      setInitialProfilePic(`${event.target.result}`);
    };
    const formData = new FormData();
    formData.append("profilePic", file);
    uploadProfilePic(formData);
  };

   
  return (
    <AccountSetupSection padding="0 0 20px 0" formGroupBorder>
      <div>
        <Heading title="Account Information" marginTop="0rem" />
        <MainContentHeader subTitleWidth="100%">
          <Heading
            fontSize="1em"
            fontWeight={300}
            title={"Please note that fields with asterik are required"}
            marginTop="0rem"
            color={COLORS.red}
          />
        </MainContentHeader>
      </div>
      <AccountProfilePicture>
        <FigCaption>
          <Typography
            fontSize="0.75em"
            fontWeight={600}
            color={COLORS.grey}
            text="PROFILE PICTURE"
          />
        </FigCaption>
        <Avatar border />
        <StyledInput
          type="file"
          accept="image/*"
          ref={imageRef}
          id="profilePictureUrl"
          onChange={handleImageChange}
        />

        <AddIconWrapper>
          {isUploading ? (
            <Loader color={COLORS.dark} height={25} radius={1} />
          ) : (
            <IconButton
              iconSize={24}
              size={34}
              icon={ADD_ICON_CIRCLE}
              background={COLORS.black}
              opacity={0.95}
              onClick={() => imageRef?.current?.click()}
            />
          )}
        </AddIconWrapper>
      </AccountProfilePicture>

      <AcntInfoFormGroup>
        <TextArea
          cols={30}
          rows={4}
          label={"Headline"}
          id="headline"
          placeHolder={HEADLINE}
          value={user?.headline || ""}
          width="32%"
          onChange={handleChange}
          count={countChar}
          maxLength={60}
        />
        <TextArea
          cols={30}
          rows={4}
          label={"STATUS"}
          id="status"
          placeHolder={STATUS}
          value={user?.status || ""}
          width="32%"
          onChange={handleChange}
          count={countChar}
          maxLength={120}
        />
      </AcntInfoFormGroup>
      <AcntInfoFormGroup formGroupBorder>
        <InputWithLabel
          label="DISPLAY NAME"
          id="displayName"
          type="displayName"
          value={displayName}
          width="32%"
          onChange={handleDisplayNameChange}
          required
          maxLength={31}
        />
        <InputWithLabel
          id="email"
          value={user?.email || ""}
          type="email"
          label="Email Address*"
          width="32%"
          onChange={handleChange}
          disabled={true}
          maxLength={40}
        />
      </AcntInfoFormGroup>
    </AccountSetupSection>
  );
};

export default AccountInformation;
