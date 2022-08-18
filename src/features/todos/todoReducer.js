import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./todoActions";

const initialState = {
  allIds: [],
  byIds: {}
};

const todoReducer = function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, mName, testinput } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            id,
            mName,
            testinput,
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
      const { id } = action.payload;
      const allIds = state.allIds.filter((todoId) => todoId !== id);
      const { [id]: removedTodo, ...byIds } = state.byIds;
      return {
        ...state,
        allIds: allIds,
        byIds: byIds
      }
    }
    default:
      return state;
  }
}

export { todoReducer };