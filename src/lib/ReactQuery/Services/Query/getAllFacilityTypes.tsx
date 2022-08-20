import axios from "axios"
import { HEADERS } from "../../../Config";
import {GET_ALL_FACILITY_TYPES } from "../../apiRoutes";


const getAllFacilityTypes = async() => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL + GET_ALL_FACILITY_TYPES}`, HEADERS
  );
  console.log(response);
  return response;
  
}

export default getAllFacilityTypes;