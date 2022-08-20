import axios from "axios";
import {  GET_FACILITIES, GET_SEARCH_FACILITIES } from "../../apiRoutes";
import {HEADERS} from '../../../Config'
import { IFacility } from "../../../../Interface/postRoleInterface";

const getFacilities = async (query: IFacility) => {
  const url = !query.typeOfAsset ? `${GET_FACILITIES}?pageNumber=${query.pageNumber || 0}&pageSize=${12}` : `${GET_SEARCH_FACILITIES}?pageNumber=${query.pageNumber}&pageSize=${12}&state=${query.state}&typeOfAsset=${query.typeOfAsset}`
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}${url}`, HEADERS
  );
  return response;
};

export default getFacilities;

