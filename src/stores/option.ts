import { atom } from 'nanostores'

export const $colorScheme = atom<"light"|"dark">("light")
