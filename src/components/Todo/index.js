import React from "react";
import { connect } from "react-redux";
import { removeTodo, toggleTodo } from "../../features/todos/todoActions";
import styled from 'styled-components';


const Todo = ({ todo, toggleTodo, removeTodo }) => (
  <tr className="todo-item" >
    <td onClick={() => toggleTodo(todo.id)}>
        {todo && todo.completed ? "👌" : "👋"}{" "}
    </td>
    <td>
          {todo.content}
    </td>
    <td>
      <button className="destroy" onClick={() => removeTodo(todo.id)}>
      </button>
    </td>
  </tr>
)

export default connect(
  null,
  { toggleTodo, removeTodo }
)(Todo);
