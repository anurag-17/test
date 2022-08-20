import { atom } from "recoil";
import { TOKEN_STATE } from "../../../lib/Config/constants";

const tokenDefault = "";
export const GET_TOKEN = atom({
  key: TOKEN_STATE,
  default: tokenDefault,
});
