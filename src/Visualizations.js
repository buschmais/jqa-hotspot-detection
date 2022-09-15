import React from "react";
import { connect } from "react-redux";
import Counter from './components/Counter'
import VisualizationsList from './components/VisualizationsList'
import AddVisualizations from './components/AddVisualizations'
import styled from 'styled-components'
import { useState } from 'react';

const Button = styled.button`
  background: palevioletred;
  color: white;
  border-radius: 3px;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  `

const Visualizations = (visualizations) => {
    let current = 0;
    console.log(current)
  return (
    <div style={{ padding: "1rem 0" }}>
      <h2>Visualisierung</h2>
       <VisualizationsList />
      <AddVisualizationsNew />

      {
      current != null ? <AddVisualizations /> : <VisualizationsList />
      }
    </div>
  );
}

const AddVisualizationsNew = (current) => {


    return (
    <div className ='AddVisualizations'>
    <Button className="add-visualizations" onClick={(current=1)}>Neue Visualisierung</Button>

    </div>
    );

}

const mapStateToProps = state => {
  return { visualizations: state.visualizations, metrics: state.metrics };
};

export default connect(mapStateToProps)(Visualizations);


