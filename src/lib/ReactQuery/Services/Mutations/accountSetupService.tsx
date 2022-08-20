import axios from "axios";
import { HEADERS } from "../../../Config";
import { RequestResponse } from "../../../Config/types";
import { ACCOUNT_SETUP_ENDPOINT, UPDATE_PERSONAL_INFO_ENDPOINT} from "../../apiRoutes";

const accountSetupService = async (payload: Record<string,any>) => {
  const { data }: RequestResponse = await axios.post(
    `${process.env.REACT_APP_BASE_URL + ACCOUNT_SETUP_ENDPOINT}`,
    payload,HEADERS
  );

  return { data };
};

export const updatePersonalInfoService = async (payload: Record<string,any>) => {
  const { data }: RequestResponse = await axios.post(
    `${process.env.REACT_APP_BASE_URL + UPDATE_PERSONAL_INFO_ENDPOINT}`,
    payload,HEADERS
  );

  return { data };
};

export default accountSetupService;


