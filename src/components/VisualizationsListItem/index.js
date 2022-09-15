import React from "react";
import { connect } from "react-redux";
import { removeVisualizations, toggleVisualizations, editVisualizations } from "../../features/visualizations/visualActions";
import styled from 'styled-components';
import Icon from "react-crud-icons";
import "../react-crud-icons.css";


const VisualizationsListItem = ({visualizations, removeVisualizations, toggleVisualizations, editVisualizations}) => (
  <tr className="visualizations-item" >
    <td onClick={() => toggleVisualizations(visualizations.id)}>
        {visualizations && visualizations.completed ? "👌" : "👋"}{" "}
    </td>
    <td>
          {visualizations.Title}
    </td>

    <td>
          {visualizations.InputCategory}
    </td>
    <td>
          {visualizations.OutputCategory}
    </td>
    <td>
          {visualizations.VisualizationType}
        </td>
    <td>
      <button className="edit" onClick={() => editVisualizations(visualizations.id)}>
        <Icon
              name = "edit"
              tooltip = "Visualisierung bearbeiten."
              theme = "light"
              size = "small"
            />
      </button>
    </td>
    <td>
      <button className="destroy" onClick={() => removeVisualizations(visualizations.id)}>
        <Icon
                  name = "close"
                  tooltip = "Visualisierung löschen."
                  theme = "light"
                  size = "small"
                />
      </button>
    </td>
  </tr>
)

export default connect(
  null,
  { toggleVisualizations, removeVisualizations, editVisualizations }
)(VisualizationsListItem);
