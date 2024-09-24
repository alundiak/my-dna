import { FTDNA_PUBLIC } from "../feature-components/constant";

export function MTdnaPublicResults({ data }: { data: any }) {
  return <>
    <ul>
      {
        data.map((item: any, index: number) => {
          const key = `${index}-${item.idGroup}-mt-dna-results`;

          const mtDNAResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=mtresults`;
          const mtMapResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=mtmap`;

          return (
            <li key={key}>
              <span>{item.idPublic}</span> | <a href={mtDNAResultsURL} target="_blank">mtResults</a> | <a href={mtMapResultsURL} target="_blank">mtMap</a>
            </li>
          );
        })
      }
    </ul>
  </>;
}
