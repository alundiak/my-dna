import React from 'react';
import ReactDOM from 'react-dom/client';

// BrowserRouter is OK, but when page refreshed route is gone, and it's 404 then
import { HashRouter } from 'react-router';
// import { MyExperiments } from './base-components/other/MyExperiments';

// import { CssBaseline } from '@mui/material';
import { AppNew } from './AppNew.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <div className="m-3"> */}
    {/* <MyExperiments /> */}
    {/* <BrowserRouter basename="/my-dna"}> */}
    <HashRouter>
      {/* <CssBaseline /> */}
      {/* <App /> */}
      <AppNew />
    </HashRouter>
    {/* <BrowserRouter/> */}
    {/* </div> */}
  </React.StrictMode>
);
