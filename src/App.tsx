import { useEffect, useState } from 'react';
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
  const [activeSection, setActiveSection] = useState<string>('home');
  const [manualScrollTarget, setManualScrollTarget] = useState<string | null>(null);

  useEffect(() => {
    if (manualScrollTarget) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');
          // Yes, it enters at least twice... Potentially OK because of nature of Observing. TBD

          // only auto-update when not manually scrolling
          if (entry.isIntersecting && id && !manualScrollTarget && id !== activeSection) {
            setActiveSection(id);
            history.replaceState(null, '', `#${id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -90% 0px', // matters to avoid close-to-edges-auto-scrolling or infinite-switching issue
        threshold: 0.1,
      },
    );

    const timeout = setTimeout(() => {
      // Kinda bad. Depends on HTML elements in DOM at first
      // const headings = document.querySelectorAll('h2[id],h3[id]');
      // headings.forEach((el) => observer.observe(el));

      // Kinda better. Because is based on actual data ID-s
      sideNavData.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [manualScrollTarget, activeSection]);

  return (
    <>
      <AppHeader />

      <div className="y-dna-app mt-5">
        <div className="row">
          <div className="col-2">
            <div id="my-side-nav" className="d-flex flex-column gap-2">
              <MySideNav
                data={sideNavData}
                activeItem={activeSection}
                setActiveItem={setActiveSection}
                manualScrollTarget={manualScrollTarget}
                setManualScrollTarget={setManualScrollTarget}
              />
            </div>
          </div>

          <div className="col-10">
            {/* If Bootstrap Scrollspy needed, then here there will be need in additional DIV wrapper */}
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
      <AppFooter />
    </>
  );
}

export default App;
