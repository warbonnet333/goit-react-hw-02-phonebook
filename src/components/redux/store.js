import { createStore, combineReducers } from "redux";
import listReduser from "./listReduser";
import alertReduser from "./alertReduser";
import filterReduser from "./filterReduser";
import { devToolsEnhancer } from "redux-devtools-extension";

const rootReduser = combineReducers({
  contacts: listReduser,
  alert: alertReduser,
  filter: filterReduser,
});

const store = createStore(rootReduser, devToolsEnhancer());

export default store;
