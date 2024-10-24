import { LockIcon } from "../base-components/LockIcon";
import { FTDNA_GROUP } from "../shared/constant";

export function DisabledProjectsSection({ data }: { data: any }) {
  const projects = data.map((item: any) => {
    const url = `${FTDNA_GROUP}/${item.idGroup}/dna-results`;
    return (
      <a href={url} target="_blank" key={item.idGroup}>
        {item.idGroup}
      </a>
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
