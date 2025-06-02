import { Col, Container, Row } from 'reactstrap';
import { ListOfGroupTimeTree } from '../../base-components/ListOfGroupTimeTree';
import notRelatedProjects from '../../data/ftdna/not-related-to-me-projects.json';
import { useProjectsData } from '../../shared/common';

export function YdnaDiscoverGroupTimeTree() {
  const [myFtdnaProjects, otherFtdnaProjects] = useProjectsData();
  return (
    <>
      <h3 id="y-group-time-tree">Y-DNA FTDNA Group Time Tree pages</h3>
      <Container className="bg-light border">
        <Row>
          <Col>
            <h4>my projects</h4>
            <section>
              <ListOfGroupTimeTree data={myFtdnaProjects} />
            </section>
          </Col>
          <Col>
            <h4>not member</h4>
            <section>
              <ListOfGroupTimeTree data={otherFtdnaProjects} />
            </section>
          </Col>
          <Col>
            <h4>not me-related</h4>
            <section>
              <ListOfGroupTimeTree data={notRelatedProjects} />
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
}
