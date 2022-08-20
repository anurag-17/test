import axios from "axios";
import {  GET_ALL_TALENT } from "../../apiRoutes";
import {HEADERS} from '../../../Config'

const getAllTalents = async (query: any) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}${GET_ALL_TALENT}?pageNumber=${
      query.pageNumber || 0
    }&pageSize=${10}`,
    HEADERS
  );
  return response;
};

export default getAllTalents;
