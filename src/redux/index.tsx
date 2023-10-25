import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authReducer";
import { USER_LOGOUT } from "../actions/dispatchTypes";
import homeReducer from "./homeReducer";


const middleware = [thunk];

const reducers = combineReducers({
  auth: authReducer,
  home: homeReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === USER_LOGOUT) {
    return reducers(undefined, action);
  }
  return reducers(state, action);
};

const store = configureStore({ reducer: rootReducer, middleware });

export default store;
