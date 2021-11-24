import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import actions from "./actions";

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  filter,
});
