import axios from "axios";
import {GET_LOGGEDIN_USER_ENDPOINT} from '../../apiRoutes'
import { HEADERS } from '../../../Config';

// API CALL
 export const viewUserProfile  = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL + GET_LOGGEDIN_USER_ENDPOINT}`,
      HEADERS
    );
    console.log(response)
    return response;
  };
  