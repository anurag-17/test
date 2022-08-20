import React from "react";
import { useRecoilValue } from "recoil";
import { COLORS } from "../../../lib/StyledComponents/themes";
import { USER } from "../../../store/atoms";
import { initialProfilePicState } from "../../../store/atoms/userAtoms/getUser";
import { getFirstLetter } from "../../../utils/helpers";
import { AVATAR, AVATAR_SMALL } from "../../Assets/ImageConstant";
import Heading from "../Heading";
import { Image, FigureWrapper } from "./style";

interface Props {
  border?: boolean;
  size?: number;
  image?: string;
  gap?: number;
  square?: boolean;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  alt?: string;
  avatarOrInitials?: boolean;
}
const Avatar = ({
  border,
  size,
  image,
  gap,
  square,
  onLoad,
  alt,
  avatarOrInitials,
}: Props) => {
  const user = useRecoilValue(USER);
  const initialProfilePic = useRecoilValue(initialProfilePicState);

  const firstName = getFirstLetter(user?.firstName || "");
  const lastName = getFirstLetter(user?.surname || "");
  const nameInitials = `${firstName}${lastName}`;
  const profilePic = initialProfilePic ?initialProfilePic:user?.profilePictureUrl

  return (
    <>
      {(avatarOrInitials && nameInitials &&  profilePic === null )?  
      (
       <Heading
          title={nameInitials}
          marginLeft="0.2rem"
          fontSize="2.7rem"
          color={COLORS.darkGrey}
        /> ): (
        <FigureWrapper border={border} size={size} square={square}>
          <Image
            square={square}
            src={
              image
                ?  profilePic|| AVATAR
                : square
                ?  profilePic || AVATAR_SMALL
                :  profilePic || AVATAR
            }
            alt="user photo"
            size={size}
            gap={gap}
            onLoad={onLoad}
          />
        </FigureWrapper>
      )}
    </>
  );
};

export default Avatar;
