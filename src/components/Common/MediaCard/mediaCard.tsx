import React, { useState } from "react";
import Loader from "react-spinners/ScaleLoader";
import { useRecoilState } from "recoil";
import useDeletePortfolioItem from "../../../lib/ReactQuery/Hooks/Mutations/AccountSetup/useDeletePortfolioMedia";
import { COLORS } from "../../../lib/StyledComponents/themes";
import { USER } from "../../../store/atoms";
import { DELETE_ICON, PLAY_ICON } from "../../Assets/IconsConstant";
import { PROFILE_ITEMS_BACKGROUND } from "../../Assets/ImageConstant";
import Heading from "../Heading";
import IconButton from "../IconButton";
import {
  StyledMediaAudio,
  StyledMediaButtonsWrapper,
  StyledMediaCardContainer,
  StyledMediaCardVideo,
  StyledMediaImg,
  StyledMediaTitle,
} from "./style";

interface Props {
  poster?: string;
  title?: string;
  source?: string;
  alt?: string;
  image?: boolean;
  video?: boolean;
  audio?: boolean;
  size?: number;
  fontSize?: string;
  deleteable?: boolean;
  smallScreenWrap?: boolean;
  id?: string ;
}
const MediaCard = ({
  poster,
  title,
  source,
  alt,
  image,
  video,
  audio,
  size,
  fontSize,
  deleteable,
  smallScreenWrap,
  id,
}: Props) => {
  const [portfolio, setPortfolio] = useRecoilState(USER)
  const { deletePortfolioItem, isDeletingPortfolioItem } =
    useDeletePortfolioItem();

  const [videoControls, setVideoControls] = useState(false);

  const handlePlay = () => {
    console.log('source', source)
    setVideoControls(!videoControls);
  };
  const handleDelete = () => {
    deletePortfolioItem(id)
    const newPortfolios = portfolio?.portfolios?.filter((item:any) => item.id !== id)
    setPortfolio({...portfolio, portfolios:newPortfolios});
  };
  return (
    <StyledMediaCardContainer
      audio={audio}
      size={size}
      smallScreenWrap={smallScreenWrap}
    >
      {/* if video return video component */}
      {video && (
        <StyledMediaCardVideo
          src={source}
          poster={poster || PROFILE_ITEMS_BACKGROUND}
          controls={videoControls}
          size={size}
          id={id}
        >
          {/* <source src={source} type="video/mp4" /> */}
          Your browser does not support the video tag
        </StyledMediaCardVideo>
      )}

      {/* if image return image component */}

      {image && (
        <StyledMediaImg
          src={source || PROFILE_ITEMS_BACKGROUND}
          alt={alt}
          size={size}
          id={id}

        />
      )}

      {/* if audio return image component */}

      {audio && (
        <StyledMediaAudio src={source} controls={videoControls} size={size} id={id} />
      )}

      <StyledMediaTitle>
        <Heading
          color={COLORS.white}
          subTitle2
          title={title}
          fontSize={fontSize || "0.75em"}
          marginTop="0rem"
        />
      </StyledMediaTitle>
      {!videoControls && (
        <StyledMediaButtonsWrapper>
          {deleteable &&
            (isDeletingPortfolioItem ? (
              <Loader color={COLORS.dark} />
            ) : (
              <IconButton icon={DELETE_ICON} onClick={handleDelete} />
            ))}
          {(video || audio) && (
            <IconButton icon={PLAY_ICON} onClick={handlePlay} />
          )}
        </StyledMediaButtonsWrapper>
      )}
    </StyledMediaCardContainer>
  );
};

export default MediaCard;
