import axios from 'axios';
import { ICreateAccount } from '../../../../Interface/createAccountInterface';
import { RequestResponse } from '../../../Config/types';
import { SIGN_UP_ENDPOINT } from '../../apiRoutes';

const createAccountService = async (payload: ICreateAccount) => {
  const { data }: RequestResponse = await axios.post(
    `${process.env.REACT_APP_BASE_URL + SIGN_UP_ENDPOINT}`,
    payload
  );

  return { data };
};

export default createAccountService;
