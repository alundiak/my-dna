import { GenderIcon } from "../base-components/icons/GenderIcon";
import { LockIcon } from "../base-components/icons/LockIcon";
import { MapIcon } from "../base-components/icons/MapIcon";
import { FTDNA_GROUP } from "../shared/constant";

export function DisabledProjectsSection({ data }: { data: any }) {
  const projects = data.map((item: any) => {
    const url = `${FTDNA_GROUP}/${item.idGroup}/dna-results`;

    return (
      <>
        <a href={url} target="_blank" key={item.idGroup}>
          {item.idGroup}
        </a>
        {item.onlyMapResults ? <MapIcon /> : null}
        {item.yDnaResultsOnly ? <GenderIcon gender="m" /> : null}
      </>
    );
  });

  const projectsLinksWithSeparators = projects.flatMap((project: any, index: number) => {
    const separate = index < projects.length - 1;

    if (separate) {
      return [project, <span key={`separator-${index}`}>, </span>];
    } else {
      return [project];
    };
  });

  return (
    <section className="mb-4">
      <LockIcon />&nbsp;<span>Projects with disabled results: {projectsLinksWithSeparators}</span>
    </section>
  );
}
