import axios from "axios";
import { GET_USER_PERSONAS } from "../../apiRoutes";

const getUserPersonas = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL + GET_USER_PERSONAS}`
  );
  return response;
};

export default getUserPersonas;
