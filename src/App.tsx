import { Container } from 'reactstrap';

import { MySideNav } from './base-components/MySideNav';
import { sideNavData } from './shared/constant';

import { AppFooter } from './feature-components/AppFooter';
import { AppHeader } from './feature-components/AppHeader';
import { MyProjects } from './feature-components/MyProjects';
import { OtherProjects } from './feature-components/OtherProjects';
import { PublicFTDNAresults } from './feature-components/PublicFTDNAresults';

import { MtdnaPagesBySNP } from './feature-components/mt-dna/MtdnaPagesBySNP';
import { YdnaDiscoverGroupTimeTree } from './feature-components/y-dna/YdnaDiscoverGroupTimeTree';
import { YdnaPagesBySNP } from './feature-components/y-dna/YdnaPagesBySNP';

import { DiscoverPagesByPerson } from './feature-components/other-people/DiscoverPagesByPerson';
import { YfullPagesByPerson } from './feature-components/other-people/YfullPagesByPerson';

import './App.css';

function App() {
  return (
    <>
      <AppHeader />

      <div className="y-dna-app mt-5">
        <div className="row">
          <div className="col-2">
            <div id="my-side-nav" className="d-flex flex-column gap-2">
              <MySideNav data={sideNavData} />
            </div>
          </div>

          <div className="col-10">
            <div data-bs-spy="scroll" data-bs-target="#my-side-nav" data-bs-offset="0" data-bs-smooth-scroll="true" tabIndex={0}>
              <Container>
                <MyProjects />
                <OtherProjects />
                <PublicFTDNAresults />

                <YdnaDiscoverGroupTimeTree />
                <YdnaPagesBySNP />

                <MtdnaPagesBySNP />

                <h3 id="other-people">Other people DNA pages</h3>
                <DiscoverPagesByPerson />
                <YfullPagesByPerson />
              </Container>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
}

export default App;
