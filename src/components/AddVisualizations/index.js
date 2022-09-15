import React from "react";
import { connect } from 'react-redux'
import { saveVisualizations } from '../../features/visualizations/visualActions'
import styled from 'styled-components'


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

class AddVisualizations extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Title: "" };
    this.state = { InputCategory: "" };
    this.state = { OutputCategory: "" };
    this.state = { VisualizationType: "" };
    console.log(this.props)
  };

  updateTitle = Title => {
    this.setState({ Title });
  };

  updateInputCategory = InputCategory => {
    this.setState({ InputCategory });
  };
  updateOutputCategory = OutputCategory => {
    this.setState({ OutputCategory });
  };
  updateVisualizationType = VisualizationType => {
      this.setState({ VisualizationType });
    };

  handleSaveVisualizations = () => {
    this.props.saveVisualizations(this.state.Title, this.state.InputCategory, this.state.OutputCategory,this.state.VisualizationType);

    this.setState({ Title: "" });
    this.setState({ InputCategory: "" });
    this.setState({ OutputCategory: "" });
    this.setState({ VisualizationType: "" });
  };

  handleQuitVisualizations = () => {
    this.setState({ Title: "" });
    this.setState({ InputCategory: "" });
    this.setState({ OutputCategory: "" });
    this.setState({ VisualizationType: "" });
  };

  saveDialog = (handleSaveVisualizations) => {
    if ((!this.state.Title || this.state.Title.trim().length === 0) || (!this.state.InputCategory ||
         this.state.InputCategory.trim().length === 0) || (!this.state.OutputCategory ||
         this.state.OutputCategory.trim().length === 0) || (!this.state.VisualizationType ||
         this.state.VisualizationType.trim().length === 0)) {
        window.alert("Es müssen alle Felder ausgefüllt sein.")}
    else {
        console.log(this.state.Title)
      if (window.confirm("Visualisierung speichern und der Liste hinzufügen?") === true) {
          this.handleSaveVisualizations();
      } else{ }
    }};

  quitDialog = (handleQuitVisualizations) => {
     if (window.confirm("Abbrechen und zur Liste zurückkehren? Die bereits eingegebenen Daten werden verworfen.")
        === true) {
            this.handleQuitVisualizations(); }
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
        <label htmlFor="InputCategory">Input-Kategorie: </label>
      </td>
      <td>
        <input id="InputCategory"
          onChange={e => this.updateInputCategory(e.target.value)}
          value={this.state.InputCategory}
        />
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
      <SaveButton className="save-visualizations" onClick={this.saveDialog}>
      Speichern
      </SaveButton>
      </td>
      </tr>

      <tr>
      <td>
        <label htmlFor="VisualizationType">VisualizationType: </label>
      </td>
      <td>
        <input id="VisualizationType"
           onChange={e => this.updateVisualizationType(e.target.value)}
           value={this.state.VisualizationType}
        />
      </td>
      <td>
      <QuitButton className="quit-visualizations" onClick={this.quitDialog}>
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

export default connect(
  null,
  { saveVisualizations }
)(AddVisualizations);

