export const FTDNA_GROUP = 'https://www.familytreedna.com/groups';
export const FTDNA_PUBLIC = 'https://www.familytreedna.com/public';
export const FTDNA_DISCOVER_GROUP_TIME_TREE = 'https://discover.familytreedna.com/groups';
export const FTDNA_DISCOVER_Y_DNA = 'https://discover.familytreedna.com/y-dna';
// Main page https://discover.familytreedna.com/,
// so maybe mito Discover will be under https://discover.familytreedna.com/mt-dna
export const FTDNA_DISCOVER_Y_DNA_SECTIONS = [
  "story",
  "frequency",
  "notable",
  "migration",
  "globetrekker",
  "ancient",
  "tree",
  "path",
  "projects",
  "scientific",
  "compare"
];

export const YFULL_URL_CLASSIC = 'https://www.yfull.com/tree';
export const YFULL_URL_LIVE = 'https://www.yfull.com/live/tree';
export const YFULL_URL = YFULL_URL_LIVE;

export const SNP_TRACKER_URL = 'http://scaledinnovation.com/gg/snpTracker.html'; // Value for "?snp=" works both ways OK: "Y128456" or "I-Y128456"

export const sideNavData = [
  { id: "#home", label: "back to top" },
  { id: "#projects", label: "Projects" },
  { id: "#y-dna-public", label: "Y-DNA Public" },
  { id: "#mt-dna-public", label: "mtDNA Public" },
  { id: "#y-group-time-tree", label: "Y-DNA Group Time Tree" },
  { id: "#y-dna-pages-by-snp", label: "Y-DNA Pages by SNP" },
  { id: "#y-discover-by-people", label: "Y-DNA Time Tree pages by Person" },
  // { id: "#mt-discover", label: "mtDNA Discover" }, // TBD future
  // { id: "#mr-discover-by-people", label: "mt-DNA Discover pages by Person" }, // TBD future
  { id: "#yfull-pages", label: "YFULL" },
  { id: "#contacts", label: "My Contacts" },
];
