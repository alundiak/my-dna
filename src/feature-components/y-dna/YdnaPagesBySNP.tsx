import { Container } from 'reactstrap';
import i2aSNPdata from '../../data/ftdna-I2-SNP-chain.json';
import { parseSNP_data } from '../../shared/common';
import { FTDNA_DISCOVER_Y_DNA, SNP_TRACKER_URL, THEY_TREE_URL, YFULL_URL } from '../../shared/constant';
import { YdnaSNPmatchPeople } from './YdnaSNPmatchPeople';

export function YdnaPagesBySNP() {
  const mapper = (element: any, index: number) => {
    const { SNP, people } = parseSNP_data(element);
    const key = `${index}-${SNP}-y-dna-snp`;
    const ftdnaURL = `${FTDNA_DISCOVER_Y_DNA}/${SNP}`; // TBD: maybe add/extend with suffixes
    const yfullURL = `${YFULL_URL}/${SNP}`;
    const snpTrackerURL = `${SNP_TRACKER_URL}?snp=${SNP}`;
    const theyTreeURL = `${THEY_TREE_URL}?snp=${SNP}`;

    const elements = [
      <span>{SNP}</span>,
      <a href={ftdnaURL} target="_blank">
        FTDNA Discover
      </a>,
      <a href={yfullURL} target="_blank">
        YFULL
      </a>,
      <a href={snpTrackerURL} target="_blank">
        SNP Tracker
      </a>,
      <a href={theyTreeURL} target="_blank">
        TheyTree
      </a>,
    ];

    return (
      <li key={`list-item-${key}`}>
        {elements.flatMap((el, i) => {
          if (i > 0) {
            return [' | ', <span key={`sep-${i}`}>{el}</span>];
          } else {
            return [<span key={`sep-${i}`}>{el}</span>];
          }
        })}
        {people && <YdnaSNPmatchPeople names={people} />}
      </li>
    );
  };

  return (
    <>
      <h3 id="y-dna-pages-by-snp">Y-DNA pages by SNP</h3>
      <Container className="bg-light border">
        <section>
          <ul>{i2aSNPdata.map(mapper)}</ul>
        </section>
      </Container>
    </>
  );
}
