import { FTDNA_PUBLIC } from "../shared/constant";

export function YdnaPublicResults({ data }: { data: any }) {
  return <>
    <ul>
      {
        data.map((item: any, index: number) => {
          const key = `${index}-${item.idGroup}-y-dna-results`;

          // const yResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=yresults`; // OUTDATED
          // const yColorizedURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=ycolorized`; // OUTDATED
          const yDnaResultsOverviewURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=ydna-results-overview`;
          const ySNPResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=ysnp`;
          const yMapResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=ymap`;

          return (
            <li key={key}>
              <span>{item.idPublic}</span> | <a href={yDnaResultsOverviewURL} target="_blank">yResults</a> | <a href={ySNPResultsURL} target="_blank">ySnp</a> | <a href={yMapResultsURL} target="_blank">yMap</a>
            </li>
          );
        })
      }
    </ul>
  </>;
}
