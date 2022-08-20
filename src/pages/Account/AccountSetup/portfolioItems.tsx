import React, { useRef } from "react";
import Heading from "../../../components/Common/Heading";
import { AddMedia, MediaCard } from "../../../components/Common/MediaCard";

import { COLORS } from "../../../lib/StyledComponents/themes";
import {
  AccountSetupSection,
  MainContentHeader,
  PortfolioItemsWrapper,
  StyledAccountSection,
  StyledInput,
} from "./style";
import { toast } from "react-toastify";
import { TITLE5, HEADING5 } from "../../../constants/AccountSetup";
import { useRecoilState, useRecoilValue } from "recoil";
import { USER } from "../../../store/atoms";
import useUploadPortfolioVideo from "../../../lib/ReactQuery/Hooks/Mutations/AccountSetup/useUploadPortfolioVideo";
import useUploadPortfolioImage from "../../../lib/ReactQuery/Hooks/Mutations/AccountSetup/useUploadPortfolioImage";
import useUploadPortfolioAudio from "../../../lib/ReactQuery/Hooks/Mutations/AccountSetup/useUploadPortfolioAudio";

const PortfolioItems = () => {
  const { portfolios } = useRecoilValue(USER);
  const [userState, setUserState] = useRecoilState(USER);
  const {
    uploadPortfolioVideo,
    isUploadingPortfolioVideo,
    isUploadVideoError,
  } = useUploadPortfolioVideo();
  const {
    uploadPortfolioImage,
    isUploadingPortfolioImage,
    isUploadImageError,
  } = useUploadPortfolioImage();

  const {
    uploadPortfolioAudio,
    isUploadingPortfolioAudio,
    isUploadAudioError,
  } = useUploadPortfolioAudio();

  const imageRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLInputElement>(null);

  const convertToMB = (bytes: number) => {
    return Math.round(bytes / 1000000);
  }

  const handleImageChange = (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    const fileSize = convertToMB(file.size);
    const imageFileLimit = 5;
    const type = file.type.includes("image") && "PICTURE";
    if (fileSize > imageFileLimit) {
      toast.error(`Image file size should be less than ${imageFileLimit} MB`);
      return;
    }
    else{
    const reader = new FileReader();
    const portfolioUpload = new FormData();
    portfolioUpload.append("portfolio", file);
    portfolioUpload.append("portfolioTitle", file.name);
    uploadPortfolioImage(portfolioUpload);
    if (isUploadImageError === false && isUploadingPortfolioImage === false) {
      reader.readAsDataURL(file);
      reader.onload = (event: any) => {
        setUserState({
          ...userState,
          portfolios: [
            ...userState?.portfolios,
            {
              portfolioType: type,
              portfolioUrl: `${event.target.result}`,
              portfolioTitle: file.name,
            },
          ],
        });
      };
    }}
  };

  const handleAudioChange = (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    const fileSize = convertToMB(file.size);
    const audioFileLimit = 10;
    const type = file.type.includes("audio") && "AUDIO";
    if (fileSize > audioFileLimit) {
      toast.error(`Audio file size should be less than ${audioFileLimit} MB`);
      return;
    }
    else{
    const reader = new FileReader();
    const portfolioUpload = new FormData();
    portfolioUpload.append("portfolio", file);
    portfolioUpload.append("portfolioTitle", file.name);
    uploadPortfolioAudio(portfolioUpload);
    if (isUploadAudioError === false && isUploadingPortfolioAudio === false) {
      reader.readAsDataURL(file);

      reader.onload = (event: any) => {
        setUserState({
          ...userState,
          portfolios: [
            ...userState?.portfolios,
            {
              portfolioType: type,
              portfolioUrl: `${event.target.result}`,
              portfolioTitle: file.name,
            },
          ],
        });
      };
    }}
  };

  const handleVideoChange = (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    const fileSize = convertToMB(file.size);
    const videoFileLimit = 50;
    if (fileSize > videoFileLimit) {
      toast.error(`Video file size should be less than ${videoFileLimit} MB`);
      return;
    }
    else{
    const reader = new FileReader();
    const type = file.type.includes("video") && "VIDEO";
    const portfolioUpload = new FormData();
    portfolioUpload.append("portfolio", file);
    portfolioUpload.append("portfolioTitle", file.name);
    uploadPortfolioVideo(portfolioUpload);
    if (isUploadVideoError === false && isUploadingPortfolioVideo === false) {
      reader.readAsDataURL(file);
      reader.onload = (event: any) => {
        console.log("portfolio error", isUploadVideoError);
        setUserState({
          ...userState,
          portfolios: [
            ...userState?.portfolios,
            {
              portfolioType: type,
              portfolioUrl: event?.target?.result,
              portfolioTitle: file.name,
            },
          ],
        });
      };
    }}
  };

  return (
    <AccountSetupSection padding="2.5% 0 20px 0" formGroupBorder>
      <StyledAccountSection>
        <Heading title={HEADING5} marginTop="0rem" />
        <MainContentHeader subTitleWidth="80%">
          <Heading
            fontSize="1em"
            fontWeight={300}
            title={TITLE5}
            marginTop="0rem"
          />
        </MainContentHeader>
      </StyledAccountSection>

      <StyledAccountSection>
        <Heading
          fontSize="0.75em"
          fontWeight={600}
          color={COLORS.grey}
          title="VIDEO FILES"
          marginTop="0rem"
        />
        <StyledInput
          type="file"
          accept="video/*"
          ref={videoRef}
          // id="profilePictureUrl"
          onChange={handleVideoChange}
          />
          <p style={{
            color: COLORS.black,
            fontSize: "0.75em",
          }}>Format supported include <b>mp4, mov, wmv, avi, flv, mkv, mpeg-2.</b></p>
          <p style={{
            color: COLORS.black,
            fontSize: "0.75em",
          }}>Max size of <b>50MB.</b></p>
        <PortfolioItemsWrapper>
          {portfolios
            .filter((portfolio: any) => portfolio.portfolioType === "VIDEO")
            .map((filteredPortfolio: any, index: any) => (
              <MediaCard
                deleteable
                key={index}
                // title={filteredPortfolio.portfolioTitle}
                source={filteredPortfolio.portfolioUrl}
                video
                id={filteredPortfolio.id}

              />
              // console.log("portfoliosssss==========>", filteredPortfolio)
            ))}
          <AddMedia
            onClick={() => videoRef?.current?.click()}
            loading={isUploadingPortfolioVideo}
          />
        </PortfolioItemsWrapper>
      </StyledAccountSection>

      <StyledAccountSection>
        <Heading
          fontSize="0.75em"
          fontWeight={600}
          color={COLORS.grey}
          title="IMAGE FILES"
          marginTop="0rem"
        />

        <StyledInput
          type="file"
          accept="image/*"
          ref={imageRef}
          // id="profilePictureUrl"
          onChange={handleImageChange}
        />
         <p style={{
            color: COLORS.black,
            fontSize: "0.75em",
          }}>Format supported include <b>jpg, jpeg, png, tiff, gif.</b></p>
          <p style={{
            color: COLORS.black,
            fontSize: "0.75em",
          }}>Max size of <b>5MB.</b></p>
        <PortfolioItemsWrapper>
          {portfolios
            .filter((portfolio: any) => portfolio.portfolioType === "PICTURE")
            .map((filteredPortfolio: any, index: any) => (
              <MediaCard
                deleteable
                key={index}
                // title={filteredPortfolio.portfolioTitle}
                source={filteredPortfolio.portfolioUrl}
                image
                id={filteredPortfolio.id}

              />
              // console.log("portfoliosssss==========>", filteredPortfolio)
            ))}
          <AddMedia
            loading={isUploadingPortfolioImage}
            onClick={() => imageRef?.current?.click()}
          />
        </PortfolioItemsWrapper>
      </StyledAccountSection>

      <StyledAccountSection>
        <Heading
          fontSize="0.75em"
          fontWeight={600}
          color={COLORS.grey}
          title="AUDIO FILES"
          marginTop="0rem"
        />
        <StyledInput
          type="file"
          accept="audio/*"
          ref={audioRef}
          // id="profilePictureUrl"
          onChange={handleAudioChange}
        />
         <p style={{
            color: COLORS.black,
            fontSize: "0.75em",
          }}>Format supported include <b>mp3, ogg, wav, tiff, aac, wma, m4a, mp4.</b></p>
          <p style={{
            color: COLORS.black,
            fontSize: "0.75em",
          }}>Max size of <b>10MB.</b></p>
        <PortfolioItemsWrapper>
          {portfolios

            .filter((portfolio: any) => portfolio.portfolioType === "AUDIO")
            .map((filteredPortfolio: any, index: any) => (
              <MediaCard
                deleteable
                key={index}
                // title={filteredPortfolio.portfolioTitle}
                source={filteredPortfolio.portfolioUrl}
                audio
                id={filteredPortfolio.id}
              />
            ))}
          <AddMedia
            onClick={() => audioRef?.current?.click()}
            loading={isUploadingPortfolioAudio}
          />
        </PortfolioItemsWrapper>
      </StyledAccountSection>
    </AccountSetupSection>
  );
};

export default PortfolioItems;
