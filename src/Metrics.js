import Counter from './components/Counter'
import MetricsList from './components/MetricsList'
import AddMetrics from './components/AddMetrics'
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

export default function Metrics() {

  return (

    <div style={{ padding: "1rem 0" }}>
      <h2>Kennzahlen</h2>
      <AddMetrics />
      <MetricsList />
    </div>
  );
}