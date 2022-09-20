import React from "react";
import { connect } from 'react-redux'

const ADD_METRICS = "ADD_METRICS";
const REMOVE_METRICS = "REMOVE_METRICS";
const SAVE_METRICS = "SAVE_METRICS";
const EDIT_METRICS = "EDIT_METRICS";
const QUIT_METRICS = "QUIT_METRICS";

export const addMetrics = ( ) => ({
  type: ADD_METRICS,
  payload: {  }
});

export const editMetrics = (id) => ({
    type: EDIT_METRICS,
    payload:{id}
});

export const removeMetrics = id => ({
              type: REMOVE_METRICS,
              payload: { id }
});

export const saveMetrics = (id, Title, Description, Query, InputCategory, OutputCategory) => ({
  type: SAVE_METRICS,
  payload: {
    id,
    Title,
    Description,
    Query,
    InputCategory,
    OutputCategory
  }
});

export const quitMetrics = (id) => ({
    type: QUIT_METRICS,
    payload: { id }
});

export {ADD_METRICS, REMOVE_METRICS, SAVE_METRICS, EDIT_METRICS, QUIT_METRICS};