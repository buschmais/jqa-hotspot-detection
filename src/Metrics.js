import React from "react";
import { connect } from "react-redux";
import Counter from './components/Counter'
import MetricsList from './components/MetricsList'
import AddMetrics from './components/AddMetrics'
import MetricQuery from './components/MetricQuery'
import MetricTable from './components/MetricTable'
import styled from 'styled-components'

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

const Metrics = (metrics) => {
  return (
    <div style={{ padding: "1rem 0" }}>
      <h2>Kennzahlen</h2>
      <AddMetrics />
      <MetricsList />
      {
      //  metrics.current != null ? <AddMetrics /> : <MetricsList />
      }
      <MetricQuery Visualization={ MetricTable } />
    </div>
  );
}

const mapStateToProps = state => {
  return { metrics: state.item };
};

export default connect(mapStateToProps)(Metrics);


