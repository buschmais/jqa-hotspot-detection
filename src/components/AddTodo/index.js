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
    this.state = { mName: "" };
    this.state = { testinput: "" };
    console.log(this.props)
  }

  updatemName = mName => {
    this.setState({ mName });
  };

  updatetestinput = testinput => {
      this.setState({ testinput });
    };

  handleAddTodo = () => {
    this.props.addTodo(this.state.mName, this.state.testinput);

    this.setState({ mName: "" });
    this.setState({ testinput: "" });
  };

  render() {
    return (
      <div>
        <label htmlFor="mName">Todo Content: </label>
        <input id="mName"
          onChange={e => this.updatemName(e.target.value)}
          value={this.state.mName}
        />
        <input id="testinput"
          onChange={e => this.updatetestinput(e.target.value)}
          value={this.state.testinput}
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

