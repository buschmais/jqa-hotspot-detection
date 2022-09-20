import React from "react";
import { connect } from "react-redux";
import MetricsListItem from "../MetricsListItem";
import styled from 'styled-components';
import {addMetrics} from "../../features/metrics/metricsActions";

const Button = styled.button`
  background: palevioletred;
  color: white;
  border-radius: 3px;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  `

const CustomTable = styled.table`
  &&& {
    table,th,td {
      border: 1px solid black;
      border-collapse: collapse;
    }
    th,td,tr {
      padding: 5px;
    }
    th {
      text-align: left;
    }
    table {
      width: 100%;
    }
  }
`;

const MetricsList = ({ metrics, addMetrics }) => {
console.log(metrics)
    const AddMetricsNew = (current) => {
    return (
    <div className ='AddMetrics'>
    <Button className="add-metrics" onClick={() => addMetrics()}>Neue Kennzahl</Button>
    </div>
    );
    };
return(
<div>
  <AddMetricsNew/> <br/>
  <CustomTable>
    <thead>
        <td>
            Titel
        </td>
        <td>
            Beschreibung
        </td>
        <td>
            Abfrage
        </td>
        <td>
            Input-Kategorie
        </td>
        <td>
            Output-Kategorie
        </td>
    </thead>
    <tbody>
    {
    metrics.allIds && metrics.allIds.length
      ? metrics.allIds.map((id) => metrics.byIds[id]).map((metrics, index) => {
          return <MetricsListItem key={`metrics-${metrics.id}`} metrics={metrics} />;
        })
      : "Noch keine Kennzahlen vorhanden."
    }
    </tbody>
  </CustomTable>
</div>
)};

const mapStateToProps = state => {
  return { metrics: state.metrics };
};

export default connect(mapStateToProps,{addMetrics})(MetricsList);
