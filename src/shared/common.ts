import ftDnaProjects from '../data/ftdna/main-projects.json';
import mtDnaOnlyProjects from '../data/ftdna/mtdna-only-projects.json';

export function parseSNP_data(element: any) {
  if (typeof element === 'string') {
    return {
      SNP: element,
      people: []
    };
  } else {
    return {
      SNP: element.snp,
      people: element.people
    };
  }
}

interface FilterParams {
  myMembership: boolean;
}

export function filterFtdnaProjects({ myMembership }: FilterParams) {
  return ftDnaProjects.filter((item) => {
    return item.myMembership === myMembership;
  });
}

export function filterMitoOnlyProjects({ myMembership }: FilterParams) {
  return mtDnaOnlyProjects.filter((item) => {
    return item.myMembership === myMembership;
  });
}

// export function filterNotRelatedProjects({ myMembership }: FilterParams) {
//   return notRelatedProjects.filter((item) => {
//     return item.myMembership === myMembership;
//   });
// }

export function extractProjectsWithDisabledResults(allProjects: any) {
  return allProjects.reduce(
    (result: any, project: any) => {
      if (project.resultsDisabled) {
        result.disabled.push(project);
      } else {
        result.enabled.push(project);
      }
      return result;
    },
    { enabled: [], disabled: [] }
  );
}

// TBD
export function useProjectsData() {
  const memberProjects = filterFtdnaProjects({ myMembership: true });
  const otherFtdnaProjects = filterFtdnaProjects({ myMembership: false });

  const myMtDnaProjects = filterMitoOnlyProjects({ myMembership: true });
  const otherMtDnaProjects = filterMitoOnlyProjects({
    myMembership: false
  });

  // Improve maybe by using .pop()
  return [
    memberProjects,
    otherFtdnaProjects,
    myMtDnaProjects,
    otherMtDnaProjects
  ];
}
