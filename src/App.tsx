import { Container } from 'reactstrap';
import './App.css'
import { GroupFTDNApages } from './feature-components/GroupFTDNApages'
import { PublicFTDNAresults } from './feature-components/PublicFTDNAresults'
import { DiscoverFTDNApages } from './feature-components/DiscoverFTDNApages'
import { DiscoverFTDNApagesByPerson } from './feature-components/DiscoverFTDNApagesByPerson'
import { YdnaPagesBySNP } from './feature-components/YdnaPagesBySNP'
import { YfullPagesByPerson } from './feature-components/YfullPagesByPerson'
import { MyContactsInfo } from './feature-components/MyContactsInfo'
import MyButton from './feature-components/MyButton';
import MyNav from './feature-components/MyNav';

function App() {

  return (
    <>
      <header>
        <h2>Y-DNA info (FTDNA, YFULL, SNP Tracker)</h2>
        <div>
          <a href="https://www.familytreedna.com/group-project-search" target="_blank">FamilyTreeDNA Group Projects Search</a>
        </div>
        <div>
          <a href="https://www.familytreedna.com/my/group-join" target="_blank">My FamilyTreeDNA "Join a Project" feature</a>
        </div>
      </header>

      {/* <MyNav /> */}

      <div className="y-dna-app mt-5">

        <div className="row">

          <div className="col-2">
            <div id="my-nav" className="d-flex flex-column gap-2 my-nav-scrollspy">
              <a className="p-1 rounded active" href="#projects">Projects</a>
              <a className="p-1 rounded" href="#y-dna-public">yDNA Public</a>
              <a className="p-1 rounded" href="#mt-dna-public">mtDNA Public</a>
              <a className="p-1 rounded" href="#discover">Discover</a>
              <a className="p-1 rounded" href="#y-dna-pages-by-snp">Y-DNA pages by SNP</a>
              <a className="p-1 rounded" href="#discover-by-people">Discover pages by Person</a>
              <a className="p-1 rounded" href="#yfull-pages">YFULL</a>
            </div>
          </div>

          <div className="col-10">
            <div data-bs-spy="scroll" data-bs-target="#my-nav" data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex={0}>
              <Container>
                <GroupFTDNApages />
                <PublicFTDNAresults />
                <DiscoverFTDNApages />
                <YdnaPagesBySNP />
                <DiscoverFTDNApagesByPerson />
                <YfullPagesByPerson />
              </Container>

              <MyButton>Test</MyButton>

              <footer>
                <MyContactsInfo />
              </footer>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
