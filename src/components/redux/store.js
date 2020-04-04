import { createStore, combineReducers } from "redux";
import listReduser from "./listReduser";
import formReduser from './formReduser'
import { devToolsEnhancer } from "redux-devtools-extension";

const rootReduser = combineReducers({
  contacts: listReduser,
  form: formReduser,
  // filter: filterReduser,
  // isAlertOpen: alertReduser,
  existedName: listReduser
});

const store = createStore(rootReduser, devToolsEnhancer());

export default store;
