import axios from "axios";
import {  GET_ALL_ROLES } from "../../apiRoutes";
import {HEADERS} from '../../../Config'

const getAllRoles = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}${GET_ALL_ROLES}`, HEADERS
  );
  return response;
};

export default getAllRoles;
