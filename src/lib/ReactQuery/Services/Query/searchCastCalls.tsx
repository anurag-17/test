import axios from "axios";
import { HEADERS } from "../../../Config";
import { SEARCH_CALL } from "../../apiRoutes";
import { ISearchCastCalls } from "../../../../Interface/postRoleInterface";


const handleGetFindCastCalls = async (query: ISearchCastCalls) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}${SEARCH_CALL}?projectType=${query.projectType}&projectName=${query.projectName}`,
    HEADERS
  );
  return response.data.content;
};

export default handleGetFindCastCalls;
