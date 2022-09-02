import React from "react";
import { connect } from "react-redux";
import { removeMetrics, toggleMetrics } from "../../features/metrics/metricsActions";
import styled from 'styled-components';
import Icon from "react-crud-icons";
import "../react-crud-icons.css";

//const removeDialog = id => {
//    console.log(item.id);
//    removeMetrics(item.id) };


const MetricsListItem = ({item, removeMetrics, toggleMetrics}) => (
  <tr className="metrics-item" >
    <td onClick={() => toggleMetrics(item.id)}>
        {item && item.completed ? "👌" : "👋"}{" "}
    </td>
    <td>
          {item.Title}
    </td>
    <td>
          {item.Description}
    </td>
    <td>
          {item.Query}
    </td>
    <td>
          {item.InputCategory}
    </td>
    <td>
          {item.OutputCategory}
    </td>
    <td>
      <button className="destroy" onClick={() => removeMetrics(item.id)}>
      <Icon
              name = "close"
              tooltip = "Kennzahl löschen."
              theme = "light"
              size = "tiny"
            />
      </button>
    </td>
  </tr>
)

export default connect(
  null,
  { toggleMetrics, removeMetrics }
)(MetricsListItem);
