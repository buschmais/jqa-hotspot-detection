import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./todoActions";

const initialState = {
  allIds: [],
  byIds: {}
};

const todoReducer = function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            id,
            content,
            completed: false
          }
        }
      };
    };
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    case REMOVE_TODO: {
          return state((todo) => todo.id !== action.payload)
    }
    default:
      return state;
  }
}

export { todoReducer };