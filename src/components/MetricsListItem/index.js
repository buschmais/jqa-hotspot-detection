import React from "react";
import { connect } from "react-redux";
import { removeMetrics, editMetrics } from "../../features/metrics/metricsActions";
import styled from 'styled-components';
import Icon from "react-crud-icons";
import "../react-crud-icons.css";

const MetricsListItem = ({metrics, removeMetrics, toggleMetrics, editMetrics}) => {
const editDialog = ({editMetrics}) => {
    if (window.confirm("Kennzahl bearbeiten?") === true) {
        editMetrics(metrics.id);
    }
    else { }
}
return(
  <tr className="metrics-item">
    <td>
          {metrics.Title}
    </td>
    <td>
          {metrics.Description}
    </td>
    <td>
          {metrics.Query}
    </td>
    <td>
          {metrics.InputCategory}
    </td>
    <td>
          {metrics.OutputCategory}
    </td>
    <td>
      <button className="edit" onClick={() => editMetrics(metrics.id)}>
        <Icon
              name = "edit"
              tooltip = "Kennzahl bearbeiten."
              theme = "light"
              size = "small"
            />
      </button>
    </td>
    <td>
      <button className="destroy" onClick={() => removeMetrics(metrics.id)}>
        <Icon
                  name = "close"
                  tooltip = "Kennzahl löschen."
                  theme = "light"
                  size = "small"
                />
      </button>
    </td>
  </tr>
)}

export default connect(null, { removeMetrics, editMetrics })(MetricsListItem);
