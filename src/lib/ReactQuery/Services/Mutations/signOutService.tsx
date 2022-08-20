import axios from "axios";
import { IsignOut } from "../../../../Interface/signOutInterface";
import { RequestResponse } from "../../../Config/types";
import { SIGN_OUT_ENDPOINT } from "../../apiRoutes";

const signOutService = async (payload: IsignOut) => {
  const response: RequestResponse = await axios.post(
    `${process.env.REACT_APP_BASE_URL + SIGN_OUT_ENDPOINT}`,
    payload
  );

  return response;
};

export default signOutService;
