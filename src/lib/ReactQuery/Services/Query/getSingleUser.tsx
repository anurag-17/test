import axios from "axios";
import {GET_LOGGEDIN_USER_ENDPOINT} from '../../apiRoutes'
import { HEADERS } from '../../../Config';


const getSingleUser = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL + GET_LOGGEDIN_USER_ENDPOINT}`,
      HEADERS
    );
    return response;
  };
  
  export default getSingleUser;