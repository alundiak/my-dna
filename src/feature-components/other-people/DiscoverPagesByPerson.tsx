import { Container } from 'reactstrap';

export function DiscoverPagesByPerson() {
  return (
    <>
      <p id="discover-by-person">FTDNA Discover pages of other people I know</p>
      <Container className="bg-light border">
        <strong>Y-DNA</strong>
        <section>
          <ul>
            <li>
              <a href="https://discover.familytreedna.com/y-dna/I-FT278687/tree">I2a-Y3118+ - Taras Kravchenko</a>
            </li>
            <li>
              <a href="https://discover.familytreedna.com/y-dna/I-BY78168/story">I2a-BY78168 - Vasyl Popovych (MRCA: Rev. Joachimi Lewicki)</a>
            </li>
            <li>
              <a href="https://discover.familytreedna.com/y-dna/I-FTF87323/tree">I2a-FTF87323 Ivan Zenevych (level of Krakauer 8)</a>
            </li>
            <li>
              <a href="https://discover.familytreedna.com/y-dna/I-BY37221/tree">I2a-BY37221 - Mr from Lugansk (and also Rivne, Polatava and Mr Rajkov from Macedonia) - all nearby Zarubino/Irkutsk 32 ancient sample</a>
            </li>
            <li>
              <a href="https://discover.familytreedna.com/y-dna/N-M6921/tree">N1c-M6921 - Igor Dychta (Ukraine, Poland, Lithuania ... Gediminids )</a>
            </li>
            <li>
              <a href="https://discover.familytreedna.com/y-dna/R-BY50762/tree">R1b-U152\BY50762 - Vasyl Josypenko</a>
            </li>
            <li>
              <a href="https://discover.familytreedna.com/y-dna/I-Z63/tree">I1-Z63 - Сергій Фазульянов</a>
            </li>
          </ul>
        </section>
        <strong>mt-DNA</strong>
        <section>
          <ul>
            <li>
              <a href="https://discover.familytreedna.com/mtdna/J1b1a1b/tree">J1b1a1b - Jaroslav Sumyshyn</a>
            </li>
            <li>
              <a href="https://discover.familytreedna.com/mtdna/I-FT278687/tree">TBD - Ігор Розкладай</a>
            </li>
            <li>
              <a href="https://discover.familytreedna.com/mtdna/U5b2a1a/tree">U5b2a1a-T16311C! - Сергій Фазульянов</a>
            </li>
          </ul>
        </section>
      </Container>
    </>
  );
}
