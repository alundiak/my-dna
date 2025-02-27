import { Col, Container, Row } from 'reactstrap';
import { ListOfProjects } from '../base-components/ListOfProjects';
import { useProjectsData } from '../shared/common';
import notRelatedProjects from '../data/ftdna/not-related-to-me-projects.json';

export function OtherProjects() {
  const [memberProjects, otherFtdnaProjects] = useProjectsData();

  return <>
    <h3 id="other-projects">Other Projects</h3>
    <Container className="bg-light border">

      <Row>
        <Col>
          <h3>joined</h3>
          <section>
            <ListOfProjects data={memberProjects} />
          </section>
        </Col>

        <Col>
          <h3>interested but not member</h3>
          <section>
            <ListOfProjects data={otherFtdnaProjects} />
          </section>
        </Col>

        <Col>
          <h3>not me-related</h3>
          <section>
            <ListOfProjects data={notRelatedProjects} />
          </section>
        </Col>
      </Row>
    </Container>
  </>;
}
