import type { GroupInfo } from '../models/projects';
import { FTDNA_PUBLIC } from '../shared/constant';

interface Props {
  data: GroupInfo[];
}

const mapper = (item: GroupInfo, index: number) => {
  const key = `${index}-${item.idGroup}-y-dna-results`;

  // const yResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=yresults`; // OUTDATED
  // const yColorizedURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=ycolorized`; // OUTDATED
  const yDnaResultsOverviewURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=ydna-results-overview`;
  const ySNPResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=ysnp`;
  const yMapResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=ymap`;

  return (
    <li key={key}>
      <span>{item.idPublic}</span>
      <span> | </span>
      <a href={yDnaResultsOverviewURL} target="_blank">
        STR
      </a>
      <span> | </span>
      <a href={ySNPResultsURL} target="_blank">
        SNP
      </a>
      <span> | </span>
      <a href={yMapResultsURL} target="_blank">
        map
      </a>
    </li>
  );
};

export function YdnaPublicResults({ data }: Props) {
  return <ul>{data.map(mapper)}</ul>;
}
