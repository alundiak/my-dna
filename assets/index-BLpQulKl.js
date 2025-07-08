import { u as useLocation, j as jsxRuntimeExports, L as Link, a as Routes, b as Route, c as ReactDOM, R as React, H as HashRouter } from "./react-obF0mMh8.js";
import { N as Nav, a as NavItem, C as Container, R as Row, b as Col } from "./bootstrap-Dgi6VUVT.js";
import "./other-vendors-CgPDcvif.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const FTDNA_GROUP = "https://www.familytreedna.com/groups";
const FTDNA_PUBLIC = "https://www.familytreedna.com/public";
const FTDNA_DISCOVER_GROUP_TIME_TREE = "https://discover.familytreedna.com/groups";
const FTDNA_DISCOVER_Y_DNA = "https://discover.familytreedna.com/y-dna";
const FTDNA_DISCOVER_MT_DNA = "https://discover.familytreedna.com/mtdna";
const YFULL_URL_LIVE = "https://www.yfull.com/live/tree";
const YFULL_URL = YFULL_URL_LIVE;
const YFULL_MT_URL = "https://www.yfull.com/mtree/";
const SNP_TRACKER_URL = "http://scaledinnovation.com/gg/snpTracker.html";
const THEY_TREE_URL = "https://www.theytree.com";
const sideNavData = [
  // { id: 'home', label: 'back to top' }, // skipping in new approach
  // { id: 'my-ftdna-projects', label: 'My FTDNA Projects' },
  { id: "other-ftdna-projects", label: "FTDNA Projects" },
  { id: "y-dna-public", label: "Y-DNA Public" },
  { id: "mt-dna-public", label: "mtDNA Public" },
  { id: "y-group-time-tree", label: "Y-DNA Group Time Tree" },
  // { id: 'mt-group-time-tree', label: 'mt-DNA Group Time Tree' },
  { id: "y-dna-pages-by-snp", label: "Y-DNA pages" },
  { id: "mt-dna-pages-by-snp", label: "mtDNA pages" },
  { id: "discover-by-person", label: "Discover (other)" },
  // { id: 'y-discover-by-person', label: 'Y-DNA Time Tree pages by Person' },
  // { id: 'mt-discover-by-person", label: "mt-DNA Discover pages by Person' },
  { id: "yfull-pages-py-person", label: "YFULL (other)" }
  // { id: 'contacts', label: 'My Contacts' },
];
function MySideNavRouting() {
  const location = useLocation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { vertical: true, className: "bg-light p-1", style: { minWidth: "240px" }, children: sideNavData.map((item) => {
    const path = item.id === "other-ftdna-projects" ? "" : item.id;
    const isActive = path === "" ? location.pathname === "/" : location.pathname === `/${path}`;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(NavItem, { className: "mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: path,
        className: `nav-link ${isActive ? "active fw-bold" : ""}`,
        children: item.label
      }
    ) }, item.id);
  }) });
}
function AppFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "contacts", children: "My contact info" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "links", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "facebook", children: [
        "My",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.facebook.com/andrii.lundiak", target: "_blank", children: "Facebook" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "blog", children: [
        "My blog",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://lundiak.wordpress.com/", target: "_blank", children: "LUND-IA-K" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "github", children: [
        "My",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/alundiak", target: "_blank", children: "GitHub" })
      ] })
    ] })
  ] });
}
function AppHeader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "home", children: "Y-DNA info (FTDNA, YFULL, SNP Tracker)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://www.familytreedna.com/group-project-search",
            target: "_blank",
            children: "FamilyTreeDNA Group Projects Search"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://www.familytreedna.com/my/group-join",
            target: "_blank",
            children: 'My FamilyTreeDNA "Join a Project" feature'
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.familytreedna.com/group-administrator-directory",
              target: "_blank",
              children: "Group Administrator Directory"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "(some projects are NOT enabled to be found but they listed here)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://www.familytreedna.com/project-application.aspx",
            target: "_blank",
            children: "Create FamilyTreeDNA Project"
          }
        ) })
      ] })
    ] })
  ] });
}
function ListOfProjects({ data }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: data.map((item, index) => {
    const key = `${index}-${item.idGroup}-group`;
    const url = `${FTDNA_GROUP}/${item.idGroup}`;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: url, target: "_blank", children: item.idGroup }) }, key);
  }) }) });
}
const notRelatedProjects = [
  {
    idGroup: "holopainen-dna",
    idPublic: "HolopainenDNA",
    myMembership: false
  },
  {
    idGroup: "savo-dna",
    idPublic: "janhunen-janhonen",
    myMembership: false
  },
  {
    idGroup: "kowallis-and-kowalis",
    idPublic: "kowallis_and_kowalis",
    myMembership: false
  },
  {
    idGroup: "poliakov",
    idPublic: "Poliakov",
    myMembership: false
  },
  {
    idGroup: "piastdynasty",
    idPublic: "piastdynasty",
    myMembership: false,
    resultsRequireLogin: true
  },
  {
    idGroup: "haplogroup-iydna",
    idPublic: "haplogroup-iydna",
    resultsRequireLogin: true,
    resultsDisabled: true,
    mtDnaResults: false,
    myMembership: false,
    comment: "This is I-M170 root, just before I1 and I2 split"
  },
  {
    idGroup: "i-2a-l161",
    idPublic: "I2a-L161",
    mtDnaResults: false,
    myMembership: false
  },
  {
    idGroup: "y-dna-i1",
    idPublic: "y-dna-i1",
    myMembership: false,
    resultsRequireLogin: true
  },
  {
    idGroup: "i-1suomi",
    idPublic: "I1suomi",
    myMembership: false
  },
  {
    idGroup: "r-1a",
    idPublic: "R1a",
    myMembership: false
  },
  {
    idGroup: "r-1a-y-haplogroup",
    idPublic: "R1aY-Haplogroup",
    myMembership: false
  },
  {
    idGroup: "r-1b",
    idPublic: "r1b",
    myMembership: false,
    mtDnaResults: false,
    yDnaResultsOnly: true
  },
  {
    idGroup: "chaplogroup",
    idPublic: "Chaplogroup",
    myMembership: false
  },
  {
    idGroup: "c3",
    idPublic: "C3",
    myMembership: false
  },
  {
    idGroup: "e-v13",
    idPublic: "E-v13",
    myMembership: false
  },
  {
    idGroup: "hebrew",
    idPublic: "Hebrew",
    myMembership: false
  },
  {
    idGroup: "hebrew-finnish-project",
    idPublic: "HEBREW%20FINNISH%20PROJECT",
    myMembership: false
  },
  {
    idGroup: "hicks",
    idPublic: "HICKS",
    myMembership: false
  },
  {
    idGroup: "schneider",
    idPublic: "schneider",
    myMembership: false
  },
  {
    idGroup: "tatarstan",
    idPublic: "Tatarstan",
    myMembership: false
  },
  {
    idGroup: "circassian",
    idPublic: "UbykhSochi",
    myMembership: false
  },
  {
    idGroup: "georgia",
    idPublic: "georgia",
    myMembership: false
  },
  {
    idGroup: "karachev-dna-project",
    idPublic: "Karachev_DNA_project",
    myMembership: false,
    H13a1d: "true"
  },
  {
    idGroup: "caucasus",
    idPublic: "Сaucasus",
    myMembership: false
  },
  {
    idGroup: "k-balkar-dna",
    idPublic: "KBalkarDNA",
    myMembership: false
  },
  {
    idGroup: "armeniadnaproject",
    idPublic: "ArmeniaDNAProject",
    myMembership: false,
    H13a1d: "true"
  },
  {
    idGroup: "anatol-balkan-caucas",
    idPublic: "Anatol-Balkan-Caucas",
    myMembership: false
  },
  {
    idGroup: "Greece",
    idPublic: "Greece",
    myMembership: false
  },
  {
    idGroup: "wiki-tree",
    idPublic: "WikiTree",
    myMembership: false,
    H13a1d: "true"
  },
  {
    idGroup: "patriots-and-royalty",
    idPublic: "Patriots_and_Royalty",
    myMembership: false
  },
  {
    idGroup: "newman",
    idPublic: "newman",
    myMembership: false
  },
  {
    idGroup: "banat-dna",
    idPublic: "Banat-DNA",
    myMembership: false
  },
  {
    idGroup: "saudi-arabia",
    idPublic: "SaudiArabia",
    myMembership: false,
    mtDnaResults: false,
    yDnaResultsOnly: true
  },
  {
    idGroup: "middle-east",
    idPublic: "Middle-East",
    myMembership: false
  },
  {
    idGroup: "pitts-dna-project-ftdna",
    idPublic: "Pitts_DNA_Project_FTDNA",
    myMembership: false
  },
  {
    idGroup: "mc-collough",
    idPublic: "McCollough",
    myMembership: false,
    yDnaResultsOnly: true
  },
  {
    idGroup: "ny-state-dna",
    idPublic: "NY-State-DNA",
    myMembership: false
  },
  {
    idGroup: "maryland-dna",
    idPublic: "MarylandDNA",
    myMembership: false,
    mapsDisabled: true
  },
  {
    idGroup: "tx-state-gs",
    idPublic: "TXStateGS",
    myMembership: false
  },
  {
    idGroup: "iowa",
    idPublic: "iowa",
    myMembership: false
  },
  {
    idGroup: "ancient-dna",
    idPublic: "AncientDNA",
    myMembership: false
  }
];
const ftDnaProjects = /* @__PURE__ */ JSON.parse('[{"idGroup":"lunda","idPublic":"LUNDA","myMembership":true,"admin":true},{"idGroup":"ivano-frankivskregion","idPublic":"Ivano-Frankivskregion","myMembership":true,"admin":true},{"idGroup":"i-2a-hap-group","idPublic":"I2aHapGroup","mtDnaResults":false,"myMembership":true},{"idGroup":"ukrainian-dna","idPublic":"UkrainianDNA","myMembership":true,"resultsRequireLogin":true},{"idGroup":"ukraine","idPublic":"ukraine","myMembership":false},{"idGroup":"bereziv-berezw","idPublic":"BerezivBerezw","myMembership":false},{"idGroup":"carpatho-rusyn","idPublic":"carpatho-rusyn","myMembership":true},{"idGroup":"lemko-genealogy","idPublic":"LemkoGenealogy","myMembership":false},{"idGroup":"dinaric-alps-dna","idPublic":"dinaric_alps_dna","myMembership":false},{"idGroup":"volyn","idPublic":"Volyn","myMembership":false},{"idGroup":"lvivregion","idPublic":"Lvivregion","myMembership":false},{"idGroup":"braclawszczyzna","idPublic":"Braclawszczyzna","myMembership":false},{"idGroup":"skarbek-awdaniec","idPublic":"skarbek_awdaniec","myMembership":false},{"idGroup":"desna-dna","idPublic":"zadesennya_dna","yDnaResultsOnly":true,"myMembership":false},{"idGroup":"poltavaregion","idPublic":"poltavaregion","myMembership":false},{"idGroup":"cossacks","idPublic":"Cossacks","mtDnaResults":false,"myMembership":false},{"idGroup":"cossack-dna","idPublic":"CossackDNA","mtDnaResults":true,"myMembership":false},{"idGroup":"ukraine-black-sea","idPublic":"UkraineBlackSea","myMembership":false},{"idGroup":"crimean-tatar-dna","idPublic":"CrimeanTatarDNA","myMembership":false},{"idGroup":"bessarabia","idPublic":"Bessarabia","myMembership":false},{"idGroup":"romanian-moldovaand-bucovina","idPublic":"RomanianMoldovaandBucovina","myMembership":false,"yDnaResultsOnly":true,"mtDnaResults":false},{"idGroup":"moldova","idPublic":"Moldova","myMembership":false},{"idGroup":"jewish-polesie","idPublic":"jewish-polesie","myMembership":false},{"idGroup":"jewish-ukraine-west","idPublic":"Jewish_Ukraine_West","myMembership":false},{"idGroup":"polish","idPublic":"polish","myMembership":true,"resultsRequireLogin":true},{"idGroup":"pol-lithnobility","idPublic":"POL-LITHNOBILITY","myMembership":false},{"idGroup":"ossolinski","idPublic":"ossolinski","mtDnaResults":false,"myMembership":false},{"idGroup":"otwock","idPublic":"otwock","mtDnaResults":false,"myMembership":false},{"idGroup":"dna-stia","idPublic":"DNA-stia","myMembership":false},{"idGroup":"podlasie","idPublic":"Podlasie","myMembership":true},{"idGroup":"masovian-nob","idPublic":"MasovianNob","myMembership":false},{"idGroup":"belarus","idPublic":"belarus","myMembership":true},{"idGroup":"chechersk-dna","idPublic":"ChecherskDNA","myMembership":false},{"idGroup":"belarusian-nobility-dna","idPublic":"Belarusian_Nobility_DNA","myMembership":false},{"idGroup":"balticsea","idPublic":"balticsea","myMembership":true},{"idGroup":"balto-slavic-dna","idPublic":"Balto-SlavicDNA","myMembership":false},{"idGroup":"ostpreussen-east-prussia","idPublic":"Ostpreussen_East_Prussia","myMembership":false},{"idGroup":"prussia-preussen","idPublic":"PrussiaPreussen","myMembership":false},{"idGroup":"lituania-propria","idPublic":"LituaniaPropria","myMembership":true},{"idGroup":"latvia","idPublic":"Latvia","myMembership":false},{"idGroup":"estonia","idPublic":"Estonia","myMembership":false},{"idGroup":"finland","idPublic":"Finland","myMembership":true},{"idGroup":"forrestfinn","idPublic":"forrestfinn","myMembership":false},{"idGroup":"finno-ugric-dna","idPublic":"Finno-UgricDNA","myMembership":false},{"idGroup":"estonian-swedes-dna","idPublic":"EstonianSwedesDNA","myMembership":false},{"idGroup":"rurikid","idPublic":"rurikid","myMembership":false},{"idGroup":"denmark","idPublic":"Denmark","myMembership":false},{"idGroup":"sweden","idPublic":"Sweden","myMembership":false},{"idGroup":"gotland","idPublic":"gotland","myMembership":false},{"idGroup":"lund","idPublic":"Lund","myMembership":true},{"idGroup":"norway","idPublic":"norway","resultsDisabled":false,"myMembership":false},{"idGroup":"vikingydna","idPublic":"vikingydna","mtDnaResults":null,"resultsDisabled":true,"myMembership":false},{"idGroup":"kursk-dna-project","idPublic":"KurskDNAProject","myMembership":false},{"idGroup":"ponticandanatoliangreeksdna","idPublic":"russiangreeks","myMembership":false,"activityFeed":"disabledBecauseNotMember"},{"idGroup":"russian-nobility-dna","idPublic":"RussianNobilityDNA","myMembership":false},{"idGroup":"russia","idPublic":"Russia","myMembership":false},{"idGroup":"russiadna","idPublic":"russiadna","myMembership":false},{"idGroup":"russian-dna","idPublic":"RussianDNA","myMembership":false},{"idGroup":"russian-ethnic-project","idPublic":"RussianEthnicProject","myMembership":false},{"idGroup":"pontic-greek","idPublic":"PonticGreek","myMembership":false},{"idGroup":"europe-east-groups-eij","idPublic":"EuropeEastGroupsEIJ","myMembership":false},{"idGroup":"alpine-y-mt-dna","idPublic":"Alpine_DNA_Project_AlpGen_Genealogy","myMembership":false},{"idGroup":"balkangenetics","idPublic":"balkangenetics","myMembership":true},{"idGroup":"central-balkan-mountains","idPublic":"CentralBalkanMountains","myMembership":true,"maybeLeave":false},{"idGroup":"hungarian-magyar-y-dna-project","idPublic":"Hungarian_Magyar_Y-DNA_Project","resultsDisabled":true,"_mtDnaResults":false,"yDnaResultsOnly":true,"myMembership":false,"actually":"pending"},{"idGroup":"jaszsag","idPublic":"Jaszsag","myMembership":false},{"idGroup":"romania","idPublic":"Romania","myMembership":false},{"idGroup":"romanydna","idPublic":"romanydna","myMembership":false,"resultsDisabled":true},{"idGroup":"serbian-dna-project","idPublic":"SerbianDNAProject","myMembership":false},{"idGroup":"croatian-dna","idPublic":"CroatianDNA","myMembership":false},{"idGroup":"czech","idPublic":"czech","myMembership":false,"resultsDisabled":true},{"idGroup":"slovakia","idPublic":"slovakia","myMembership":false},{"idGroup":"spis-county-slovakia","idPublic":"Spis_County_Slovakia","myMembership":false,"resultsDisabled":true,"onlyMapResults":true},{"idGroup":"osturna","idPublic":"osturna","myMembership":false,"resultsDisabled":true},{"idGroup":"jewish-prague","idPublic":"JewishPrague","myMembership":false},{"idGroup":"jewish-czech-slovak","idPublic":"jewish-czech-slovak","myMembership":false,"resultsDisabled":true},{"idGroup":"germany","idPublic":"germany","myMembership":false},{"idGroup":"luther","idPublic":"Luther","myMembership":false},{"idGroup":"austria-hungary","idPublic":"austria-hungary","myMembership":"pending","resultsDisabled":true},{"idGroup":"austriamt-dn-asearch","idPublic":"AustriamtDNAsearch","myMembership":false,"mtDnaResults":true,"verySmallGroup":true},{"idGroup":"slovenia","idPublic":"slovenia","myMembership":false},{"idGroup":"slovenianorigin","idPublic":"Slovenianorigin","myMembership":false},{"idGroup":"italy","idPublic":"Italy","myMembership":false},{"idGroup":"england","idPublic":"England","myMembership":false,"mtDnaResults":false},{"idGroup":"anglo-saxonydnaproject","idPublic":"AngloSaxonydnaproject","myMembership":false,"yDnaResultsOnly":true,"mtDnaResults":false},{"idGroup":"british-isles","idPublic":"BritishIsles","myMembership":false,"mtDnaResults":true},{"idGroup":"britton","idPublic":"Britton","myMembership":false,"mtDnaResults":false},{"idGroup":"ireland","idPublic":"IRELAND","myMembership":false},{"idGroup":"ireland-heritage","idPublic":"IrelandHeritage","myMembership":false,"mtDnaResults":false,"yDnaResultsOnly":true},{"idGroup":"nifhs","idPublic":"NIFHS","myMembership":false},{"idGroup":"scandinavianswith-british-ydna","idPublic":"ScandinavianswithBritishYDNA","myMembership":false,"verySmallGroup":true},{"idGroup":"brittons-of-ireland","idPublic":"BrittonsofIreland","myMembership":false,"yDnaResultsOnly":true,"mtDnaResults":false,"mapsDisabled":true,"onlyMapResults":false},{"idGroup":"scottishdna","idPublic":"Scottishdna","myMembership":false},{"idGroup":"portugal","idPublic":"portugal","myMembership":false},{"idGroup":"frenchheritage","idPublic":"frenchheritage","myMembership":false},{"idGroup":"acadian-heritage","idPublic":"AcadianHeritage","myMembership":false},{"idGroup":"canadiananusim","idPublic":"canadiananusim","myMembership":false},{"idGroup":"ontario-province-canada","idPublic":"Ontario-Province-Canada","myMembership":false},{"idGroup":"colonial-usa-deutsch","idPublic":"colonial-usa-deutsch","myMembership":false}]');
const mtDnaOnlyProjects = [
  {
    idGroup: "h-mt-dna-haplogroup",
    idPublic: "H%20mtDNA%20Haplogroup",
    mtDnaResults: true,
    myMembership: true,
    resultsRequireLogin: true
  },
  {
    idGroup: "hungarian-mt-dn-aproject",
    idPublic: "HungarianMtDNAproject",
    mtDnaResults: true,
    myMembership: true
  },
  {
    idGroup: "mt-dna-h13",
    idPublic: "mtDNA_H13",
    mtDnaResults: true,
    myMembership: true
  },
  {
    idGroup: "mtdna-hstar",
    idPublic: "mtdna_hstar",
    mtDnaResults: true,
    myMembership: true
  }
];
function parseSNP_data(element) {
  let SNP = "";
  let people = [];
  if (typeof element === "string") {
    SNP = element;
  } else {
    SNP = element.snp;
    people = element.people;
  }
  return {
    SNP,
    people
  };
}
function filterFTDNAprojects({ myMembership }) {
  return ftDnaProjects.filter((item) => {
    return item.myMembership === myMembership;
  });
}
function filterFTDNAmtDNAonlyProjects({ myMembership }) {
  return mtDnaOnlyProjects.filter((item) => {
    return item.myMembership === myMembership;
  });
}
function extractProjectsWithDisabledResults(allProjects) {
  return allProjects.reduce(
    (result, project) => {
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
function useProjectsData() {
  const memberProjects = filterFTDNAprojects({ myMembership: true });
  const otherFtdnaProjects = filterFTDNAprojects({ myMembership: false });
  const myMtDnaProjects = filterFTDNAmtDNAonlyProjects({ myMembership: true });
  const otherMtDnaProjects = filterFTDNAmtDNAonlyProjects({ myMembership: false });
  return [memberProjects, otherFtdnaProjects, myMtDnaProjects, otherMtDnaProjects];
}
function OtherProjects() {
  const [memberProjects, otherFtdnaProjects] = useProjectsData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "other-ftdna-projects", children: "FTDNA Projects" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { className: "bg-light border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "joined" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListOfProjects, { data: memberProjects }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "interested but not member" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListOfProjects, { data: otherFtdnaProjects }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "not me-related" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListOfProjects, { data: notRelatedProjects }) })
      ] })
    ] }) })
  ] });
}
function YdnaPublicResults({ data }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: data.map((item, index) => {
    const key = `${index}-${item.idGroup}-y-dna-results`;
    const yDnaResultsOverviewURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=ydna-results-overview`;
    const ySNPResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=ysnp`;
    const yMapResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=ymap`;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.idPublic }),
      " | ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: yDnaResultsOverviewURL, target: "_blank", children: "yResults" }),
      " | ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: ySNPResultsURL, target: "_blank", children: "ySnp" }),
      " | ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: yMapResultsURL, target: "_blank", children: "yMap" })
    ] }, key);
  }) }) });
}
function GenderIcon({ gender }) {
  const genderEmoji = gender === "m" ? "🚹" : "🚺";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: genderEmoji });
}
function LockIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🔒" });
}
function MapIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🌍" });
}
function DisabledProjectsSection({ data }) {
  const projects = data.map((item) => {
    const url = `${FTDNA_GROUP}/${item.idGroup}/dna-results`;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: url, target: "_blank", children: item.idGroup }, item.idGroup),
      item.onlyMapResults ? /* @__PURE__ */ jsxRuntimeExports.jsx(MapIcon, {}) : null,
      item.yDnaResultsOnly ? /* @__PURE__ */ jsxRuntimeExports.jsx(GenderIcon, { gender: "m" }) : null
    ] }, `project-${item.idGroup}`);
  });
  const projectsLinksWithSeparators = projects.flatMap((project, index) => {
    const separate = index < projects.length - 1;
    if (separate) {
      return [project, /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: ", " }, `separator-${index}`)];
    } else {
      return [project];
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LockIcon, {}),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      "Projects with disabled results: ",
      projectsLinksWithSeparators
    ] })
  ] });
}
function PublicYdnaResults() {
  const [myFtdnaProjects, otherFtdnaProjects] = useProjectsData();
  const {
    enabled: otherFtdnaProjectsEnabled,
    disabled: otherFtdnaProjectsDisabled
  } = extractProjectsWithDisabledResults(otherFtdnaProjects);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "y-dna-public", children: "Y-DNA Public results" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { className: "bg-light border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "my projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(YdnaPublicResults, { data: myFtdnaProjects }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "not member" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(YdnaPublicResults, { data: otherFtdnaProjectsEnabled }) }),
        otherFtdnaProjectsDisabled && /* @__PURE__ */ jsxRuntimeExports.jsx(DisabledProjectsSection, { data: otherFtdnaProjectsDisabled })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "not related" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(YdnaPublicResults, { data: notRelatedProjects }) })
      ] })
    ] }) })
  ] });
}
function ListOfGroupTimeTree({ data }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: data.map((item, index) => {
    const key = `${index}-${item.idGroup}-discover-page`;
    const url = `${FTDNA_DISCOVER_GROUP_TIME_TREE}/${item.idGroup}`;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: url, target: "_blank", children: item.idGroup }) }, key);
  }) }) });
}
function YdnaDiscoverGroupTimeTree() {
  const [myFtdnaProjects, otherFtdnaProjects] = useProjectsData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "y-group-time-tree", children: "Y-DNA FTDNA Group Time Tree pages" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { className: "bg-light border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "my projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListOfGroupTimeTree, { data: myFtdnaProjects }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "not member" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListOfGroupTimeTree, { data: otherFtdnaProjects }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "not me-related" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ListOfGroupTimeTree, { data: notRelatedProjects }) })
      ] })
    ] }) })
  ] });
}
const i2aSNPdata = [
  {
    snp: "I-P37",
    people: [
      "Andrei BELEI 🇺🇦",
      "Ron DŁUGOSZ 🇵🇱",
      "Dave St john",
      "Gary Bernard Kulaw",
      "Mr. ANTE MARTINOVIC",
      "Mr. Anton Chernykh",
      "Robert Bassett",
      "Alain Gilbert A Lux",
      "Douglas Edward Nadybal",
      "Harold Levine [AB-089]",
      "Mr. Alejandro Chaparro Sr.",
      "Mr. Emmanuel Leblanc",
      "Mr. Mikhail Innokentievich Mozharovsky",
      "Mr. Peter James Light",
      "Mr. Tomasz Piotr Piotrowski",
      "Mr. Veselin Borislavov Vouchkov 🇧🇬",
      "Nikolay Ryzhov",
      "Oleg Andriyovych Savko",
      "Raymond George Dellefield",
      "new Daujotas 🇱🇹 (most probably also I-FT89045)"
    ]
  },
  "I-M423",
  "I-S2770",
  "I-CTS11030",
  "I-CTS5375",
  "I-CTS7213",
  "I-S10302",
  {
    snp: "I-L621",
    people: [
      "Roman Drogomirecki 🇺🇦, Kornych"
    ]
  },
  "I-CTS10936",
  "I-S19848",
  "I-CTS4002",
  {
    snp: "I-CTS10228",
    people: [
      "Artem Nochovkin (son of Valeriy Nochovkin) 🇺🇦",
      "Олег Сохацький (Дзвиняч, Тернопільска область) 🇺🇦"
    ]
  },
  {
    snp: "I-S20602",
    people: [
      "Kifa (FTDNA YDNA-37) 🇺🇦",
      "Sergiusz Mały 🇺🇦",
      "Oleksii Goliaka/Holiaka 🇺🇦",
      "Oleksii Striapko 🇺🇦 - https://www.facebook.com/oleksii.striapko",
      "Ivan Simeonov Stojkov",
      "John Popp Jr.",
      "Edward Behringer (STR match for Yanytskyy)",
      "Vladimir Gorbachev 🇷🇺",
      "jozef skop",
      "Velyslav Lesyk 🇺🇦 (Lviv region, Старий Самбір) - managed by https://www.facebook.com/profile.php?id=100040914701293",
      "Олег Сохацький (Дзвиняч, Тернопільска область) 🇺🇦",
      "Roman Kozan, Liski, більше Polska 🇵🇱 (але частково Ukraine 🇺🇦)",
      "Ivan Ivanushchak (Babche)",
      "... Z17855+, Oleg Yantytskyy 🇺🇦"
    ]
  },
  "I-Y3120",
  {
    snp: "I-Y508496",
    people: [
      "TBD"
    ]
  },
  {
    snp: "I-Y4460",
    people: []
  },
  {
    snp: "I-Y3106",
    people: [
      "... I-BY112455 - Szamoskozi 🇭🇺 (FTDNA)",
      "... I-Y47356 - L. Masterov (my Y12 STR match)",
      "... I-Y47356 - another Lithuanian man",
      "... I-A13916 - Szemiet (my Big Y 700 match, but not-STR match)",
      "... I-BY199341 - Vorobev (my Y67 STR match)",
      "... I-FT18774 - Kravets (my Y67 STR match)",
      "... I-FT2413 - Trajkov (my Y67 STR match)",
      "... I-Y3118+ Andrii Lavrinenko 🇺🇦"
    ]
  },
  {
    snp: "I-B57",
    people: [
      "ancientDNA: Karos"
    ]
  },
  "I-FT10545",
  {
    snp: "I-Z16973",
    people: [
      "Szamoskozi 🇭🇺 (YFULL)"
    ]
  },
  {
    snp: "I-FT9301",
    people: [
      "... FT8963, Gulevich/Hulewicz 🇵🇱 de Wojuytcze 🇺🇦 (maternal: Romania🇷🇴)",
      "... FT8688, Kokov 🇷🇺 (FTDNA, YFULL)",
      "... FT8688, Koshman 🇨🇦 (Koszmann, Kussman), (🇸🇰 => Tužina), (🇺🇦 => Tudorovychi, Uhryniv)"
    ]
  },
  {
    snp: "I-FGC63213",
    sameLevelSNPs: [
      "I-BY182167 (also same level as I-FGC63213)",
      "I-FGC8449 (also same level as Q-FGC8433)",
      "I-Y4298 (also same level as Q-FGC8433)",
      "I-MF803497"
    ],
    people: [
      "(FTDNA) Unknown Origin 1 - SADOWY 🇺🇦🇵🇱🇺🇸 (Звиняч, Тернопільска обл.)",
      "(FTDNA) Unknown Origin 2 - KLOPOCHUK 🇺🇦",
      "(FTDNA) Unknown Origin 4 - KIANENKO 🇺🇦?",
      "(FTDNA) Unknown Origin 5 - PESHKOV 🇺🇦?🇷🇺?🇧🇾?",
      "(FTDNA) Unknown Origin 6 - TKACH 🇷🇺🇺🇦",
      "(FTDNA) Unknown Origin 7 - BOGOMOLOV 🇺🇦",
      "(FTDNA) Known Mykhailo LUNDIAK 🇺🇦 - my father",
      "(FTDNA) Known HERMAN 🇺🇦🇵🇱",
      "(FTDNA) Known PISKUN 🇺🇦",
      "(FTDNA) Known VLADYCHENKO 🇺🇦",
      "(FTDNA) Known MIKHALCHUK 🇧🇾🇺🇦",
      "(FTDNA) Known ROMPPAINEN 🇫🇮🇷🇺",
      "(FTDNA) Known NOCHOVKIN 🇺🇦",
      "(23andme => FTDNA) Nochovkin son - TBD",
      "(FTDNA) Known DŁUGOSZ 🇵🇱",
      "(FTDNA) Known PALONKO (Паленчук => Палёнко) 🇺🇦",
      "(Ancestry => FTDNA) Palonko father - TBD"
    ]
  },
  {
    snp: "I-FGC63213*",
    people: [
      "(YFULL) Anton POLYAKOV 🇷🇺 (states that MRCA is Brothers CHEREPANOV)"
    ]
  },
  {
    snp: "I-F7424",
    sameLevelSNPs: [
      "tbd"
    ],
    people: [
      "tbd"
    ]
  },
  {
    snp: "I-FTF28876",
    sameLevelSNPs: [
      "FTF48764"
    ],
    people: [
      "(FTDNA) FROLOV 🇷🇺🇺🇦 (YFULL defines under Y4298)"
    ]
  },
  {
    snp: "I-FTF29262",
    sameLevelSNPs: [
      "FTF28380",
      "FTF28871"
    ],
    people: [
      "(FTDNA) HOLOPAINEN 🇫🇮?🇷🇺",
      "(FTDNA) ONTTINEN (via Kononen) 🇫🇮?🇷🇺 (Holopainen STR match)"
    ]
  },
  {
    snp: "I-FT89045",
    sameLevelSNPs: [
      "I-BY51714",
      "I-Y128937",
      "I-Y128456"
    ],
    people: [
      "(FTDNA) Andrii LUNDIAK 🇺🇦",
      "(FTDNA) KOSAREO 🇺🇦🇷🇺🇵🇱🇺🇸"
    ]
  },
  {
    snp: "I-Y128456",
    people: [
      "(YFULL) Andrii LUNDIAK 🇺🇦",
      "(YFULL) DAUJOTAS 🇱🇹",
      "(YFULL) ZAGORUIKO 🇺🇦"
    ]
  },
  {
    snp: "I-BY181496",
    sameLevelSNPs: [
      "BY181083, BY181540, BY181952, BY181986, BY182011, BY182079, BY182148, FGC4953, FT181931"
    ],
    people: [
      "(FTDNA) DAUJOTAS 🇱🇹",
      "(FTNDA) KRIAUCIAUNAS 🇧🇪🇱🇹 (EKA: Tyszkiewicz 🇵🇱) [daujotas STR-match], [I paid for his Big Y 700 UPGRADE]"
    ]
  },
  "I-FT88512",
  "I-FT88745",
  "I-FT88796"
];
function YdnaSNPmatchPeople({ names }) {
  if (!names.length) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: names.map((name, index) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: name }, `${index}-name`);
  }) });
}
const renderListItems$1 = (element, index) => {
  const { SNP, people } = parseSNP_data(element);
  const key = `${index}-${SNP}-y-dna-snp`;
  const ftdnaURL = `${FTDNA_DISCOVER_Y_DNA}/${SNP}`;
  const yfullURL = `${YFULL_URL}/${SNP}`;
  const snpTrackerURL = `${SNP_TRACKER_URL}?snp=${SNP}`;
  const theyTreeURL = `${THEY_TREE_URL}?snp=${SNP}`;
  const elements = [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: SNP }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: ftdnaURL, target: "_blank", children: "FTDNA Discover" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: yfullURL, target: "_blank", children: "YFULL" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: snpTrackerURL, target: "_blank", children: "SNP Tracker" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: theyTreeURL, target: "_blank", children: "TheyTree" })
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
    elements.flatMap((el, i) => {
      if (i > 0) {
        return [" | ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: el }, `sep-${i}`)];
      } else {
        return [/* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: el }, `sep-${i}`)];
      }
    }),
    people && /* @__PURE__ */ jsxRuntimeExports.jsx(YdnaSNPmatchPeople, { names: people })
  ] }, `list-item-${key}`);
};
function YdnaPagesBySNP() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "y-dna-pages-by-snp", children: "Y-DNA pages by SNP" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { className: "bg-light border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: i2aSNPdata.map(renderListItems$1) }) }) })
  ] });
}
const H13a1d_SNP_data = [
  {
    snp: "H13a1d",
    haplotypes: [
      {
        value: "F9120919",
        people: [
          "Bodnar",
          "Krężel"
        ]
      }
    ],
    people: [
      "🇺🇦 Kateryna Babij",
      "+ 3 🇺🇦",
      "5 🇫🇮",
      "2 🇮🇷",
      "2 🇸🇪",
      "1 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      "1 🇮🇹"
    ]
  },
  {
    snp: "H13a1d2'6",
    people: [
      "1 🇮🇪",
      "1 🇹🇷",
      "1 🇭🇺",
      "4 🇫🇮",
      "1 Unknown"
    ]
  },
  {
    snp: "H13a1d2",
    people: [
      "1 Unknown",
      "🇸🇪 Hellquist"
    ],
    haplotypes: [
      {
        value: "F1621813",
        people: [
          "1 🇭🇺",
          "3 Unknown"
        ]
      },
      {
        value: "F5654829",
        people: [
          "1 🇧🇾",
          "1 🇺🇦",
          "3 🇵🇱",
          "1 Unknown - Pryer from 🇨🇦"
        ]
      }
    ]
  },
  {
    snp: "H13a1d4",
    people: [
      "Chello 🇨🇭?"
    ]
  },
  {
    snp: "H13a1d5",
    people: [
      "1 🇺🇦 Daigle + USA",
      "1 🇨🇦 Smallwood",
      "1 🇦🇹 Pryce/Hussar",
      "1 ? Slovak"
    ]
  },
  {
    snp: "H13a1d6",
    people: [
      "1 🇧🇬",
      "? 🇹🇷 ? Tatar"
    ]
  },
  {
    snp: "H13a1d2'6+195",
    people: [
      "1 🇷🇺",
      "3 Unknown (also 🇷🇺)"
    ]
  },
  {
    snp: "H13a1d2'6+16129",
    people: [
      "8 Finland",
      "1 Unknown"
    ]
  },
  "ABC",
  "XYZ",
  "TBD"
];
function MtdnaSNPmatchPeople({ names }) {
  if (!names.length) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: names.map((name, index) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: name }, `${index}-name`);
  }) });
}
const renderListItems = (element, index) => {
  const { SNP, people } = parseSNP_data(element);
  const key = `${index}-${SNP}-mt-dna-snp`;
  const ftdnaURL = `${FTDNA_DISCOVER_MT_DNA}/${SNP}`;
  const yfullURL = `${YFULL_MT_URL}/${SNP}`;
  const snpTrackerURL = `${SNP_TRACKER_URL}?snp=${SNP}&mt`;
  const theyTreeURL = `${THEY_TREE_URL}/mttree/${SNP}`;
  const elements = [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: SNP }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: ftdnaURL, target: "_blank", children: "FTDNA Discover" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: yfullURL, target: "_blank", children: "YFULL" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: snpTrackerURL, target: "_blank", children: "SNP Tracker" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: theyTreeURL, target: "_blank", children: "TheyTree" })
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
    elements.flatMap((el, i) => {
      if (i > 0) {
        return [" | ", /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: el }, `sep-${i}`)];
      } else {
        return [/* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: el }, `sep-${i}`)];
      }
    }),
    people && /* @__PURE__ */ jsxRuntimeExports.jsx(MtdnaSNPmatchPeople, { names: people })
  ] }, `list-item-${key}`);
};
function MtdnaPagesBySNP() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "mt-dna-pages-by-snp", children: "mt-DNA pages by SNP" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { className: "bg-light border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: H13a1d_SNP_data.map(
      renderListItems
    ) }) }) })
  ] });
}
function KeyIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🔑" });
}
const mapper = (item, index) => {
  if (item.mtDnaResults === false) {
    return null;
  }
  const key = `${index}-${item.idGroup}-mt-dna-results`;
  const mtDNAResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=mtresults`;
  const mtMapResultsURL = `${FTDNA_PUBLIC}/${item.idPublic}?iframe=mtmap`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.idPublic }),
    " | ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: mtDNAResultsURL, target: "_blank", children: "mtResults" }),
    " | ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: mtMapResultsURL, target: "_blank", children: "mtMap" }),
    item.resultsRequireLogin && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      " | ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(KeyIcon, {})
    ] })
  ] }, key);
};
function MTdnaPublicResults({ data }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: data.map(mapper) }) });
}
function PublicMtdnaResults() {
  const [
    myFtdnaProjects,
    otherFtdnaProjects,
    myMtDnaProjects,
    otherMtDnaProjects
  ] = useProjectsData();
  const {
    enabled: otherFtdnaProjectsEnabled,
    disabled: otherFtdnaProjectsDisabled
  } = extractProjectsWithDisabledResults(otherFtdnaProjects);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "mt-dna-public", children: "mtDNA Public results" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { className: "bg-light border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "my projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "including mtDNA results also:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MTdnaPublicResults, { data: myFtdnaProjects }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "mtDNA projects only:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MTdnaPublicResults, { data: myMtDnaProjects })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "not member" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "including mtDNA results also:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MTdnaPublicResults, { data: otherFtdnaProjectsEnabled }),
          otherFtdnaProjectsDisabled && /* @__PURE__ */ jsxRuntimeExports.jsx(DisabledProjectsSection, { data: otherFtdnaProjectsDisabled }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "mtDNA projects only:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MTdnaPublicResults, { data: otherMtDnaProjects })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "not related" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MTdnaPublicResults, { data: notRelatedProjects }) })
      ] })
    ] }) })
  ] });
}
function DiscoverPagesByPerson() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "discover-by-person", children: "FTDNA Discover pages of other people I know" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { className: "bg-light border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Y-DNA" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://discover.familytreedna.com/y-dna/I-FT278687", target: "_blank", children: "I2a-Y3118+ Taras Kravchenko" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://discover.familytreedna.com/y-dna/I-BY78168", target: "_blank", children: "I2a-BY78168+ Vasyl Popovych (MRCA: Rev. Joachimi Lewicki)" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://discover.familytreedna.com/y-dna/I-FTF87323", target: "_blank", children: "I2a-FTF87323+ Ivan Zenevych (level of Krakauer 8)" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://discover.familytreedna.com/y-dna/I-BY37221", target: "_blank", children: "I2a-BY37221+ Mr from Lugansk (and also Rivne, Polatava and Mr Rajkov from Macedonia) - all nearby Zarubino/Irkutsk 32 ancient sample" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://discover.familytreedna.com/y-dna/I-FT417135", target: "_blank", children: "I2a-Y3118+ Андрій Лавріненко" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://discover.familytreedna.com/y-dna/I-BY133369/tree", target: "_blank", children: "I2a-Z17855+ Yanytskyy" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://discover.familytreedna.com/y-dna/I-Z63", target: "_blank", children: "I1-Z63 - Сергій Фазульянов" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://discover.familytreedna.com/y-dna/I-Y7477", target: "_blank", children: "I1-Y7477 (200 BCE) - Albert Sayin" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://discover.familytreedna.com/y-dna/R-Y2905", target: "_blank", children: "R1a-Y2905+ Ігор Розкладай" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://discover.familytreedna.com/y-dna/R-L1029", target: "_blank", children: "R1a-L1029+ Mykhailo Iskiv" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://discover.familytreedna.com/y-dna/R-BY20951", target: "_blank", children: "R1b-BY20951+ Dmitriy Romanyuk" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://discover.familytreedna.com/y-dna/R-BY50762", target: "_blank", children: "R1b-U152\\BY50762 Vasyl Josypenko" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://discover.familytreedna.com/y-dna/N-M6921", target: "_blank", children: "N1c-M6921 Igor Dychta (Ukraine, Poland, Lithuania, Gediminids)" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "mt-DNA" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://discover.familytreedna.com/mtdna/J1b1a1b", target: "_blank", children: "J1b1a1b - Jaroslav Sumyshyn" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://discover.familytreedna.com/mtdna/TBD", target: "_blank", children: "TBD - Ігор Розкладай" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://discover.familytreedna.com/mtdna/U5b2a1a", target: "_blank", children: "U5b2a1a-T16311C! - Сергій Фазульянов" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://discover.familytreedna.com/mtdna/H1b2", target: "_blank", children: "мама Dmitriy Romanyuk" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://discover.familytreedna.com/mtdna/W3a1/", target: "_blank", children: "Sebastian Magnowski(Jezupol)" }) })
      ] }) })
    ] })
  ] });
}
function YfullPagesByPerson() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "yfull-pages-py-person", children: "YFULL pages" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { className: "bg-light border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Y-DNA pages" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.yfull.com/tree/I-FT278687/", target: "_blank", children: "I2a+ Taras Kravchenko" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.yfull.com/live/tree/I-Y225862/", target: "_blank", children: "I2a-S17250+ Sebastian Piotrowski" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.yfull.com/live/tree/I-BY114557/", target: "_blank", children: "I2a-Z17855++ Yanytskyy" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.yfull.com/live/tree/N-M6921/", target: "_blank", children: "N1c+ Igor Dychta" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.yfull.com/live/tree/N-Y304511/", target: "_blank", children: "N1c+ Максим Лактионов (+ москвич)" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "mt-DNA pages" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "TBD" })
    ] }) })
  ] });
}
function MyDNARoutes() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { index: true, element: /* @__PURE__ */ jsxRuntimeExports.jsx(OtherProjects, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "y-dna-public", element: /* @__PURE__ */ jsxRuntimeExports.jsx(PublicYdnaResults, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "mt-dna-public", element: /* @__PURE__ */ jsxRuntimeExports.jsx(PublicMtdnaResults, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "y-group-time-tree", element: /* @__PURE__ */ jsxRuntimeExports.jsx(YdnaDiscoverGroupTimeTree, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "y-dna-pages-by-snp", element: /* @__PURE__ */ jsxRuntimeExports.jsx(YdnaPagesBySNP, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "mt-dna-pages-by-snp", element: /* @__PURE__ */ jsxRuntimeExports.jsx(MtdnaPagesBySNP, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "discover-by-person", element: /* @__PURE__ */ jsxRuntimeExports.jsx(DiscoverPagesByPerson, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "yfull-pages-py-person", element: /* @__PURE__ */ jsxRuntimeExports.jsx(YfullPagesByPerson, {}) })
  ] });
}
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "y-dna-app mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "my-side-nav", className: "d-flex flex-column gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MySideNavRouting, {}) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(MyDNARoutes, {}) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AppFooter, {})
  ] });
}
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HashRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) }) })
);
