import axios from "axios";
import { IPostFacility } from "../../../../Interface/postFacilityInterface";
import { HEADERS } from "../../../Config";
import { RequestResponse } from "../../../Config/types";
import { POST_FACILITY_ENDPOINT } from "../../apiRoutes";


const createPostFacilities = async(payload: IPostFacility) => {
  const {data}: RequestResponse = await axios.post(
    `${process.env.REACT_APP_BASE_URL + POST_FACILITY_ENDPOINT}`,
    payload,
    HEADERS
  )
  return { data};
}
export default createPostFacilities;