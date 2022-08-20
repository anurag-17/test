import { atom } from "recoil";
import { PROFILE_PIC_ATOM, USER_STATE_KEY } from "../../../lib/Config/constants";
import { userDefault } from "../../InitialState/credentials";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()


export const USER = atom({
  key: USER_STATE_KEY,
  default: { ...userDefault },
  effects_UNSTABLE: [persistAtom],
});

export const initialProfilePicState = atom({
  key: PROFILE_PIC_ATOM,
  default: "",
  effects_UNSTABLE: [persistAtom],
});



// USER is an atom, which represents a pice of state