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

  handleQuitMetrics = () => {
    this.setState({ Title: "" });
    this.setState({ Description: "" });
    this.setState({ Query: "" });
    this.setState({ InputCategory: "" });
    this.setState({ OutputCategory: "" });
  };

  saveDialog = (handleSaveMetrics) => {
    if (this.state.Title === undefined || this.state.Description === undefined || this.state.Query === undefined ||
        this.state.InputCategory === undefined || this.state.OutputCategory === undefined) {
        window.alert("Es müssen alle Felder ausgefüllt sein.")}
    else {
        console.log(this.state.Title)
      if (window.confirm("Kennzahl speichern und der Liste hinzufügen?") === true) {
          this.handleSaveMetrics();
      } else{ }
    }};

  quitDialog = (handleQuitMetrics) => {
     if (window.confirm("Abbrechen und zur Liste zurückkehren? Die bereits eingegebenen Daten werden verworfen.")
        === true) {
            this.handleQuitMetrics(); }
     else { }
  };

  render() {
    return (
    <div>
      <table>
      <tr>
      <td>
        <label htmlFor="Title">Titel: </label>
      </td>
      <td>
        <input id="Title" required
          onChange={e => this.updateTitle(e.target.value)}
          value={this.state.Title}
        />
      </td>
      </tr>
      <tr>
      <td>
        <label htmlFor="Description">Beschreibung: </label>
      </td>
      <td>
        <input id="Description"
          onChange={e => this.updateDescription(e.target.value)}
          value={this.state.Description}
        />
      </td>
      </tr>
      <tr>
      <td>
        <label htmlFor="Query">Abfrage: </label>
      </td>
      <td>
        <input id="Query"
          onChange={e => this.updateQuery(e.target.value)}
          value={this.state.Query}
        />
      </td>
      </tr>
      <tr>
      <td>
        <label htmlFor="InputCategory">Input-Kategorie: </label>
      </td>
      <td>
        <input id="InputCategory"
          onChange={e => this.updateInputCategory(e.target.value)}
          value={this.state.InputCategory}
        />
      </td>
      <td>
        <Button className="save-metrics" onClick={this.saveDialog}>
                  Speichern
        </Button>
      </td>
      </tr>
      <tr>
      <td>
        <label htmlFor="OutputCategory">Output-Kategorie: </label>
      </td>
      <td>
        <input id="OutputCategory"
          onChange={e => this.updateOutputCategory(e.target.value)}
          value={this.state.OutputCategory}
        />
      </td>
      <td>
        <Button className="quit-metrics" onClick={this.quitDialog}>
          Abbrechen
        </Button>
      </td>
      </tr>
      </table>
      <br/>
    </div>
    );
  }
}

export default connect(
  null,
  { saveMetrics }
)(AddMetrics);

