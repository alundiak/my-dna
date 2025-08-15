import type { GroupInfo } from '../models/projects';
import { FTDNA_GROUP } from '../shared/constant';

interface Props {
  data: GroupInfo[];
}

export function ListOfProjects({ data }: Props) {
  return (
    <ul>
      {data.map((item: any, index: number) => {
        const key = `${index}-${item.idGroup}-group`;
        const url = `${FTDNA_GROUP}/${item.idGroup}`;
        return (
          <li key={key}>
            <a href={url} target="_blank">
              {item.idGroup}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
