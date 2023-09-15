import { combineReducers } from "@reduxjs/toolkit";

import { friendListSlice } from "@/entities/friendList";

export const rootReducer = combineReducers({
  [friendListSlice.name]: friendListSlice.reducer,
});
