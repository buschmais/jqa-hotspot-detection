import React from "react";
import { connect } from "react-redux";
import Counter from './components/Counter'
import MetricsList from './components/MetricsList'
import AddMetrics from './components/AddMetrics'
import styled from 'styled-components'
import { useState } from 'react';

const Metrics = (metrics,current) => {
    console.log(current)
    console.log(current.id)
    let page;
    if (current.id && current.id != null)
        page = <AddMetrics/>
    else
        page = <MetricsList />
        console.log(metrics)
    console.log(page)
  return (
    <div style={{ padding: "1rem 0" }}>
      <h2>Kennzahlen</h2>

      {
        page
      }
    </div>
  );
}


const mapStateToProps = state => {
  return { metrics: state.metrics,
  current: state.metrics.current};
};

export default connect(mapStateToProps)(Metrics);


