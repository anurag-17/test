import axios from 'axios';
import { GET_ACTIVE_CALLS } from '../../apiRoutes';
import { HEADERS } from '../../../Config';
import { ICastCall } from '../../../../Interface/postRoleInterface';

const getActiveCalls = async (query: ICastCall) => {
  
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}${GET_ACTIVE_CALLS}?pageNumber=${query.pageNumber}&pageSize=${query.size}`,
    HEADERS
  );
  return response;
};

export default getActiveCalls;

