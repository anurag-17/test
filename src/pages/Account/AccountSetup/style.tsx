import styled from "styled-components";
import { COLORS } from "../../../lib/StyledComponents/themes";
import { SCREEN_MAX, SCREEN_MIN } from "../../../utils/ScreenSettings";

interface Props {
  padding?: string;
  subTitleWidth?: string;
  formGroupBorder?: boolean;
  show?: boolean;
}

//=================================
//layout styles begins here
//==================================
export const Container = styled.main`
  width: 90%;
  margin: auto;
  margin-top: 1%;
  margin-bottom: 1%;

  display: flex;
  justify-content: center;
  // align-items: flex-end;
  flex-flow: row wrap;
  //   border: 2px solid black;

  @media ${SCREEN_MAX.md} {
    width: 90%;
    margin: auto;
    margin-top: 2%;
    display: flex;
    justify-content: center;
    // align-items: flex-end;
    flex-flow: column wrap;
    //   border: 2px solid black;
  }
`;
export const MainContent = styled.section`
  flex-basis: 70%;
  margin: 0 0.5% 5% 0.5%;
  //   border: 2px solid black;
`;

export const MainHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-basis: 95%;
  margin: 0 0.5% 0.5% 0.5%;
`;

export const Aside = styled.aside`
  flex-basis: 25%;
  margin: 0px 0.5%;
  // @media ${SCREEN_MAX.lg} {
  //   margin: 119px 0.5%;
  // }
  // @media ${SCREEN_MAX.md} {
  //   margin: 7.5% 0.5%;
  // }
  // //   border: 2px solid black;
`;
//================================
//layout ends here
//================================
export const MainContentHeader = styled.section<Props>`
  width: ${(p) => (p.subTitleWidth ? p.subTitleWidth : "40%")};
  margin: 1% 0 2% 0;
 

  @media ${SCREEN_MAX.lg} {
    width: ${(p) => (p.subTitleWidth ? p.subTitleWidth : "40%")};
  }
  @media ${SCREEN_MAX.md} {
    width: 100%;
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
export const AddIconWrapper = styled.div`
  position: absolute;
  left: 100px;
  top: 80px;
`;

export const AcntInfoFormGroup = styled.form<Props>`
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
  width: 100%;
  padding: 1.5% 0px 0 0px;
`;

//Account informatin component styles Ends
//===================================

export const AccountSetupSection = styled.section<Props>`
  display: flex;
  flex-flow: row wrap;
  padding: ${(p) => p.padding && p.padding};
  border-bottom: ${(p) =>
    p.formGroupBorder ? `1px solid ${COLORS.inputBorder}` : ""};
`;

export const SaveChangesButton = styled.section<Props>`
  // margin: 0.5%;
  text-align: right;
  width: 20%;

  @media ${SCREEN_MAX.md} {
    display: none;
  }
`;

export const SaveButton = styled.section<Props>`
 
  display:flex;
  justify-content:flex-end;
  width:100%;
  padding-top:10px;
`;
export const SaveChangesButtonMd = styled.section<Props>`
  @media ${SCREEN_MIN.md} {
    display: none;
  }
`;

//============================
//persona setup style starts
//===========================
export const PersonaForm = styled.form`
  border: 1px solid ${COLORS.inputBorder};
  border-radius: 8px;
  > * {
    &:last-child {
      border: 0px;
    }
  }
`;

export const PersonWrapper = styled.section`
  border: 1px dashed ${COLORS.inputBorder};
  padding: 7%;
  border-radius: 8px;
  margin-top: 10%;
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

//=========miscelleneous==================
export const StyledAccountSection = styled.section`
  width: 100%;
`;

export const StyledAccountDiv = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  
  @media ${SCREEN_MAX.md} {
    padding: 0;
  }
`;

export const StyledInput = styled.input`
display:none;
`
