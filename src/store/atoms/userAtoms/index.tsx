import { atom } from "recoil";

import { ACTIVE_CALLS, GET_ROLES, SEARCH_ROLES, SEARCH_CALLS, GET_TALENTS, GET_APPLICANT, FACILITY } from "../../../lib/Config/constants";


export const ACTIVECALLS = atom({
  key: `${ACTIVE_CALLS}`,
  default: [],
});

export const ALLROLES = atom({
  key: `${GET_ROLES}`,
  default: [],
});

export const SEARCHROLES = atom({
  key: `${SEARCH_ROLES}`,
  default: [],
});
export const SEARCHCALLS = atom({
  key: `${SEARCH_CALLS}`,
  default: [],
});
export const ALLTALENTS = atom({
  key: `${GET_TALENTS}`,
  default: [],
});


export const ALLAPPLICANT = atom({
  key: `${GET_APPLICANT}`,
  default: [],
});
export const FACILITIES = atom({
  key: `${FACILITY}`,
  default: [],
});


