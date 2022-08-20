import axios from "axios";
import { HEADERS } from "../../../Config";
import { RequestResponse } from "../../../Config/types";
import {  PERSONA_SETUP_ENDPOINT} from "../../apiRoutes";

const personaSetupService = async (payload: Record<string,any>) => {
  const { data }: RequestResponse = await axios.post(
    `${process.env.REACT_APP_BASE_URL + PERSONA_SETUP_ENDPOINT}`,
    payload,HEADERS
  );

  return { data };
};

export default personaSetupService;
