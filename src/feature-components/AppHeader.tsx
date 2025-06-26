import { Col, Container, Row } from 'reactstrap';

export function AppHeader() {
  return (
    <header>
      <h2 id="home">Y-DNA info (FTDNA, YFULL, SNP Tracker)</h2>
      <Container>
        <Row>
          <Col>
            <a
              href="https://www.familytreedna.com/group-project-search"
              target="_blank"
            >
              FamilyTreeDNA Group Projects Search
            </a>
          </Col>
          <Col>
            <a
              href="https://www.familytreedna.com/my/group-join"
              target="_blank"
            >
              My FamilyTreeDNA "Join a Project" feature
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href="https://www.familytreedna.com/group-administrator-directory"
              target="_blank"
            >
              Group Administrator Directory
            </a>
            <br />
            <small>
              (some projects are NOT enabled to be found but they listed here)
            </small>
          </Col>
          <Col>
            <a
              href="https://www.familytreedna.com/project-application.aspx"
              target="_blank"
            >
              Create FamilyTreeDNA Project
            </a>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
