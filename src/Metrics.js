import Counter from './components/Counter'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
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
      <h2>Metrics</h2>
      <AddTodo />
      <TodoList />
    </div>
  );
}