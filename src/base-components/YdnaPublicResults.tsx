import { FTDNA_PUBLIC } from "../feature-components/constant";

export function YdnaPublicResults({ data }: { data: any }) {
  return <>
    <ul>
      {
        data.map((item: any, index: number) => {
          const key = `${index}-${item.idGroup}-y-dna-results`;

          const yColorizedURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=ycolorized`;
          const ySNPResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=ysnp`;
          const yMapResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=ymap`;

          return (
            <li key={key}>
              <span>{item.idPublic}</span> | <a href={yColorizedURL} target="_blank">yColorized</a> | <a href={ySNPResultsURL} target="_blank">ysnp</a> | <a href={yMapResultsURL} target="_blank">ymap</a>
            </li>
          );
        })
      }
    </ul>
  </>;
}
