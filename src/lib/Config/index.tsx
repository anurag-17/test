import { TOKEN_KEY } from "./constants";


export const getToken = ()=>{

  let token: string | any = localStorage.getItem(TOKEN_KEY)

  return token

}
const token = getToken()

export const HEADERS = {
  headers: {
    "Content-Type": "application/json",
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`
    // 'authorization': `Bearer ${getToken()}`
  },
};

export const HEADERS_IMAGE = {
  headers: {
    "Content-Type": "multipart/form-data",
    'accept': '*/*',
    'Authorization': `Bearer ${token}`
  },
};
