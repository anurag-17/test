import axios from "axios";
import { IforgotPassword } from "../../../../Interface/createAccountInterface";
import { RequestResponse } from "../../../Config/types";
import { FORGOT_PASSWORD_ENDPOINT } from "../../apiRoutes";

const forgotPasswordService = async (payload: IforgotPassword) => {
  const response: RequestResponse = await axios.get(
    `${process.env.REACT_APP_BASE_URL + FORGOT_PASSWORD_ENDPOINT}`,
    { params: payload }
  );

  return response;
};

export default forgotPasswordService;
