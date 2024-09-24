import { Col, Row } from 'reactstrap';
import { YdnaPublicResults } from '../base-components/YdnaPublicResults';
import { MTdnaPublicResults } from '../base-components/MTdnaPublicResults';
import { useProjectsData } from './common';

export function PublicFTDNAresults() {
  const [myFtdnaProjects, otherFtdnaProjects] = useProjectsData();

  return <>
    <Row>
      <Col>
        <h3>yDNA Public results</h3>
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
        <h3>mtDNA Public results</h3>
        <section>
          <MTdnaPublicResults data={myFtdnaProjects} />
        </section>
      </Col>
      <Col>
        <h3>mtDNA Public results (not member)</h3>
        <section>
          <MTdnaPublicResults data={otherFtdnaProjects} />
        </section>
      </Col>
    </Row>
  </>;
}
