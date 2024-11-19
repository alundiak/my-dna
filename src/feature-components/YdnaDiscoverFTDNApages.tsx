import { Col, Row } from 'reactstrap';
import { useProjectsData } from '../shared/common';
import { ListOfDiscoverPages } from '../base-components/ListOfDiscoverPages';

export function YdnaDiscoverFTDNApages() {
  const [myFtdnaProjects, otherFtdnaProjects] = useProjectsData();
  return <>
    <Row>
      <Col>
        <h3 id="y-discover">Y-DNA FTDNA Discover pages</h3>
        <section>
          <ListOfDiscoverPages data={myFtdnaProjects} />
        </section>
      </Col>
      <Col>
        <h3>Y-DNA FTDNA Discover pages (not member)</h3>
        <section>
          <ListOfDiscoverPages data={otherFtdnaProjects} />
        </section>
      </Col>
    </Row>
  </>;
}
