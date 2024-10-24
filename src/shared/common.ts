import ftDnaProjects from '../data/ftdna-projects.json';
import mtDnaOnlyProjects from '../data/ftdna-mtdna-only-projects.json';

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

// TBD
export function useProjectsData() {
  const myFtdnaProjects = filterFTDNAprojects({ myMembership: true });
  const otherFtdnaProjects = filterFTDNAprojects({ myMembership: false });

  const myMtDnaProjects = filterFTDNAmtDNAonlyProjects({ myMembership: true });
  const otherMtDnaProjects = filterFTDNAmtDNAonlyProjects({ myMembership: false });

  // Improve maybe by using .pop()
  return [myFtdnaProjects, otherFtdnaProjects, myMtDnaProjects, otherMtDnaProjects];
}
