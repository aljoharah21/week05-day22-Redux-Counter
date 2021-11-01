import { createStore, combineReducers } from "redux";

import counter from "./Counter";
// { user } === { user: user }
const reducers = combineReducers({ counter });

const store = createStore(reducers);

export default store;