import React from "react";
import { connect } from "react-redux";
import Counter from './components/Counter'
import MetricsList from './components/MetricsList'
import AddMetrics from './components/AddMetrics'
import styled from 'styled-components'
import { useState } from 'react';

const Metrics = ({metrics}) => {
  return (
    <div style={{ padding: "1rem 0" }}>
      <h2>Kennzahlen</h2>
      { metrics.current != null ? <AddMetrics/> : <MetricsList /> }
    </div>
  );
}

const mapStateToProps = state => {
  return { metrics: state.metrics }
};

export default connect(mapStateToProps)(Metrics);


