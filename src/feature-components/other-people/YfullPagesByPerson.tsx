import { Container } from "reactstrap";

export function YfullPagesByPerson() {
  return (
    <>
      <h3 id="yfull-pages-py-person">YFULL pages</h3>
      <Container className="bg-light border">
        <section>
          <strong>Y-DNA pages</strong>
          <ul>
            <li>
              <a href="https://www.yfull.com/tree/I-FT278687/" target="_blank">
                I2a+ Taras Kravchenko
              </a>
            </li>
            <li>
              <a href="https://www.yfull.com/live/tree/I-Y225862/" target="_blank">
                I2a-S17250+ Sebastian Piotrowski
              </a>
            </li>
            <li>
              <a href="https://www.yfull.com/live/tree/I-BY114557/" target="_blank">
                I2a-Z17855++ Yanytskyy
              </a>
            </li>
            <li>
              <a href="https://www.yfull.com/live/tree/N-M6921/" target="_blank">
                N1c+ Igor Dychta
              </a>
            </li>
            <li>
              <a href="https://www.yfull.com/live/tree/N-Y304511/" target="_blank">
                N1c+ Максим Лактионов (+ москвич)
              </a>
            </li>
          </ul>
          <strong>mt-DNA pages</strong>
          <div>TBD</div>
        </section>
      </Container>
    </>
  );
}
