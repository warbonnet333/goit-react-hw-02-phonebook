import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, addFromLocalStorage } from "./listActions";

export default createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
  [addFromLocalStorage]: (state, action) => [...state, ...action.payload],
});
