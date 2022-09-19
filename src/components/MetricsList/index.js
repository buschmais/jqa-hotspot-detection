import React from "react";
import { connect } from "react-redux";
import MetricsListItem from "../MetricsListItem";
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

const MetricsList = ({ metrics }) => (
  <CustomTable>
    <thead>
       <script>
        <td>
            Status
        </td>
        </script>
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
);

const mapStateToProps = state => {
  return { metrics: state.metrics };
};

export default connect(mapStateToProps)(MetricsList);
