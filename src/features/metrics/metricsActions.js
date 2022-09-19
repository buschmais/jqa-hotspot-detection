import React from "react";
import { connect } from 'react-redux'

const ADD_METRICS = "ADD_METRICS";
//const TOGGLE_METRICS = "TOGGLE_METRICS";
const REMOVE_METRICS = "REMOVE_METRICS";
const EDIT_METRICS = "EDIT_METRICS";

let nextMetricsId = 0

export const saveMetrics = (Title, Description, Query, InputCategory, OutputCategory) => ({
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

//export const toggleMetrics = id => ({
//  type: TOGGLE_METRICS,
//  payload: { id }
//});

export const removeMetrics = id => ({
              type: REMOVE_METRICS,
              payload: { id }
});

export const editMetrics = (id, Title, Description, Query, InputCategory, OutputCategory, completed) => ({
  type: EDIT_METRICS,
  payload: {
    id,
    Title,
    Description,
    Query,
    InputCategory,
    OutputCategory,
    completed
  }
});

export {
//TOGGLE_METRICS,
ADD_METRICS, REMOVE_METRICS, EDIT_METRICS };