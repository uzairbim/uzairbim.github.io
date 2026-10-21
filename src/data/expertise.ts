// "BIM expertise" tabs on the Home page.
// Each tab shows one real screenshot from the portfolio with numbered callouts.
// Callout x / y are percentages of the image width / height (0 to 100).
export type Callout = { x: number; y: number; text: string };
export type ExpertiseArea = {
  id: string;
  label: string; // short tab name
  title: string;
  text: string;
  points: string[];
  tools: string[];
  image: string;
  alt: string;
  caption: string;
  callouts: Callout[];
  link?: { href: string; label: string };
};

export const expertise: ExpertiseArea[] = [
  {
    id: 'modelling',
    label: 'BIM Modelling',
    title: 'Architectural, structural and fit-out models built to LOD',
    text: 'Revit models developed from CAD and design drawings, from early massing to LOD 400 construction models for interior fit-out, architecture and structure.',
    points: [
      'Architectural, structural and interior fit-out modelling',
      'Parametric and face-based Revit families',
      'LOD 300 to LOD 400 delivery in line with the BEP',
      'Light gauge steel framing with MWF Pro Metal',
    ],
    tools: ['Revit', 'MWF Pro Metal', 'DiRoots'],
    image: '/uploads/showcase/model-residential-tower.jpg',
    alt: 'Isometric 3D Revit model of three connected residential blocks with balconies, roof cores and an entrance canopy.',
    caption: 'Residential blocks, 3D Revit model · Islamabad (from my portfolio)',
    callouts: [
      { x: 18, y: 56, text: 'Repeating balcony and railing families on every floor' },
      { x: 34, y: 19, text: 'Roof-level stair and lift cores' },
      { x: 26, y: 86, text: 'Entrance canopy between the blocks' },
      { x: 90, y: 72, text: 'Site pad set out to the plot boundary' },
    ],
  },
  {
    id: 'coordination',
    label: 'Coordination',
    title: 'Federated models, clash tests and issues tracked to closure',
    text: 'Architecture, structure and MEP models federated in Navisworks and Revizto, with clash tests run by discipline and each issue tracked through weekly coordination.',
    points: [
      'Clash tests set up by discipline pair',
      'Clashes grouped by level and grid for review',
      'Issues assigned and tracked in Revizto',
      'Clash reports issued before drawings reach site',
    ],
    tools: ['Navisworks', 'Revizto', 'ACC Model Coordination'],
    image: '/uploads/showcase/clash-detective-federated-model.jpg',
    alt: 'Navisworks Manage 2026 Clash Detective on a federated LOD 300 model, listing clash results by level and grid, and the selected clash between a floor slab and a structural column highlighted in the model view.',
    caption: 'Federated LOD 300 model, clash test results · Navisworks Manage 2026',
    callouts: [
      { x: 22, y: 16, text: 'Clash Detective test with total, new and approved counts' },
      { x: 27, y: 57, text: 'Clash results listed by level and grid' },
      { x: 14, y: 86, text: 'The two clashing items: floor slab and structural column' },
      { x: 84, y: 38, text: 'Selected clash shown in the model view' },
    ],
  },
  {
    id: 'information',
    label: 'Information Management',
    title: 'ISO 19650 information management in a common data environment',
    text: 'Project information organised and issued through a CDE, with naming, status codes and delivery plans set up to ISO 19650.',
    points: [
      'BEP, MIDP and TIDP set up and maintained',
      'ISO 19650 file naming and status codes',
      'Weekly model submissions through ACC, Aconex and Revizto',
      'AIM, PIM and LOIN authored for handover',
    ],
    tools: ['ACC', 'BIM 360', 'Aconex', 'Procore'],
    image: '/uploads/showcase/acc-build-files.jpg',
    alt: 'Autodesk Build file browser for the Cuesta College NCC project, showing the project folder structure.',
    caption: 'Project files in Autodesk Build · Cuesta College NCC, California',
    callouts: [
      { x: 4, y: 7, text: 'Autodesk Build (ACC) module' },
      { x: 24, y: 7, text: 'Project: Cuesta College NCC' },
      { x: 21, y: 55, text: 'Folder structure for drawings, models and submittals' },
    ],
  },
  {
    id: 'documentation',
    label: 'Documentation',
    title: 'Shop drawings and construction documents that site teams can build from',
    text: 'Plans, elevations, sections and details produced from the model, so drawings stay consistent with what was coordinated.',
    points: [
      'LOD 300 to LOD 400 shop drawings',
      'Coordinated plans, sections, elevations and details',
      'Reinforcement detailing for rafts, slabs, beams and walls',
      'Sheets and views set up from project templates',
    ],
    tools: ['Revit', 'AutoCAD', 'Bluebeam'],
    image: '/uploads/showcase/doc-stair-sections.jpg',
    alt: 'Fire stair sections drawn from a Revit model, with level markers and material annotations.',
    caption: 'Fire stair sections from the model · cropped from my portfolio',
    callouts: [
      { x: 19, y: 40, text: 'Sections cut through the stair flights' },
      { x: 6, y: 20, text: 'Level markers and material annotations' },
      { x: 80, y: 69, text: 'Section label and scale' },
    ],
  },
  {
    id: 'automation',
    label: 'Automation',
    title: 'Dynamo and Python that take repetitive work off the team',
    text: 'Dynamo graphs, including Python nodes that work through the Revit API, for tasks such as creating sheets, exporting them and reading model data.',
    points: [
      'Sheet creation and PDF/CAD export with ISO 19650 naming',
      'Python nodes reading data through the Revit API',
      'pyRevit and DiRoots tools for everyday tasks',
    ],
    tools: ['Dynamo', 'Python', 'Revit API', 'pyRevit'],
    image: '/uploads/showcase/dynamo-python-automation.jpg',
    alt: 'Dynamo graph that collects Revit levels, passes them to a Python Script node and converts the elevations from feet to millimetres.',
    caption: 'Dynamo graph with a Python Script node reading level elevations',
    callouts: [
      { x: 9, y: 41, text: 'Categories node set to Levels' },
      { x: 28, y: 39, text: 'All Elements of Category collects every level' },
      { x: 48, y: 39, text: 'Python Script node' },
      { x: 81, y: 20, text: 'Python reads each level’s Elevation through the Revit API' },
      { x: 79, y: 55, text: 'Convert Between Units: feet to millimetres' },
      { x: 70, y: 80, text: 'Output list of level elevations' },
    ],
    link: { href: '#lab', label: 'See the Automation Lab' },
  },
  {
    id: 'quality',
    label: 'Model Quality',
    title: 'Model health checks against standards before every issue',
    text: 'Models checked against best-practice and project rules before they are shared, so problems are fixed by the author instead of found by the next trade.',
    points: [
      'Autodesk Model Checker runs against standard checksets',
      'Subcontractor models audited against ISO 19650 and the BEP',
      'Models reviewed against drawings before issue',
    ],
    tools: ['Model Checker', 'Revit', 'Revizto'],
    image: '/uploads/showcase/model-health-check.jpg',
    alt: 'Autodesk Model Checker for Revit report showing an overall score and the Revit Model Best Practices checkset results.',
    caption: 'Autodesk Model Checker report in Revit',
    callouts: [
      { x: 32, y: 22, text: 'Autodesk Model Checker for Revit' },
      { x: 15, y: 56, text: 'Overall result for the checked model' },
      { x: 40, y: 56, text: 'Check summary: passed, failed and count checks' },
      { x: 30, y: 77, text: 'Revit Model Best Practices checkset' },
    ],
  },
];
