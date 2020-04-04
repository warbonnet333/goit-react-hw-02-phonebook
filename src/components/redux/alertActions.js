import { Type } from "./listActions"

export const switchAlert = name => {
    return {
        type: Type.OPEN_EXISET_ALERT,
        payload: name
    }
}

export const closeAlert = () => {
    return {
        type: Type.CLOSE_EXISET_ALERT,
    }
}