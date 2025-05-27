import { Container } from 'reactstrap';

export function YfullPagesByPerson() {
  return (
    <>
      <p id="yfull-pages-py-person">YFULL pages</p>
      <Container className="bg-light border">
        <section>
          <strong>Y-DNA pages</strong>
          <ul>
            <li>
              <a href="https://www.yfull.com/tree/I-FT278687/">I2a+ Taras Kravchenko</a>
            </li>
            <li>
              <a href="https://www.yfull.com/live/tree/I-Y225862/">I2a-S17250+ Sebastian Piotrowski</a>
            </li>
            <li>
              <a href="https://www.yfull.com/live/tree/N-M6921/">N1c+ Igor Dychta</a>
            </li>
            <li>
              <a href="https://www.yfull.com/live/tree/N-Y304511/">N1c+ Максим Лактионов </a>
            </li>
          </ul>
          <strong>mt-DNA pages</strong>
          <div>TBD</div>
        </section>
      </Container>
    </>
  );
}
