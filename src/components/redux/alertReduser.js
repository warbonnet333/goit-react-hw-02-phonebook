import { Type } from "./listActions"

const toggleAlert = (state =
    {
        showAlert: false
    },
    { type, payload }) => {

    switch (type) {
        case Type.OPEN_EXISET_ALERT:
            return {
                showAlert: true,
                existedName: payload
            }
        case Type.CLOSE_EXISET_ALERT:
            return {
                showAlert: false
            }

        default:
            return state
    }
}

export default toggleAlert