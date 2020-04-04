import { Type } from './listActions'

const filterReduser = (state = "", { type, payload }) => {
    switch (type) {
        case Type.FILL_FILTER:
            return {
                payload
            }

        default:
            return state
    }
}

export default filterReduser