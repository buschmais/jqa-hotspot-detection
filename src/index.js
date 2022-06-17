import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './Dashboard';
import Metrics from './Metrics';
import Visualizations from './Visualizations';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ <App />}>
            <Route path="/" element={ <Dashboard />} />
            <Route path="/metrics" element={ <Metrics />} />
            <Route path="/visualizations" element={ <Visualizations />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
