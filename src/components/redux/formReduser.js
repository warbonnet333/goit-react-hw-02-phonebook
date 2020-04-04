import { Type } from "./formActions";
import { combineReducers } from "redux";

const fillFormReduser = (state = "", action) => {
  switch (action.type) {
    case Type.FILL_NAME:
      return action.payload;

    // case Type.FILL_NUMBER:
    //   return action.payload;

    default:
      return state;
  }
};

const fillNumberReduser = (state = "", { type, payload }) => {
  switch (type) {
    case Type.FILL_NUMBER:
      return payload;

    default:
      return state;
  }
};

const formReduser = combineReducers({
  name: fillFormReduser,
  number: fillNumberReduser
});

export default formReduser;
