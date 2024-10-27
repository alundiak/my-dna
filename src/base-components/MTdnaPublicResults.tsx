import { FTDNA_PUBLIC } from "../shared/constant";
import { KeyIcon } from "./icons/KeyIcon";

export function MTdnaPublicResults({ data }: { data: any }) {
  return <>
    <ul>
      {
        data.map((item: any, index: number) => {

          if (item.mtDnaResults === false) {
            return null;
          }

          const key = `${index}-${item.idGroup}-mt-dna-results`;

          const mtDNAResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=mtresults`;
          const mtMapResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=mtmap`;

          return (
            <li key={key}>
              <span>{item.idGroup}</span> | <a href={mtDNAResultsURL} target="_blank">mtResults</a> | <a href={mtMapResultsURL} target="_blank">mtMap</a> {item.resultsRequireLogin && (<>| <KeyIcon /></>)}
            </li>
          );
        })
      }
    </ul>
  </>;
}
