import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./redux/reducers/usersReducer";

let rootReducer = combineReducers({
    users: usersReducer
});

export const store = configureStore({ reducer: rootReducer });