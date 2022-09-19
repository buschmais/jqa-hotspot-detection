import React from "react";
import { connect } from "react-redux";
import Counter from './components/Counter'
import MetricsList from './components/MetricsList'
import AddMetrics from './components/AddMetrics'
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

const Metrics = (metrics) => {
    let current = 0;
    console.log(current)
  return (
    <div style={{ padding: "1rem 0" }}>
      <h2>Kennzahlen</h2>
      <MetricsList />
      <br/>
      <AddMetricsNew />
       <br/>
      {
      current != null ? <AddMetrics /> : <MetricsList />
      }
    </div>
  );
}

const AddMetricsNew = (current) => {


    return (
    <div className ='AddMetrics'>
    <Button className="add-metrics" onClick={(current=1)}>Neue Kennzahl</Button>

    </div>
    );

}

const mapStateToProps = state => {
  return { metrics: state.metrics };
};

export default connect(mapStateToProps)(Metrics);


