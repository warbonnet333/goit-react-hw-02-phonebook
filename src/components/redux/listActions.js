import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("listReduser/addContact");
export const deleteContact = createAction("listReduser/deleteContact");
export const addFromLocalStorage = createAction(
  "listReduser/addFromLocalStorage"
);
