import type { GroupInfo } from '../models/projects';
import { FTDNA_DISCOVER_GROUP_TIME_TREE } from '../shared/constant';

interface Props {
  data: GroupInfo[];
}

export function ListOfGroupTimeTree({ data }: Props) {
  return (
    <ul>
      {data.map((item: any, index: number) => {
        const key = `${index}-${item.idGroup}-discover-page`;
        const url = `${FTDNA_DISCOVER_GROUP_TIME_TREE}/${item.idGroup}`;
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
