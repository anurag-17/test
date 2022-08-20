import axios from "axios";
import { RequestResponse } from "../../../Config/types";
import { LOGIN_ENDPOINT } from "../../apiRoutes";

const loginService = async (payload: Record<string, any>) => {
  const response: RequestResponse = await axios.post(
    `${process.env.REACT_APP_BASE_URL + LOGIN_ENDPOINT}`,
    payload
  );

  return response;
};

export default loginService;
