import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
// import { MyExperiments } from './base-components/other/MyExperiments';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const basePath = '/my-dna';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="m-3">
      {/* <MyExperiments /> */}
      <BrowserRouter basename={basePath}>
        <App />
      </BrowserRouter>
    </div>
  </React.StrictMode>,
);
