import { AxiosResponse } from "axios";
export interface BaseUserInterface {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export type ErrorResponse = Record<any, any>;
export type RequestResponse = AxiosResponse<any, any> | any;
