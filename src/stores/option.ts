import { atom } from 'nanostores'

export const $colorScheme = atom<"light"|"dark"|undefined>()
export const $isMobile = atom<boolean>(false)