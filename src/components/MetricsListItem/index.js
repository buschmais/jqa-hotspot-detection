import React from "react";
import { connect } from "react-redux";
import { removeMetrics, editMetrics } from "../../features/metrics/metricsActions";
import styled from 'styled-components';
import Icon from "react-crud-icons";
import "../react-crud-icons.css";

const MetricsListItem = ({metrics, removeMetrics, toggleMetrics, editMetrics}) => (
  <tr className="metrics-item">
<script>
  <td onClick={() => toggleMetrics(metrics.id)}>
     {metrics && metrics.completed ? "👌" : "👋"}{" "}
    </td>
</script>
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
)

export default connect(null, { removeMetrics, editMetrics })(MetricsListItem);
