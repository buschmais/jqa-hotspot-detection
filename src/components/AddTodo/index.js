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
    this.state = { MTitle: "" };
    this.state = { MDescr: "" };
    this.state = { MQuery: "" };
    this.state = { MInput: "" };
    this.state = { MOutput: "" };
    console.log(this.props)
  }

  updateMTitle = MTitle => {
    this.setState({ MTitle });
  };
  updateMDescr = MDescr => {
    this.setState({ MDescr });
  };
  updateMQuery = MQuery => {
    this.setState({ MQuery });
  };
  updateMInput = MInput => {
    this.setState({ MInput });
  };
  updateMOutput = MOutput => {
    this.setState({ MOutput });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.MTitle, this.state.MDescr, this.state.MQuery, this.state.MInput, this.state.MOutput);

    this.setState({ MTitle: "" });
    this.setState({ MDescr: "" });
    this.setState({ MQuery: "" });
    this.setState({ MInput: "" });
    this.setState({ MOutput: "" });
  };

  render() {
    return (
      <div>
        <label htmlFor="MTitle">Titel: </label>
        <input id="MTitle"
          onChange={e => this.updateMTitle(e.target.value)}
          value={this.state.MTitle}
        />
        <br />
        <label htmlFor="MDescr">Beschreibung: </label>
        <input id="MDescr"
          onChange={e => this.updateMDescr(e.target.value)}
          value={this.state.MDescr}
        />
        <br />
        <label htmlFor="MQuery">Abfrage: </label>
        <input id="MQuery"
          onChange={e => this.updateMQuery(e.target.value)}
          value={this.state.MQuery}
        />
        <br />
        <label htmlFor="MInput">Input-Kategorie: </label>
        <input id="MInput"
          onChange={e => this.updateMInput(e.target.value)}
          value={this.state.MInput}
        />
        <br />
        <label htmlFor="MOutput">Output-Kategorie: </label>
        <input id="MOutput"
          onChange={e => this.updateMOutput(e.target.value)}
          value={this.state.MOutput}
        />
        <Button className="add-todo" onClick={this.handleAddTodo}>
          Kennzahl hinzufügen
        </Button>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);

