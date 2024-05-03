import { atom } from 'recoil'

export const coursesAtom = atom({
    key: 'courseAtom',
    default: []
})

export const queryAtom = atom({
    key: 'queryAtom',
    default: ""
})