import { Col, Container, Row } from 'reactstrap';
import { ListOfProjects } from '../base-components/ListOfProjects';
// import { useProjectsData } from '../shared/common';
import { ListOfGroupTimeTree } from '../base-components/ListOfGroupTimeTree';
import { MTdnaPublicResults } from '../base-components/MTdnaPublicResults';
import { YdnaPublicResults } from '../base-components/YdnaPublicResults';
import myProjects from '../data/ftdna/my-projects.json';

export function MyProjects() {
  // const [memberProjects, otherFtdnaProjects] = useProjectsData();

  return (
    <>
      <h3 id="my-projects">My Projects</h3>
      <Container className="bg-light border">
        <Row>
          <Col>
            <h3>Pages</h3>
            <section>
              <ListOfProjects data={myProjects} />
            </section>
          </Col>

          <Col>
            <h3>Public</h3>
            <strong>Y-DNA public</strong>
            <section>
              <YdnaPublicResults data={myProjects} />
            </section>

            <strong>mtDNA public</strong>
            <section>
              <MTdnaPublicResults data={myProjects} />
            </section>
          </Col>

          <Col>
            <h3>Discover</h3>
            <strong>Y Group Time Tree</strong>
            <section>
              <ListOfGroupTimeTree data={myProjects} />
            </section>

            <strong>mt Group Time Tree</strong>
            <div>TBD</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
