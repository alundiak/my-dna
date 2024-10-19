import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// import { MyExperiments } from './feature-components/MyExperiments';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="m-3">
      {/* <MyExperiments /> */}
      <App />
    </div>
  </React.StrictMode>,
)
