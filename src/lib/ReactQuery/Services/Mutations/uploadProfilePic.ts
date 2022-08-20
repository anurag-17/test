import axios from "axios";
import {  HEADERS_IMAGE } from "../../../Config";
import { RequestResponse } from "../../../Config/types";
import {  UPLOAD_PROFILE_PIC_ENDPOINT} from "../../apiRoutes";

const uploadProfilePicService = async (payload: any) => {
  const { data }: RequestResponse = await axios.post(
    `${process.env.REACT_APP_BASE_URL + UPLOAD_PROFILE_PIC_ENDPOINT}`,
    payload,HEADERS_IMAGE
  );

  return { data };
};

export default uploadProfilePicService;
