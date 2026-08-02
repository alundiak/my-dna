import { Container } from 'reactstrap';

import { MySideNavRouting } from './base-components/MySideNavRouting';
import { AppFooter } from './feature-components/AppFooter';
import { AppHeader } from './feature-components/AppHeader';
import { MyDNARoutes } from './Routes';

// TBD @import in CSS as layer(packages)
// import 'bootstrap/dist/css/bootstrap.min.css';

// import './index_from_boilerplate.css';
// import './index_w_layers.css';

import './App.css';

function App() {
  return (
    <>
      <AppHeader />

      <div className="y-dna-app mt-1">
        <div className="row">
          <div className="col-2">
            <div id="my-side-nav" className="d-flex flex-column gap-2">
              <MySideNavRouting />
            </div>
          </div>

          <div className="col-10">
            <Container>
              <MyDNARoutes />
            </Container>
          </div>
        </div>
      </div>

      <AppFooter />
    </>
  );
}

export default App;
