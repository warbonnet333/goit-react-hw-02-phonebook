import { Type } from "./listActions";

export const fillFilter = (event) => {
  return {
    type: Type.FILL_FILTER,
    payload: event.target.value,
  };
};
