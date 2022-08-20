import axios from "axios";
import { IresetPassword } from "../../../../Interface/createAccountInterface";
import { HEADERS } from "../../../Config";
// import { TOKEN_KEY } from "../../../Config/constants";
import { RequestResponse } from "../../../Config/types";
import { RESET_PASSWORD_ENDPOINT } from "../../apiRoutes";

const resetPasswordService = async (payload: IresetPassword) => {
  // const token = localStorage.getItem(TOKEN_KEY) || "";
  const response: RequestResponse = await axios.put(
    `${process.env.REACT_APP_BASE_URL + RESET_PASSWORD_ENDPOINT}`,
    payload,
    HEADERS
  );

  return response;
};

export default resetPasswordService;
