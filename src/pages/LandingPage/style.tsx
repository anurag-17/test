import styled from "styled-components";
import { BANNER } from "../../components/Assets/ImageConstant";
import { SCREEN_MAX } from "../../utils/ScreenSettings";

export const MainContainer = styled.div`
    height:100vh;
    flex-direction: column;
`

export const HeroContainer = styled.div`
  background-image: url(${BANNER});
  min-height: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: padding-box;
  margin: 0px;
  padding-top: 3%;
  padding-bottom: 4%;
`;

export const Form = styled.form`
  width: 33.5em;
  height: 26.5em;
  background: rgba(255, 255, 255, 0.1);
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 4.5%;

  @media ${SCREEN_MAX.md} {
    transform: scale(0.95, 0.85);
    width: 100%;
    margin-left: 1.5%;
  }
`;
export const Input = styled.input`
  width: 472px;
  height: 56px;
  background: #343a40 0% 0% no-repeat padding-box;
  mix-blend-mode: soft-light;
  border-radius: 8px;
  opacity: 0.4;
  border-radius: 8px;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  color: #ffffff;

  ::placeholder {
    color: #ffffff;
  }

  @media ${SCREEN_MAX.sm} {
    transform: scale(0.75, 1);
  }
`;
export const Select = styled.select`
  width: 472px;
  height: 56px;
  background: #343a40 0% 0% no-repeat padding-box;
  mix-blend-mode: soft-light;
  opacity: 0.4;
  border-radius: 8px;
  color: #ffffff;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  outline: none;

  option {
    color: #ffffff;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
  }

  @media ${SCREEN_MAX.sm} {
    transform: scale(0.75, 1);
  }
`;

export const SearchConatiner = styled.div`
  margin-left: 4.5%;

  h2 {
    text-align: left;
    font: normal normal bold 60px/84px SF Pro;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;

    @media ${SCREEN_MAX.md} {
      font: normal normal bold 36px/44px SF Pro;
    }
  }

  P {
    text-align: left;
    font: normal normal normal 20px/28px SF Pro;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
    margin-bottom: 1.5%;
    max-width: 75ch;

    @media ${SCREEN_MAX.md} {
      font: normal normal bold 16px/20px;
    }
  }
`;
