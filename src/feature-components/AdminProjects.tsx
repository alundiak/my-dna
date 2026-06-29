import { Col, Container, Row } from 'reactstrap';
import { ListOfProjects } from '../base-components/ListOfProjects';
// import { useProjectsData } from '../shared/common';
import { ListOfGroupTimeTree } from '../base-components/ListOfGroupTimeTree';
import { MTdnaPublicResults } from '../base-components/MTdnaPublicResults';
import { YdnaPublicResults } from '../base-components/YdnaPublicResults';
import adminProjects from '../data/ftdna/admin-projects.json';

export function AdminProjects() {
  // const [memberProjects, otherFtdnaProjects] = useProjectsData();

  return (
    <>
      <h3 id="my-ftdna-projects">My Projects</h3>
      <Container className="bg-light border">
        <Row>
          <Col>
            <h4>Pages</h4>
            <section>
              <ListOfProjects data={adminProjects} />
            </section>
          </Col>

          <Col>
            <h4>Public</h4>
            <strong>Y-DNA public</strong>
            <section>
              <YdnaPublicResults data={adminProjects} />
            </section>

            <strong>mtDNA public</strong>
            <section>
              <MTdnaPublicResults data={adminProjects} />
            </section>
          </Col>

          <Col>
            <h4>Discover</h4>
            <strong>Y Group Time Tree</strong>
            <section>
              <ListOfGroupTimeTree data={adminProjects} />
            </section>

            <strong>mt Group Time Tree</strong>
            <div>TBD</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
