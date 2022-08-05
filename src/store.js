import { createStore } from "redux";
import { combineReducers } from "redux";
import { counterReducer } from "./features/counter/counterReducer";
import { todoReducer } from "./features/todos/todoReducer";

const rootReducer = combineReducers({counter: counterReducer, todo: todoReducer})
const store = createStore(rootReducer)

export default store

