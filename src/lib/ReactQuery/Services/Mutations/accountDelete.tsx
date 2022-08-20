import axios from 'axios';
import { ACCOUNT_DELETE_ENDPOINT } from '../../apiRoutes';
import { HEADERS } from '../../../Config';

const accountDelete = async (navigate: (link: string) => void) => {
    console.log(`${process.env.REACT_APP_BASE_URL + ACCOUNT_DELETE_ENDPOINT}`, "ppppppp")
  axios
    .delete(`${process.env.REACT_APP_BASE_URL + ACCOUNT_DELETE_ENDPOINT}`, HEADERS)
    .then(() => {
      navigate('/sign-out');
    })
    .catch((err) => {
      console.log('delete account error', err.response);
    });
};

export default accountDelete;



// function payload(arg0: string, payload: any, HEADERS: { headers: { "Content-Type": string; Accept: string; Authorization: string } }): any {
//     throw new Error('Function not implemented.')
// }
/*

const accountSetupService = async (payload: Record<string,any>) => {
  const { data }: RequestResponse = await axios.post(
    `${process.env.REACT_APP_BASE_URL + ACCOUNT_SETUP_ENDPOINT}`,
    payload,HEADERS
  );

  return { data };
};


*/
