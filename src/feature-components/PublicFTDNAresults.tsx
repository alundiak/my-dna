import { Col, Container, Row } from 'reactstrap';
import { YdnaPublicResults } from '../base-components/YdnaPublicResults';
import { MTdnaPublicResults } from '../base-components/MTdnaPublicResults';
import { extractProjectsWithDisabledResults, useProjectsData } from '../shared/common';
import { DisabledProjectsSection } from './DisabledProjectsSection';
import notRelatedProjects from '../data/ftdna/not-related-to-me-projects.json';

export function PublicFTDNAresults() {
  const [myFtdnaProjects, otherFtdnaProjects, myMtDnaProjects, otherMtDnaProjects] = useProjectsData();

  const { enabled: otherFtdnaProjectsEnabled, disabled: otherFtdnaProjectsDisabled, } = extractProjectsWithDisabledResults(otherFtdnaProjects);

  return <>
    <h2 id="y-dna-public">Y-DNA Public results</h2>
    <Container className="bg-light border">
      <Row>
        <Col>
          <h3>my projects</h3>
          <section>
            <YdnaPublicResults data={myFtdnaProjects} />
          </section>
        </Col>
        <Col>
          <h3>not member</h3>
          <section>
            <YdnaPublicResults data={otherFtdnaProjectsEnabled} />
          </section>
          {otherFtdnaProjectsDisabled && (
            <DisabledProjectsSection data={otherFtdnaProjectsDisabled} />
          )}
        </Col>
        <Col>
          <h3>not related</h3>
          <section>
            <YdnaPublicResults data={notRelatedProjects} />
          </section>
        </Col>
      </Row>
    </Container>

    <h2 id="mt-dna-public">mtDNA Public results</h2>
    <Container className="bg-light border">
      <Row>
        <Col>
          <h3>my projects</h3>
          <section>
            <p>including mtDNA results also:</p>
            <MTdnaPublicResults data={myFtdnaProjects} />
            <p>mtDNA projects only:</p>
            <MTdnaPublicResults data={myMtDnaProjects} />
          </section>
        </Col>
        <Col>
          <h3>not member</h3>
          <section>
            <p>including mtDNA results also:</p>
            <MTdnaPublicResults data={otherFtdnaProjectsEnabled} />
            {otherFtdnaProjectsDisabled && (
              <DisabledProjectsSection data={otherFtdnaProjectsDisabled} />
            )}
            <p>mtDNA projects only:</p>
            <MTdnaPublicResults data={otherMtDnaProjects} />
          </section>
        </Col>
        <Col>
          <h3>not related</h3>
          <section>
            <MTdnaPublicResults data={notRelatedProjects} />
          </section>
        </Col>
      </Row>
    </Container>
  </>;
}
