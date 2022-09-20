import { ADD_METRICS, REMOVE_METRICS, SAVE_METRICS, EDIT_METRICS, QUIT_METRICS } from "./metricsActions";

const initialState = {
  allIds: [],
  byIds: {},
  current: null,
  nextMetricsId: 0
};

const metricsReducer = function(state = initialState, action) {
  switch (action.type) {
    case ADD_METRICS: {
      const id = state.nextMetricsId;
      return {
        ...state,
        current: {
          id,
          Title:"",
          Description:"",
          Query:"",
          InputCategory:"",
          OutputCategory:""
        },
        nextMetricsId: id+1
      }
    };
    case EDIT_METRICS: {
        const { id } = action.payload;
        return{
            ...state,
            current: state.byIds[id]
        }
    }
    case REMOVE_METRICS: {
      const { id } = action.payload;
      const allIds = state.allIds.filter((metricsId) => metricsId !== id);
      const { [id]: removeMetrics, ...byIds } = state.byIds;
      return {
        ...state,
        allIds: allIds,
        byIds: byIds
      }
    }
    case SAVE_METRICS: {
      const { id, Title, Description, Query, InputCategory, OutputCategory } = action.payload;
      console.log(action.payload)
      const byIds = {
        ...state.byIds,
        [id]: {
        id,
        Title,
        Description,
        Query,
        InputCategory,
        OutputCategory
        }
      };
      const allIds = state.byIds[id] ? state.allIds : [...state.allIds, id];
            return {
              ...state,
              allIds: allIds,
              byIds: byIds,
              current: null
            }
      }
    case QUIT_METRICS: {
        const { id } = action.payload;
        const allIds = state.allIds.filter((metricsId) => metricsId !== id);
        const { [id]: removeMetrics, ...byIds } = state.byIds;
              return {
                ...state,
                allIds: allIds,
                byIds: byIds,
                current: null
              }
    };
    default:
      return state;
  }
}

export { metricsReducer };