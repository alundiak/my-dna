import { Container } from 'reactstrap';
import H13a1d_SNP_data from '../../data/H13a1d-SNP-chain.json';
import { parseSNP_data } from '../../shared/common';
import {
  FTDNA_DISCOVER_MT_DNA,
  SNP_TRACKER_URL,
  THEY_TREE_URL,
  YFULL_MT_URL,
} from '../../shared/constant';
import { MtdnaSNPmatchPeople } from './MtdnaSNPmatchPeople';

interface Haplotypes {
  value: string;
  people: string[];
}

interface MyMtDnaCustomData {
  snp: string;
  people: string[];
  haplotypes?: Haplotypes[];
  children?: MyMtDnaCustomData;
}

const renderListItems = (
  element: MyMtDnaCustomData | string,
  index: number,
) => {
  const { SNP, people } = parseSNP_data(element); // as on now, kinda same API
  const key = `${index}-${SNP}-mt-dna-snp`;
  const ftdnaURL = `${FTDNA_DISCOVER_MT_DNA}/${SNP}`;
  const yfullURL = `${YFULL_MT_URL}/${SNP}`;
  const snpTrackerURL = `${SNP_TRACKER_URL}?snp=${SNP}&mt`;
  const theyTreeURL = `${THEY_TREE_URL}/mttree/${SNP}`;

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
      {people && <MtdnaSNPmatchPeople names={people} />}
    </li>
  );
};

export function MtdnaPagesBySNP() {
  return (
    <>
      <h3 id="mt-dna-pages-by-snp">mt-DNA pages by SNP</h3>
      <Container className="bg-light border">
        <section>
          <ul>
            {(H13a1d_SNP_data as MyMtDnaCustomData[] | string[]).map(
              renderListItems,
            )}
          </ul>
        </section>
      </Container>
    </>
  );
}
