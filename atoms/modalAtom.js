import {atom} from "recoil"

//create and name a recoil state
export const modalState = atom({
    key: 'modalState',
    default: false,
})