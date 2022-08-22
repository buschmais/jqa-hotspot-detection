import { createStore } from "redux";
import { combineReducers } from "redux";
import { counterReducer } from "./features/counter/counterReducer";
import { metricsReducer } from "./features/metrics/metricsReducer";

const rootReducer = combineReducers({counter: counterReducer, item: metricsReducer})
const store = createStore(rootReducer)

export default store

