import { Col, Row } from 'reactstrap';
import { YdnaPublicResults } from '../base-components/YdnaPublicResults';
import { MTdnaPublicResults } from '../base-components/MTdnaPublicResults';
import { extractProjectsWithDisabledResults, useProjectsData } from '../shared/common';
import { DisabledProjectsSection } from './DisabledProjectsSection';

export function PublicFTDNAresults() {
  const [myFtdnaProjects, otherFtdnaProjects, myMtDnaProjects, otherMtDnaProjects] = useProjectsData();

  const { enabled: otherFtdnaProjectsEnabled, disabled: otherFtdnaProjectsDisabled, } = extractProjectsWithDisabledResults(otherFtdnaProjects);

  return <>
    <Row>
      <Col>
        <h3 id="y-dna-public">yDNA Public results</h3>
        <section>
          <YdnaPublicResults data={myFtdnaProjects} />
        </section>
      </Col>
      <Col>
        <h3>yDNA Public results (not member)</h3>
        <section>
          <YdnaPublicResults data={otherFtdnaProjectsEnabled} />
        </section>
        {otherFtdnaProjectsDisabled && (
          <DisabledProjectsSection data={otherFtdnaProjectsDisabled} />
        )}
      </Col>
    </Row>
    <Row>
      <Col>
        <h3 id="mt-dna-public">mtDNA Public results</h3>
        <section>
          <p>including mtDNA results also:</p>
          <MTdnaPublicResults data={myFtdnaProjects} />
          <p>mtDNA projects only:</p>
          <MTdnaPublicResults data={myMtDnaProjects} />
        </section>
      </Col>
      <Col>
        <h3>mtDNA Public results (not member)</h3>
        <section>
          <p>including mtDNA results also:</p>
          <MTdnaPublicResults data={otherFtdnaProjects} />
          <p>mtDNA projects only:</p>
          <MTdnaPublicResults data={otherMtDnaProjects} />
        </section>
      </Col>
    </Row>
  </>;
}
