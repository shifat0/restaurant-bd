import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Reducer } from "./Reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(Reducer, applyMiddleware(logger, thunk));

export default store;
