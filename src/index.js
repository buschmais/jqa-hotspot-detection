import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import App from './App';
import Dashboard from './Dashboard';
import Metrics from './Metrics';
import Visualizations from './Visualizations';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Neo4jProvider } from 'use-neo4j';

ReactDOM.render(
  <React.StrictMode>
    <Neo4jProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <App />}>
              <Route path="/" element={ <Dashboard />} />
              <Route path="/Kennzahlen" element={ <Metrics />} />
              <Route path="/Visualisierungen" element={ <Visualizations />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </Neo4jProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
