import React from "react";
import Loader from "react-spinners/ScaleLoader";
import { COLORS } from "../../../lib/StyledComponents/themes";
import { ADD_ICON_DARK } from "../../Assets/IconsConstant";
import IconButton from "../IconButton";
import {
  StyledAddMediaButtonWrapper,
  StyledAddMediaText,
  StyledAddMediaWrapper,
} from "./style";

interface IAddMedia {
  onClick?: () => void;
  initialText?: string;
  loading?: boolean;
}
const AddMedia = ({ onClick, initialText, loading }: IAddMedia) => {
  return (
    <StyledAddMediaWrapper>
      <StyledAddMediaButtonWrapper>
        {loading ? (
          <>
            <StyledAddMediaText>
              <small>Uploading...{initialText?.slice(0, 15)}</small>
            </StyledAddMediaText>
            <Loader color={COLORS.darkGrey} />
          </>
        ) : (
          <IconButton
            background={COLORS.darkGrey}
            size={50}
            iconSize={60}
            icon={ADD_ICON_DARK}
            onClick={onClick}
          />
        )}
      </StyledAddMediaButtonWrapper>
    </StyledAddMediaWrapper>
  );
};

export default AddMedia;
