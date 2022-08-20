import axios from "axios";
// import { HEADERS } from "../../../Config";
import { RequestResponse } from "../../../Config/types";
import { CONTACT_US_ENDPOINT } from "../../apiRoutes";

const contactUsService = async (payload: Record<string, any>) => {
  const response: RequestResponse = await axios.post(
    `${process.env.REACT_APP_BASE_URL + CONTACT_US_ENDPOINT}`,
    payload
  );

  return response;
};

export default contactUsService;
