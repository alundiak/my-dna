import { Container } from 'reactstrap';
import H13a1d_SNP_data from '../../data/ftdna-H13a1d-SNP-chain.json';
import { parseSNP_data } from '../../shared/common';
import { FTDNA_DISCOVER_MT_DNA, SNP_TRACKER_URL, THEY_TREE_URL, YFULL_MT_URL } from '../../shared/constant';
import { MtdnaSNPmatchPeople } from './MtdnaSNPmatchPeople';

export function MtdnaPagesBySNP() {
  return (
    <>
      <h3 id="mt-dna-pages-by-snp">mt-DNA pages by SNP</h3>
      <Container className="bg-light border">
        <section>
          <ul>
            {H13a1d_SNP_data.map((element, index) => {
              const { SNP, people } = parseSNP_data(element);
              const key = `${index}-${SNP}-mt-dna-snp`;
              const ftdnaURL = `${FTDNA_DISCOVER_MT_DNA}/${SNP}`;
              const yfullURL = `${YFULL_MT_URL}/${SNP}`;
              const snpTrackerURL = `${SNP_TRACKER_URL}?snp=${SNP}&mt`;
              const theyTreeURL = `${THEY_TREE_URL}/mttree/${SNP}`;

              return (
                <li key={key}>
                  <span>{SNP}</span> | <a href={ftdnaURL}>FTDNA Discover</a> | <a href={yfullURL}>YFULL</a> | <a href={snpTrackerURL}>SNP Tracker</a> | <a href={theyTreeURL}>TheyTree</a>
                  {people && <MtdnaSNPmatchPeople names={people} />}
                </li>
              );
            })}
          </ul>
        </section>
      </Container>
    </>
  );
}
