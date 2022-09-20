import { ADD_METRICS, REMOVE_METRICS, SAVE_METRICS } from "./metricsActions";

const initialState = {
  allIds: [],
  byIds: {},
  current: null,
  nextMetricsId: 0
};

const metricsReducer = function(state = initialState, action) {
  switch (action.type) {
    case ADD_METRICS: {
        alert("Reducer")
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
    case SAVE_METRICS: {
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