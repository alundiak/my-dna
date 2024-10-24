import i2aSNPdata from '../data/ftdna-I2-SNP-chain.json';
import { YdnaSNPmatchPeople } from './YdnaSNPmatchPeople';
import { FTDNA_DISCOVER_Y_DNA, SNP_TRACKER_URL, YFULL_URL } from '../shared/constant';
import { parseSNP_data } from '../shared/common';

export function YdnaPagesBySNP() {
  return <>
    <h3 id="y-dna-pages-by-snp">Y-DNA pages by SNP</h3>
    <section>
      <ul>
        {
          i2aSNPdata.map((element, index) => {
            const { SNP, people } = parseSNP_data(element);
            const key = `${index}-${SNP}-y-dna-snp`;
            const ftdnaURL = `${FTDNA_DISCOVER_Y_DNA}/${SNP}`; // TBD: maybe add/extend with suffixes
            const yfullURL = `${YFULL_URL}/${SNP}`;
            const snpTrackerURL = `${SNP_TRACKER_URL}?snp=${SNP}`;
            return (
              <li key={key}>
                <span>{SNP}</span> | <a href={ftdnaURL}>FTDNA Discover</a> | <a href={yfullURL}>YFULL</a> | <a href={snpTrackerURL}>SNP Tracker</a>
                {
                  people && <YdnaSNPmatchPeople names={people} />
                }
              </li>
            );
          })
        }
      </ul>
    </section>
  </>;
}
