import React from "react";
import { connect } from 'react-redux'
import { saveMetrics, quitMetrics } from '../../features/metrics/metricsActions'
import styled from 'styled-components'
//import Metrics from 'Metrics'

const SaveButton = styled.button`
  background: mediumseagreen;
  color: white;
  border-radius: 3px;
  border: 2px solid mediumseagreen;
  margin: 0 1em;
  padding: 0.25em 1em;
  `

const QuitButton = styled.button`
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
    this.state = props.metrics.current;
  };

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
    this.props.saveMetrics(this.state.id, this.state.Title, this.state.Description, this.state.Query, this.state.InputCategory, this.state.OutputCategory);

    this.setState({ Title: "" });
    this.setState({ Description: "" });
    this.setState({ Query: "" });
    this.setState({ InputCategory: "" });
    this.setState({ OutputCategory: "" });
  };

  handleQuitMetrics = () => {
    this.props.quitMetrics(this.state.id);
    this.setState({ Title: "" });
    this.setState({ Description: "" });
    this.setState({ Query: "" });
    this.setState({ InputCategory: "" });
    this.setState({ OutputCategory: "" });
  };

  saveDialog = (handleSaveMetrics) => {
    if ((!this.state.Title || this.state.Title.trim().length === 0) || (!this.state.Description ||
        this.state.Description.trim().length === 0) || (!this.state.Query || this.state.Query.trim().length === 0) ||
        (!this.state.InputCategory || this.state.InputCategory.trim().length === 0) ||
        (!this.state.OutputCategory || this.state.OutputCategory.trim().length === 0)) {

        window.alert("Es müssen alle Felder ausgefüllt sein.")}
    else {
      if (window.confirm("Kennzahl speichern?") === true) {
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
        <SaveButton className="save-metrics" onClick={this.saveDialog}>
                  Speichern
        </SaveButton>
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
        <QuitButton className="quit-metrics" onClick={this.quitDialog}>
          Abbrechen
        </QuitButton>
      </td>
      </tr>
      </table>
      <br/>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return { metrics: state.metrics };
};

export default connect(
  mapStateToProps,
  { saveMetrics, quitMetrics }
)(AddMetrics);

