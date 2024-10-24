import { Col, Row } from 'reactstrap';
import { YdnaPublicResults } from '../base-components/YdnaPublicResults';
import { MTdnaPublicResults } from '../base-components/MTdnaPublicResults';
import { useProjectsData } from '../shared/common';

export function PublicFTDNAresults() {
  const [myFtdnaProjects, otherFtdnaProjects, myMtDnaProjects, otherMtDnaProjects] = useProjectsData();

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
          <YdnaPublicResults data={otherFtdnaProjects} />
        </section>
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
