import axios from "axios";
import {  GET_ALL_APPLICANT } from "../../apiRoutes";
import { SINGLE_CAST_CALL } from "../../../../lib/Config/constants";
import {HEADERS} from '../../../Config'

const getAllApplicants:any = async ( query: any) => {
  const singleCast: any = localStorage.getItem(SINGLE_CAST_CALL)
  const datas = JSON.parse(singleCast)
  const castCallId = datas.id
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}${GET_ALL_APPLICANT}/${castCallId}?pageNumber=${query.pageNumber || 0}&pageSize=${12}`, HEADERS
  );
  return response;
};

export default getAllApplicants;
