import { ADD_VISUALIZATIONS,
//TOGGLE_VISUALIZATIONS,
REMOVE_VISUALIZATIONS, EDIT_VISUALIZATIONS } from "./visualActions";

const initialState = {
  allIds: [],
  byIds: {},
  current: null
};

const visualReducer = function(state = initialState, action) {
  switch (action.type) {
    case ADD_VISUALIZATIONS: {
      const { id, Title, InputCategory, OutputCategory, VisualizationType } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            id,
            Title,
            InputCategory,
            OutputCategory,
            VisualizationType,
            completed: false
          }
        }
      };
    };
    //case TOGGLE_VISUALIZATIONS: {
    //  const { id } = action.payload;
    //  return {
    //    ...state,
    //    byIds: {
    //      ...state.byIds,
    //      [id]: {
    //        ...state.byIds[id],
    //        completed: !state.byIds[id].completed
    //      }
    //    }
    //  };
    //}
    case REMOVE_VISUALIZATIONS: {
        if (window.confirm("Visualisierung aus der Liste entfernen?") === true) {
      const { id } = action.payload;
      const allIds = state.allIds.filter((visualizationsId) => visualizationsId !== id);
      const { [id]: removeVisualizations, ...byIds } = state.byIds;
      return {
        ...state,
        allIds: allIds,
        byIds: byIds
      }}
        else {}
    }
    case EDIT_VISUALIZATIONS: {
      if (window.confirm("Visualisierung bearbeiten?") === true) {
      const { id, Title, InputCategory, OutputCategory, VisualizationType, completed } = action.payload;
            return {
              ...state,
              allIds: [...state.allIds, id],
              byIds: {
                ...state.byIds,
                [id]: {
                  id,
                  Title,
                  InputCategory,
                  OutputCategory,
                  VisualizationType,
                  completed
                }
              }}}
      else {}
        };
    default:
      return state;
  }
}

export { visualReducer };