import ftDnaProjects from '../data/ftdna/main-projects.json';
import mtDnaOnlyProjects from '../data/ftdna/mtdna-only-projects.json';

export function parseSNP_data(element: any) {
  let SNP = '', people = [];

  if (typeof element === 'string') {
    SNP = element;
  } else {
    SNP = element.snp;
    people = element.people;
  }

  return {
    SNP,
    people
  }
}

interface FilterParams {
  myMembership: boolean
}

export function filterFTDNAprojects({ myMembership }: FilterParams) {
  return ftDnaProjects.filter((item) => {
    return item.myMembership === myMembership;
  });
}

export function filterFTDNAmtDNAonlyProjects({ myMembership }: FilterParams) {
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
  return allProjects.reduce((result: any, project: any) => {
    if (project.resultsDisabled) {
      result.disabled.push(project);
    } else {
      result.enabled.push(project);
    }
    return result;
  }, { enabled: [], disabled: [] });
}

// TBD
export function useProjectsData() {
  const memberProjects = filterFTDNAprojects({ myMembership: true });
  const otherFtdnaProjects = filterFTDNAprojects({ myMembership: false });

  const myMtDnaProjects = filterFTDNAmtDNAonlyProjects({ myMembership: true });
  const otherMtDnaProjects = filterFTDNAmtDNAonlyProjects({ myMembership: false });

  // Improve maybe by using .pop()
  return [memberProjects, otherFtdnaProjects, myMtDnaProjects, otherMtDnaProjects];
}
