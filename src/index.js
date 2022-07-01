import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import App from './App';
import Dashboard from './Dashboard';
import Metrics from './Metrics';
import Visualizations from './Visualizations';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <App />}>
            <Route path="/" element={ <Dashboard />} />
            <Route path="/metrics" element={ <Metrics />} />
            <Route path="/visualizations" element={ <Visualizations />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
