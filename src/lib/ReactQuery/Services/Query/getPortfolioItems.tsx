import axios from "axios";
import { HEADERS, HEADERS_IMAGE } from "../../../Config";
import { RequestResponse } from "../../../Config/types";
import { DELETE_PORTFOLIO_ENDPOINT, GET_PORTFOLIO_AUDIO_ENDPOINT,  GET_PORTFOLIO_IMAGE_ENDPOINT, GET_PORTFOLIO_VIDEO_ENDPOINT} from "../../apiRoutes";

export const getPortfolioAudioService = async () => {
  const { data }: RequestResponse = await axios.get(
    `${process.env.REACT_APP_BASE_URL + GET_PORTFOLIO_AUDIO_ENDPOINT}`,
    HEADERS_IMAGE
  );

  return { data };
};

export const getPortfolioVideoService = async () => {
  const { data}: RequestResponse = await axios.get(
    `${process.env.REACT_APP_BASE_URL + GET_PORTFOLIO_VIDEO_ENDPOINT}`,
    HEADERS_IMAGE
  );

  return { data};
};

export const getPortfolioImageService = async () => {
  const { data }: RequestResponse = await axios.get(
    `${process.env.REACT_APP_BASE_URL + GET_PORTFOLIO_IMAGE_ENDPOINT}`,
HEADERS_IMAGE
  );

  return { data};
};

export const deletePortfolioService = async (id?:string) => {
  const { data }: RequestResponse = await axios.delete(
    `${process.env.REACT_APP_BASE_URL +  DELETE_PORTFOLIO_ENDPOINT+id}`,HEADERS
  );

  return { data };
};


