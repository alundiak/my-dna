export const FTDNA_GROUP = 'https://www.familytreedna.com/groups';
export const FTDNA_PUBLIC = 'https://www.familytreedna.com/public';
export const FTDNA_DISCOVER_GROUP_TIME_TREE =
  'https://discover.familytreedna.com/groups';
export const FTDNA_DISCOVER_Y_DNA = 'https://discover.familytreedna.com/y-dna';
export const FTDNA_DISCOVER_MT_DNA = 'https://discover.familytreedna.com/mtdna';
// Main page https://discover.familytreedna.com/,
// so maybe mito Discover will be under https://discover.familytreedna.com/mt-dna
export const FTDNA_DISCOVER_Y_DNA_SECTIONS = [
  'story',
  'frequency',
  'notable',
  'migration',
  'globetrekker',
  'ancient',
  'tree',
  'matches',
  'path',
  'projects',
  'scientific',
  'compare',
  'classic',
];
export const FTDNA_DISCOVER_MT_DNA_SECTIONS = FTDNA_DISCOVER_Y_DNA_SECTIONS;

export const YFULL_URL_CLASSIC = 'https://www.yfull.com/tree';
export const YFULL_URL_LIVE = 'https://www.yfull.com/live/tree';
export const YFULL_URL = YFULL_URL_LIVE;
export const YFULL_MT_URL = 'https://www.yfull.com/mtree/';

export const SNP_TRACKER_URL = 'http://scaledinnovation.com/gg/snpTracker.html'; // Value for "?snp=" works both ways OK: "Y128456" or "I-Y128456"

export const THEY_TREE_URL = 'https://www.theytree.com';

export const sideNavData = [
  // { id: 'home', label: 'back to top' }, // skipping in new approach

  { id: 'my-projects', label: 'My Projects' },
  { id: 'other-projects', label: 'Other Projects' },

  { id: 'y-dna-public', label: 'Y-DNA Public' },
  { id: 'mt-dna-public', label: 'mtDNA Public' },

  { id: 'y-group-time-tree', label: 'Y-DNA Group Time Tree' },
  // { id: 'mt-group-time-tree', label: 'mt-DNA Group Time Tree' },

  { id: 'y-dna-pages-by-snp', label: 'Y-DNA Discover' },
  { id: 'mt-dna-pages-by-snp', label: 'mtDNA Discover' },

  { id: 'discover-by-person', label: 'Discover (other)' },
  // { id: 'y-discover-by-person', label: 'Y-DNA Time Tree pages by Person' },
  // { id: 'mt-discover-by-person", label: "mt-DNA Discover pages by Person' },

  { id: 'yfull-pages-py-person', label: 'YFULL (other)' },

  // { id: 'contacts', label: 'My Contacts' },
];
