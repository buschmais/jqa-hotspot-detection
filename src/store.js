import { createStore } from "redux";
import { counterReducer } from "./features/counter/counterReducer";

const store = createStore(counterReducer)

export default store

