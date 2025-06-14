import { Route, Routes } from 'react-router-dom';

import { MyProjects } from './feature-components/MyProjects';
import { OtherProjects } from './feature-components/OtherProjects';

import { PublicYdnaResults } from './feature-components/y-dna/PublicYdnaResults';
import { YdnaDiscoverGroupTimeTree } from './feature-components/y-dna/YdnaDiscoverGroupTimeTree';
import { YdnaPagesBySNP } from './feature-components/y-dna/YdnaPagesBySNP';

import { MtdnaPagesBySNP } from './feature-components/mt-dna/MtdnaPagesBySNP';
import { PublicMtdnaResults } from './feature-components/mt-dna/PublicMtdnaResults';

import { DiscoverPagesByPerson } from './feature-components/other-people/DiscoverPagesByPerson';
import { YfullPagesByPerson } from './feature-components/other-people/YfullPagesByPerson';

export function MyDNARoutes() {
  return (
    <Routes>
      <Route index element={<MyProjects />} />

      <Route path="other-projects" element={<OtherProjects />} />
      <Route path="y-dna-public" element={<PublicYdnaResults />} />
      <Route path="mt-dna-public" element={<PublicMtdnaResults />} />
      <Route path="y-group-time-tree" element={<YdnaDiscoverGroupTimeTree />} />
      <Route path="y-dna-pages-by-snp" element={<YdnaPagesBySNP />} />
      <Route path="mt-dna-pages-by-snp" element={<MtdnaPagesBySNP />} />

      <Route path="discover-by-person" element={<DiscoverPagesByPerson />} />
      <Route path="yfull-pages-py-person" element={<YfullPagesByPerson />} />
    </Routes>
  );
}
