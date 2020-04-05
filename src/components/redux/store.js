import { configureStore } from "@reduxjs/toolkit";
import listReduser from "./listReduser";
import alertReduser from "./alertReduser";
import filterReduser from "./filterReduser";

const store = configureStore({
  reducer: {
    contacts: listReduser,
    alert: alertReduser,
    filter: filterReduser,
  },
});

export default store;
