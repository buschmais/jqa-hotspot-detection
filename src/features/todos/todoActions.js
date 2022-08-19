const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const REMOVE_TODO = "REMOVE_TODO";

let nextTodoId = 0

export const addTodo = (MTitle, MDescr, MQuery, MInput, MOutput) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    MTitle,
    MDescr,
    MQuery,
    MInput,
    MOutput
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: { id }
});

export { ADD_TODO, TOGGLE_TODO, REMOVE_TODO };