import styled from "styled-components";
import { COLORS } from "../../lib/StyledComponents/themes";
import { SCREEN_MAX } from "../../utils/ScreenSettings";

interface Props {
  padding?: string;
  subTitleWidth?: string;
  formGroupBorder?: boolean;
  show?: boolean;
}
export const StyledUserProfileWrapper = styled.section`
  display: flex;
  flex-flow: column no-wrap;
  justify-content: flex-start;
  align-items: flex-stretch;
  width: 100%;
  gap: 15px;
  @media ${SCREEN_MAX.md} {
    flex-flow: column wrap;
  }
`;

//===================================
//Account informatin component styles starts
//===================================

export const AccountProfilePicture = styled.figure`
  flex-basis: 100%;
  position: relative;
`;
export const FigCaption = styled.figcaption`
  margin: 1% 0px;
`;
export const AddIcon = styled.img`
  position: absolute;
  border: 4px solid ${COLORS.black};
  left: 100px;
  top: 80px;
  background-color: ${COLORS.black};
  border-radius: 100%;
`;

export const AcntInfoFormGroup = styled.form<Props>`
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
  width: 100%;
  padding: 1.5% 0px 0 0px;
`;

//======================================
//portfolio items style
//======================================

export const PortfolioItemsWrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  margin: 1.5% 0;
`;
