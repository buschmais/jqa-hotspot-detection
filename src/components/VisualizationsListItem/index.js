import React from "react";
import { connect } from "react-redux";
import { removeVisualizations, toggleVisualizations, editVisualizations } from "../../features/visualizations/visualActions";
import styled from 'styled-components';
import Icon from "react-crud-icons";
import "../react-crud-icons.css";


const VisualizationsListItem = ({item, removeVisualizations, toggleVisualizations, editVisualizations}) => (
  <tr className="visualizations-item" >
    <td onClick={() => toggleVisualizations(item.id)}>
        {item && item.completed ? "👌" : "👋"}{" "}
    </td>
    <td>
          {item.Title}
    </td>

    <td>
          {item.InputCategory}
    </td>
    <td>
          {item.OutputCategory}
    </td>
    <td>
          {item.VisualizationType}
        </td>
    <td>
      <button className="edit" onClick={() => editVisualizations(item.id)}>
        <Icon
              name = "edit"
              tooltip = "Visualisierung bearbeiten."
              theme = "light"
              size = "small"
            />
      </button>
    </td>
    <td>
      <button className="destroy" onClick={() => removeVisualizations(item.id)}>
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
