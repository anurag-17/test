import axios from "axios";
import { LOGIN_ENDPOINT } from "../apiRoutes";

const loginService = async (payload: any) => {
  const {  status } = await axios.post(
    `${process.env.REACT_APP_BASE_URL + LOGIN_ENDPOINT}`,
      payload
  );
  return {  status };
};

export default loginService;
