import { Col, Container, Row } from 'reactstrap';
import { ListOfGroupTimeTree } from '../../base-components/ListOfGroupTimeTree';
import notRelatedProjects from '../../data/ftdna/not-related-to-me-projects.json';
import { useProjectsData } from '../../shared/common';

export function YdnaDiscoverGroupTimeTree() {
  const [myFtdnaProjects, otherFtdnaProjects] = useProjectsData();
  return (
    <>
      <h2 id="y-group-time-tree">Y-DNA FTDNA Group Time Tree pages</h2>
      <Container className="bg-light border">
        <Row>
          <Col>
            <h3>my projects</h3>
            <section>
              <ListOfGroupTimeTree data={myFtdnaProjects} />
            </section>
          </Col>
          <Col>
            <h3>not member</h3>
            <section>
              <ListOfGroupTimeTree data={otherFtdnaProjects} />
            </section>
          </Col>
          <Col>
            <h3>not me-related</h3>
            <section>
              <ListOfGroupTimeTree data={notRelatedProjects} />
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
}
