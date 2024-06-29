import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';

import authRed from "./reducers/authRed";

const rootReducer = combineReducers({
    auth : authRed,
});

const mainRedux = configureStore({
    reducer: rootReducer,
    middleware: [ReduxThunk],
  });

export default mainRedux;