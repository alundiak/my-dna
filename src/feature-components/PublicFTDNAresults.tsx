import { Col, Container, Row } from 'reactstrap';
import { MTdnaPublicResults } from '../base-components/MTdnaPublicResults';
import { YdnaPublicResults } from '../base-components/YdnaPublicResults';
import notRelatedProjects from '../data/ftdna/not-related-to-me-projects.json';
import { extractProjectsWithDisabledResults, useProjectsData } from '../shared/common';
import { DisabledProjectsSection } from './DisabledProjectsSection';

export function PublicFTDNAresults() {
  const [myFtdnaProjects, otherFtdnaProjects, myMtDnaProjects, otherMtDnaProjects] = useProjectsData();

  const { enabled: otherFtdnaProjectsEnabled, disabled: otherFtdnaProjectsDisabled } = extractProjectsWithDisabledResults(otherFtdnaProjects);

  return (
    <>
      <h3 id="y-dna-public">Y-DNA Public results</h3>
      <Container className="bg-light border">
        <Row>
          <Col>
            <h4>my projects</h4>
            <section>
              <YdnaPublicResults data={myFtdnaProjects} />
            </section>
          </Col>
          <Col>
            <h4>not member</h4>
            <section>
              <YdnaPublicResults data={otherFtdnaProjectsEnabled} />
            </section>
            {otherFtdnaProjectsDisabled && <DisabledProjectsSection data={otherFtdnaProjectsDisabled} />}
          </Col>
          <Col>
            <h4>not related</h4>
            <section>
              <YdnaPublicResults data={notRelatedProjects} />
            </section>
          </Col>
        </Row>
      </Container>

      <h3 id="mt-dna-public">mtDNA Public results</h3>
      <Container className="bg-light border">
        <Row>
          <Col>
            <h4>my projects</h4>
            <section>
              <p>including mtDNA results also:</p>
              <MTdnaPublicResults data={myFtdnaProjects} />
              <p>mtDNA projects only:</p>
              <MTdnaPublicResults data={myMtDnaProjects} />
            </section>
          </Col>
          <Col>
            <h4>not member</h4>
            <section>
              <p>including mtDNA results also:</p>
              <MTdnaPublicResults data={otherFtdnaProjectsEnabled} />
              {otherFtdnaProjectsDisabled && <DisabledProjectsSection data={otherFtdnaProjectsDisabled} />}
              <p>mtDNA projects only:</p>
              <MTdnaPublicResults data={otherMtDnaProjects} />
            </section>
          </Col>
          <Col>
            <h4>not related</h4>
            <section>
              <MTdnaPublicResults data={notRelatedProjects} />
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
}
