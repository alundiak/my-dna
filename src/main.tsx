import React from 'react';
import ReactDOM from 'react-dom/client';

// BrowserRouter is OK, but when page refreshed route is gone, and it's 404 then
import { HashRouter } from 'react-router-dom';

import App from './App.tsx';
// import { MyExperiments } from './base-components/other/MyExperiments';

// TBD @import in CSS as layer(packages)
// import 'bootstrap/dist/css/bootstrap.min.css';

// import './index_from_boilerplate.css';
import './index_w_layers.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="m-3">
      {/* <MyExperiments /> */}
      {/* <BrowserRouter basename="/my-dna"}> */}
      <HashRouter>
        <App />
      </HashRouter>
      {/* <BrowserRouter/> */}
    </div>
  </React.StrictMode>,
);
