import { ADD_METRICS,
//TOGGLE_METRICS,
REMOVE_METRICS, EDIT_METRICS } from "./metricsActions";

const initialState = {
  allIds: [],
  byIds: {},
  current: null
};

const metricsReducer = function(state = initialState, action) {
  switch (action.type) {
    case ADD_METRICS: {
      const { id, Title, Description, Query, InputCategory, OutputCategory } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            id,
            Title,
            Description,
            Query,
            InputCategory,
            OutputCategory,
            completed: false
          }
        }
      };
    };
    //case TOGGLE_METRICS: {
    //  const { id } = action.payload;
     // return {
   //     ...state,
   //     byIds: {
   //       ...state.byIds,
   //       [id]: {
   //         ...state.byIds[id],
   //         completed: !state.byIds[id].completed
   //       }
   //     }
   //   };
   // }
    case REMOVE_METRICS: {
        if (window.confirm("Kennzahl aus der Liste entfernen?") === true) {
      const { id } = action.payload;
      const allIds = state.allIds.filter((metricsId) => metricsId !== id);
      const { [id]: removeMetrics, ...byIds } = state.byIds;
      return {
        ...state,
        allIds: allIds,
        byIds: byIds
      }}
        else {}
    }
    case EDIT_METRICS: {
      if (window.confirm("Kennzahl bearbeiten?") === true) {
      const { id, Title, Description, Query, InputCategory, OutputCategory, completed } = action.payload;
            return {
              ...state,
              allIds: [...state.allIds, id],
              byIds: {
                ...state.byIds,
                [id]: {
                  id,
                  Title,
                  Description,
                  Query,
                  InputCategory,
                  OutputCategory,
                  completed
                }
              }}}
      else {}
        };
    default:
      return state;
  }
}

export { metricsReducer };