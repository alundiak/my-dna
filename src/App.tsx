import { Container } from 'reactstrap';
import { GroupFTDNApages } from './feature-components/GroupFTDNApages';
import { PublicFTDNAresults } from './feature-components/PublicFTDNAresults';
import { YdnaDiscoverFTDNApages } from './feature-components/YdnaDiscoverFTDNApages';
import { YdnaDiscoverFTDNApagesByPerson } from './feature-components/YdnaDiscoverFTDNApagesByPerson';
import { YdnaPagesBySNP } from './feature-components/YdnaPagesBySNP';
import { YfullPagesByPerson } from './feature-components/YfullPagesByPerson';
import { MySideNav } from './feature-components/MySideNav';
import { AppHeader } from './feature-components/AppHeader';
import { AppFooter } from './feature-components/AppFooter';
import './App.css';

function App() {
  return (
    <>
      <AppHeader />

      <div className="y-dna-app mt-5">

        <div className="row">

          <div className="col-2">
            <div id="my-side-nav" className="d-flex flex-column gap-2">
              <MySideNav />
            </div>
          </div>

          <div className="col-10">
            <div data-bs-spy="scroll" data-bs-target="#my-side-nav" data-bs-offset="0" data-bs-smooth-scroll="true" tabIndex={0}>
              <Container>
                <GroupFTDNApages />
                <PublicFTDNAresults />

                <YdnaPagesBySNP />
                <YdnaDiscoverFTDNApages />
                <YdnaDiscoverFTDNApagesByPerson />

                <YfullPagesByPerson />
              </Container>

            </div>
          </div>

        </div>

      </div>
      <AppFooter />
    </>
  )
}

export default App
