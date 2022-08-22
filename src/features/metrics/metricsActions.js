const ADD_METRICS = "ADD_METRICS";
const TOGGLE_METRICS = "TOGGLE_METRICS";
const REMOVE_METRICS = "REMOVE_METRICS";

let nextMetricsId = 0

export const addMetrics = (Title, Description, Query, InputCategory, OutputCategory) => ({
  type: ADD_METRICS,
  payload: {
    id: ++nextMetricsId,
    Title,
    Description,
    Query,
    InputCategory,
    OutputCategory
  }
});

export const toggleMetrics = id => ({
  type: TOGGLE_METRICS,
  payload: { id }
});

export const removeMetrics = id => ({
  type: REMOVE_METRICS,
  payload: { id }
});

export { ADD_METRICS, TOGGLE_METRICS, REMOVE_METRICS };