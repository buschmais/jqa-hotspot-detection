import { createStore } from "redux";
import { combineReducers } from "redux";
import { counterReducer } from "./features/counter/counterReducer";
import { metricsReducer } from "./features/metrics/metricsReducer";
import { visualReducer } from "./features/visualizations/visualReducer";

const rootReducer = combineReducers({ counter: counterReducer, metrics: metricsReducer, visualizations:visualReducer})
const store = createStore(rootReducer)

export default store

