import axios from "axios"
import { HEADERS } from "../../../Config";
import { GET_ALL_FACILITY} from "../../apiRoutes";


const getAllFacilities = async() => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}${GET_ALL_FACILITY}`, HEADERS
  );
  
  return response;
}

export default getAllFacilities;