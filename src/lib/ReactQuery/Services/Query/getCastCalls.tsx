import axios from "axios";
import {  GET_CAST_CALLS_ENDPOINT } from "../../apiRoutes";
import {HEADERS} from '../../../Config'

const getCastCalls = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}${GET_CAST_CALLS_ENDPOINT}`, HEADERS
  );
  return response;
};

export default getCastCalls;
