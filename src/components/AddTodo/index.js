import React from "react";
import { connect } from 'react-redux'
import { addTodo } from '../../features/todos/todoActions'
import styled from 'styled-components'

const Button = styled.button`
  background: palevioletred;
  color: white;
  border-radius: 3px;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  `

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <Button className="add-todo" onClick={this.handleAddTodo}>
          Add an Todo
        </Button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);

