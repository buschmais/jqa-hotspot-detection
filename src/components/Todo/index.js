import React from "react";
import { connect } from "react-redux";
import { removeTodo, toggleTodo } from "../../features/todos/todoActions";
import styled from 'styled-components';
import Icon from "react-crud-icons";

import "../react-crud-icons.css";

const Todo = ({ todo, toggleTodo, removeTodo }) => (
  <tr className="todo-item" >
    <td onClick={() => toggleTodo(todo.id)}>
        {todo && todo.completed ? "👌" : "👋"}{" "}
    </td>
    <td>
          {todo.mName}
    </td>
    <td>
          {todo.testinput}
    </td>
    <td>
      <button className="destroy" onClick={() => removeTodo(todo.id)}>
      <Icon
              name = "close"
              tooltip = "Delete Todo"
              theme = "light"
              size = "tiny"
            />
      </button>
    </td>
  </tr>
)

export default connect(
  null,
  { toggleTodo, removeTodo }
)(Todo);
