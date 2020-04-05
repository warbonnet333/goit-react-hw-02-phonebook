import { createReducer } from "@reduxjs/toolkit";
import { fillFilter } from "./filterActions";

export default createReducer("", {
  [fillFilter]: (state, action) => action.payload,
});
