import { Type } from "./listActions";

const listReduser = (state = [], { type, payload }) => {
  switch (type) {
    case Type.DELETE_CONTACT:
      return state.filter(item => item.id !== payload);

    case Type.ADD_CONTACT:
      return [...state, payload];

    default:
      return state;
  }
};

export default listReduser;
