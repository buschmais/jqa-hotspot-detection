import React from "react";
import { connect } from "react-redux";
import Todo from "../Todo";

const TodoList = ({ todos }) => (
  <ul>
    {
    todos.allIds && todos.allIds.length
      ? todos.allIds.map((id) => todos.byIds[id]).map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"
    }
  </ul>
);

const mapStateToProps = state => {
  console.log(state)
  return { todos: state.todo };
};

export default connect(mapStateToProps)(TodoList);
