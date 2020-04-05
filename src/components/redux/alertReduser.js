import { createReducer } from "@reduxjs/toolkit";
import { switchAlert, closeAlert } from "./alertActions";

export default createReducer(
  { showAlert: false },
  {
    [switchAlert]: (state, action) => ({
      showAlert: true,
      existedName: action.payload,
    }),
    [closeAlert]: (state, action) => ({ showAlert: false }),
  }
);
