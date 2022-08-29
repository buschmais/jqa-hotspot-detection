import React from "react";
import { connect } from 'react-redux'
import { saveMetrics } from '../../features/metrics/metricsActions'
import styled from 'styled-components'

const Button = styled.button`
  background: palevioletred;
  color: white;
  border-radius: 3px;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  `

class AddMetrics extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Title: "" };
    this.state = { Description: "" };
    this.state = { Query: "" };
    this.state = { InputCategory: "" };
    this.state = { OutputCategory: "" };
    console.log(this.props)
  }

  updateTitle = Title => {
    this.setState({ Title });
  };
  updateDescription = Description => {
    this.setState({ Description });
  };
  updateQuery = Query => {
    this.setState({ Query });
  };
  updateInputCategory = InputCategory => {
    this.setState({ InputCategory });
  };
  updateOutputCategory = OutputCategory => {
    this.setState({ OutputCategory });
  };

  handleSaveMetrics = () => {
    this.props.saveMetrics(this.state.Title, this.state.Description, this.state.Query, this.state.InputCategory, this.state.OutputCategory);

    this.setState({ Title: "" });
    this.setState({ Description: "" });
    this.setState({ Query: "" });
    this.setState({ InputCategory: "" });
    this.setState({ OutputCategory: "" });
  };

  saveDialog = (handleSaveMetrics) => {

      if (window.confirm("Kennzahl speichern?") == true) {
          this.handleSaveMetrics();
      } else {

      }

    };

  render() {
    return (
      <div>
        <label htmlFor="Title">Titel: </label>
        <input id="Title"
          onChange={e => this.updateTitle(e.target.value)}
          value={this.state.Title}
        />
        <br />
        <label htmlFor="Description">Beschreibung: </label>
        <input id="Description"
          onChange={e => this.updateDescription(e.target.value)}
          value={this.state.Description}
        />
        <br />
        <label htmlFor="Query">Abfrage: </label>
        <input id="Query"
          onChange={e => this.updateQuery(e.target.value)}
          value={this.state.Query}
        />
        <br />
        <label htmlFor="InputCategory">Input-Kategorie: </label>
        <input id="InputCategory"
          onChange={e => this.updateInputCategory(e.target.value)}
          value={this.state.InputCategory}
        />
        <br />
        <label htmlFor="OutputCategory">Output-Kategorie: </label>
        <input id="OutputCategory"
          onChange={e => this.updateOutputCategory(e.target.value)}
          value={this.state.OutputCategory}
        />
        <Button className="save-metrics" onClick={this.saveDialog}>
          Speichern
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
  { saveMetrics }
)(AddMetrics);

