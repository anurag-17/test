import React from "react";
import { NewsUpdates } from "./data";
import {
  IMAGE_ROLE_THUMBNAIL,
  AVATAR,
} from "../../components/Assets/ImageConstant";
import { NEWS_HEADER, NEWS_BODY } from "../../constants/NewsUpdate";
import {
  Banner,
  NewsHead,
  NewsOne,
  NewsTwo,
  TopNews,
  FirstTop,
  SecondTop,
  ImagePost,
  DateSec,
  TitleSec,
  DescriptionSec,
  UserSec,
  AvatarName,
  NameNews,
  NameRole,
  Img,
  MainCardSection,
} from "./style";

const NewsUpdate: React.FC = () => {
  return (
    <>
      <Banner>
        <NewsHead>
          <NewsOne>{NEWS_HEADER}</NewsOne>
          <NewsTwo>{NEWS_BODY}</NewsTwo>
        </NewsHead>
      </Banner>
      <MainCardSection>
        {NewsUpdates.map((item, index: number) => (
          <TopNews index={index}>
            <FirstTop index={index}>
              <ImagePost src={IMAGE_ROLE_THUMBNAIL} alt="image" index={index} />
            </FirstTop>
            <SecondTop index={index}>
              <DateSec>{item.date}</DateSec>
              <TitleSec>{item.title}</TitleSec>
              <DescriptionSec>{item.description}</DescriptionSec>
              <UserSec>
                <Img src={AVATAR} alt="image" />
                <AvatarName>
                  <NameNews>{item.name}</NameNews>
                  <NameRole>{item.role}</NameRole>
                </AvatarName>
              </UserSec>
            </SecondTop>
          </TopNews>
        ))}
      </MainCardSection>
    </>
  );
};

export default NewsUpdate;
