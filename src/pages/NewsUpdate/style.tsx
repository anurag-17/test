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

export const NewsHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  margin-left: 4.3rem;

  @media ${SCREEN_MAX.md} {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 1rem;
  }
`;

export const NewsOne = styled.p`
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
export const NewsTwo = styled.p`
  color: #fff;
  font-size: 0.9rem;
  max-width: 620px;

  @media ${SCREEN_MAX.md} {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.98rem;
    letter-spacing: 0px;
    width: 290px;
    margin-top: 1rem;
  }
`;

export const TopNews = styled.div<{ index?: number }>`
  margin: 0.6rem 0;
  width: 80%;
  margin-bottom: 4rem;

  flex-basis: ${({ index }) => (index === 0 ? "100%" : "40%")};
  display: ${({ index }) => (index === 0 ? "flex" : "block")};

  @media ${SCREEN_MAX.md} {
    display: block;
    margin: 2rem 0;
  }
`;

export const ImagePost = styled.img<{ index?: number }>`
  width: ${({ index }) => (index === 0 ? "100%" : "550px")};

  @media ${SCREEN_MAX.md} {
    width: 350px;
  }
`;

export const FirstTop = styled.div<{ index?: number }>`
  width: ${({ index }) => (index === 0 ? "150%" : "100%")};
  @media ${SCREEN_MAX.md} {
    width: 100%;
  }
`;

export const SecondTop = styled.div<{ index?: number }>`
  font-size: 1rem;

  margin-left: ${({ index }) => (index === 0 ? "2rem" : "0")};
  
  @media ${SCREEN_MAX.md} {
    margin-left: 0;
    width: ${({ index }) => (index === 0 ? "100%" : "120%")}
  }
`;
export const DateSec = styled.p`
  color: #868e96;
  text-transform: uppercase;
  margin-top: 1rem;
  font-size: 0.8rem;
`;

export const TitleSec = styled.p<{ index?: number }>`
  color: #212529;
  font-weight: 500;
  font-size: 2rem;
  @media ${SCREEN_MAX.md} {
    font-size: 1.5rem;
    
  }
`;
export const DescriptionSec = styled.p`
  color: #212529;
  font-size: 1.09rem;
  line-height: 1.4rem;
  @media ${SCREEN_MAX.md} {
    font-size: 1rem;
  }
`;
export const UserSec = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;
export const Img = styled.img`
  margin-top: 0.5rem;
  width: 7%;
  height: 7%;
`;
export const AvatarName = styled.div`
  margin-top: 1rem;
  margin-left: 0.6rem;
  margin-bottom: 0.5rem;
`;
export const NameNews = styled.p`
  font-size: 1rem;
  font-weight: 800;
`;
export const NameRole = styled.p`
  font-size: 0.7rem;
`;

export const MainCardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 1rem;
  width: 80%;
  margin: 0 auto;

  @media ${SCREEN_MAX.md} {
    align-items: center;
  }
`;
