import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger/src";

import modalReducer from './modal'
import photoReducer from './photo'

const logger = createLogger({
  diff: true,
  collapsed: true,
});
const rootReducer = combineReducers({
  photo: photoReducer,
  modal: modalReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
