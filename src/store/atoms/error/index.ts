import {atom} from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const ERROR_STATE = atom({
    key: 'errorSate',
    default: false,

})
export const ERROR_MESSAGE_STATE = atom({
    key: 'errorMessageSate',
    default: '',
    effects_UNSTABLE: [persistAtom],

})
