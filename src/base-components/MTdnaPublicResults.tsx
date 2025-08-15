import type { GroupInfo } from '../models/projects';
import { FTDNA_PUBLIC } from '../shared/constant';
import { KeyIcon } from './icons/KeyIcon';

const mapper = (item: GroupInfo, index: number) => {
  if (item.mtDnaResults === false) {
    return null;
  }

  const key = `${index}-${item.idGroup}-mt-dna-results`;

  const mtDNAResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=mtresults`;
  const mtMapResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=mtmap`;

  return (
    <li key={key}>
      <span>{item.idPublic}</span>
      <span> | </span>
      <a href={mtDNAResultsURL} target="_blank">
        mtResults
      </a>
      <span> | </span>
      <a href={mtMapResultsURL} target="_blank">
        mtMap
      </a>
      {item.resultsRequireLogin && (
        <>
          <span> | </span>
          <KeyIcon />
        </>
      )}
    </li>
  );
};

interface Props {
  data: GroupInfo[];
}

export function MTdnaPublicResults({ data }: Props) {
  return <ul>{data.map(mapper)}</ul>;
}
