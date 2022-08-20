import styled from "styled-components";
import { SMALL } from "../../components/Assets/ImageConstant";
import { SCREEN_MAX } from "../../utils/ScreenSettings";

export const Banner = styled.div`
  background-image: url(${SMALL});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  background-clip: padding-box;
  height: 30vh;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 1.5%;

  @media ${SCREEN_MAX.md} {
    background-position: top center;
    background-size: cover;
    width: 100%;
  }
`;

export const CrewMen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  margin-left: 1.5rem;

  @media ${SCREEN_MAX.md} {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 1rem;
  }
`;

export const CrewOne = styled.p`
  font-weight: 600;
  color: #fff;
  font-size: 3rem;

  @media ${SCREEN_MAX.md} {
    font-weight: 600;
    color: #fff;
    font-size: 2rem;
    max-width: 260px;
    margin-top: 0rem;
  }
`;
export const CrewTwo = styled.p`
  color: #fff;
  font-size: 1rem;
  max-width: 620px;

  @media ${SCREEN_MAX.md} {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.98rem;
    letter-spacing: 0px;
    width: 290px;
    margin-top: 1rem;
  }
`;

export const TopTalent = styled.div`
  margin-left: 6rem;
  margin-top: 2rem;
  margin-bottom: 0.7rem;

  @media ${SCREEN_MAX.md} {
    margin-left: 3.2rem;
    margin-top: 1rem;
  }
`;

export const FirstTop = styled.p`
  color: #212529;
  font-size: 1.2rem;
  font-weight: 800;

  @media ${SCREEN_MAX.md} {
    color: #212529;
    font-size: 1.2rem;
    font-weight: 800;
  }
`;

export const SecondTop = styled.span`
  color: #212529;
  font-size: 1rem;

  @media ${SCREEN_MAX.md} {
    color: #212529;
    font-size: 1rem;
  }
`;
export const MainCardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  justify-content: center;
  padding: 0.1rem;
  margin-bottom: 2rem;
  margin-top: 0rem;
`;
