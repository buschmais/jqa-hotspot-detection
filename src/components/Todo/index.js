import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../../features/todos/todoActions";
import styled from 'styled-components'


const Todo = ({ todo, toggleTodo }) => (

  <tr className="todo-item" onClick={() => toggleTodo(todo.id)}>
    <td>
    {todo && todo.completed ? "👌" : "👋"}{" "}
    </td>
    <td>
    <span>
      {todo.content}
    </span>
    </td>
  </tr>
);

export default connect(
  null,
  { toggleTodo }
)(Todo);
