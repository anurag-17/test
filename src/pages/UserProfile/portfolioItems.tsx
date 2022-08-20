import React from 'react'
import { useQuery } from 'react-query';
import Grid from "../../components/Common/Grid";
import Heading from "../../components/Common/Heading";
import { MediaCard } from "../../components/Common/MediaCard";
import { getPortfolioAudioService, getPortfolioImageService, getPortfolioVideoService } from '../../lib/ReactQuery/Services/Query/getPortfolioItems';
import { COLORS } from "../../lib/StyledComponents/themes";
import { PortfolioItemsWrapper } from "./style";

const PortfolioItems = () => {

  const { data } = useQuery("GET_AUDIOS", () => getPortfolioAudioService());
  console.log(data)

  const { data: videos } = useQuery("GET_VIDEOS", () => getPortfolioVideoService());
  console.log(videos)

  const { data: image } = useQuery("GET_IMAGE", () => getPortfolioImageService());
  console.log(image)

  return (
    <Grid mt={5} gap={15}>
      <Heading title="Portfolio Items" marginTop="0rem" />

      <Grid item column>
        <Heading
          fontSize="0.75em"
          fontWeight={600}
          color={COLORS.grey}
          title="VIDEO FILES"
          marginTop="0rem"
        />
        <PortfolioItemsWrapper>
          {videos && videos.data && videos.data.content.length && videos.data.content.slice(0, 4).map((video: any, index: number) => (

            <MediaCard
              key={index}
              // title={filteredPortfolio.portfolioTitle}
              source={video.portfolioUrl}
              video
              id={video.id}

            />
          ))}
        </PortfolioItemsWrapper>
      </Grid>

      <Grid>
        <Heading
          fontSize="0.75em"
          fontWeight={600}
          color={COLORS.grey}
          title="IMAGES FILES"
          marginTop="0rem"
        />
        <PortfolioItemsWrapper>
          {image && image.data && image.data.content.length && image.data.content.slice(0, 4).map((image: any, index: number) => (
            <MediaCard
              smallScreenWrap
              image
              size={110}
              key={index}
              // title={image.portfolioTitle}
              source={image.portfolioUrl}
            />
          ))}
        </PortfolioItemsWrapper>
      </Grid>

      <Grid>
        <Heading
          fontSize="0.75em"
          fontWeight={600}
          color={COLORS.grey}
          title="AUDIO FILES"
          marginTop="0rem"
        />
        <PortfolioItemsWrapper>
          {data && data.data && data.data.content.length && data.data.content.slice(0, 4).map((audio: any, index: number) => (
            <MediaCard
              smallScreenWrap
              size={110}
              key={index}
              // title={audio.portfolioTitle}
              audio
              source={audio.portfolioUrl}
            />
          ))}
        </PortfolioItemsWrapper>
      </Grid>
    </Grid>
  );
};

export default PortfolioItems;
