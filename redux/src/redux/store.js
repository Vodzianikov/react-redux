import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { counterReducer } from "./reducer";


export const store = legacy_createStore(counterReducer, composeWithDevTools())