import axios from "axios";
import { IPostRole } from "../../../../Interface/postRoleInterface";
import { RequestResponse } from "../../../Config/types";
import {HEADERS} from '../../../Config'
import { POST_ROLE_ENDPOINT } from "../../apiRoutes";

const createPostRole = async (payload: IPostRole) => {
  const { data }: RequestResponse = await axios.post(
    `${process.env.REACT_APP_BASE_URL + POST_ROLE_ENDPOINT}`,
    payload,
    HEADERS
  );

  return { data };
};

export default createPostRole;
