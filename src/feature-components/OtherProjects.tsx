import { Col, Container, Row } from 'reactstrap';
import { ListOfProjects } from '../base-components/ListOfProjects';
import notRelatedProjects from '../data/ftdna/not-related-to-me-projects.json';
import { useProjectsData } from '../shared/common';

export function OtherProjects() {
  const [memberProjects, otherFtdnaProjects] = useProjectsData();

  return (
    <>
      <h3 id="other-projects">Other Projects</h3>
      <Container className="bg-light border">
        <Row>
          <Col>
            <h4>joined</h4>
            <section>
              <ListOfProjects data={memberProjects} />
            </section>
          </Col>

          <Col>
            <h4>interested but not member</h4>
            <section>
              <ListOfProjects data={otherFtdnaProjects} />
            </section>
          </Col>

          <Col>
            <h4>not me-related</h4>
            <section>
              <ListOfProjects data={notRelatedProjects} />
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
}
