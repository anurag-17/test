import axios from "axios";
import {  HEADERS, HEADERS_IMAGE } from "../../../Config";
import { RequestResponse } from "../../../Config/types";
import {  DELETE_PORTFOLIO_ENDPOINT, UPLOAD_PORTFOLIO_AUDIO_ENDPOINT, UPLOAD_PORTFOLIO_ENDPOINT, UPLOAD_PORTFOLIO_PIC_ENDPOINT,  UPLOAD_PORTFOLIO_VIDEO_ENDPOINT} from "../../apiRoutes";

export const uploadPortfolioMediaService = async (payload: FormData) => {
  const { data }: RequestResponse = await axios.post(
    `${process.env.REACT_APP_BASE_URL + UPLOAD_PORTFOLIO_ENDPOINT}`,
    payload,HEADERS_IMAGE
  );

  return { data };
};

export const uploadPortfolioVideoService = async (payload: FormData) => {
  const { data }: RequestResponse = await axios.post(
    `${process.env.REACT_APP_BASE_URL + UPLOAD_PORTFOLIO_VIDEO_ENDPOINT}`,
    payload,HEADERS_IMAGE
  );

  return { data };
};

export const uploadPortfolioImageService = async (payload: FormData) => {
  const { data }: RequestResponse = await axios.post(
    `${process.env.REACT_APP_BASE_URL + UPLOAD_PORTFOLIO_PIC_ENDPOINT}`,
    payload,HEADERS_IMAGE
  );

  return { data };
};


export const uploadPortfolioAudioService = async (payload: FormData) => {
  const { data }: RequestResponse = await axios.post(
    `${process.env.REACT_APP_BASE_URL +  UPLOAD_PORTFOLIO_AUDIO_ENDPOINT}`,
    payload,HEADERS_IMAGE
  );

  return { data };
};


export const deletePortfolioService = async (id?:string) => {
  const { data }: RequestResponse = await axios.delete(
    `${process.env.REACT_APP_BASE_URL +  DELETE_PORTFOLIO_ENDPOINT+id}`,HEADERS
  );

  return { data };
};