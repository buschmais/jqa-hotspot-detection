import React from "react";
import { connect } from "react-redux";
import Todo from "../Todo";
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

const TodoList = ({ todos }) => (
  <CustomTable>
  <tr>
    {
    todos.allIds && todos.allIds.length
      ? todos.allIds.map((id) => todos.byIds[id]).map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"
    }
    </tr>
  </CustomTable>
);

const mapStateToProps = state => {
  console.log(state)
  return { todos: state.todo };
};

export default connect(mapStateToProps)(TodoList);
