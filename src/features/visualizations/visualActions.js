import React from "react";
import { connect } from 'react-redux'

const ADD_VISUALIZATIONS = "ADD_VISUALIZATIONS";
const TOGGLE_VISUALIZATIONS = "TOGGLE_VISUALIZATIONS";
const REMOVE_VISUALIZATIONS = "REMOVE_VISUALIZATIONS";
const EDIT_VISUALIZATIONS = "EDIT_VISUALIZATIONS";

let nextVisualizationsId = 0

export const saveVisualizations = (Title, InputCategory, OutputCategory, VisualizationType) => ({
  type: ADD_VISUALIZATIONS,
  payload: {
    id: ++nextVisualizationsId,
    Title,
    InputCategory,
    OutputCategory,
    VisualizationType
  }
});

export const toggleVisualizations = id => ({
  type: TOGGLE_VISUALIZATIONS,
  payload: { id }
});

export const removeVisualizations = id => ({
              type: REMOVE_VISUALIZATIONS,
              payload: { id }
});

export const editVisualizations = (id, Title, InputCategory, OutputCategory, VisualizationType, completed) => ({
  type: EDIT_VISUALIZATIONS,
  payload: {
    id,
    Title,
    InputCategory,
    OutputCategory,
    VisualizationType,
    completed
  }
});

export { ADD_VISUALIZATIONS, TOGGLE_VISUALIZATIONS, REMOVE_VISUALIZATIONS, EDIT_VISUALIZATIONS };