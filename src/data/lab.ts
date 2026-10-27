// "Automation Lab" entries. Only tools I have actually built or tried.
// status: 'Used on a project' or 'Experiment'. No time savings are claimed unless measured.
export type LabEntry = {
  title: string;
  status: 'Used on a project' | 'Experiment';
  context?: string;
  problem?: string;
  solution: string;
  tools: string[];
  image?: string;
  alt?: string;
};

export const lab: LabEntry[] = [
  {
    title: 'Sheet creation and export with ISO 19650 naming',
    status: 'Used on a project',
    context: 'ILMI Science & Innovation Center, Riyadh',
    problem: 'Creating sheets one by one and exporting each to PDF and CAD by hand, then renaming every file to the project naming standard.',
    solution: 'Dynamo scripts that create the sheets and export them to PDF and CAD with ISO 19650 file names.',
    tools: ['Dynamo', 'Revit'],
  },
  {
    title: 'Parametric wave facade generator',
    status: 'Experiment',
    solution: 'A Dynamo graph with a CPython3 node that builds a wave facade in Revit from sliders: facade size, fin spacing and thickness, wave amplitude and count, panel size and joint gap. It can create vertical fins, triangular panels or both, and places them as Generic Model elements.',
    tools: ['Dynamo', 'Python (CPython3)', 'Revit API'],
    image: '/uploads/showcase/dynamo-parametric-facade.jpg',
    alt: 'Dynamo graph with sliders for facade width, height, fin spacing, wave amplitude and panel size feeding a CPython3 node that creates wave facade elements in Revit.',
  },
  {
    title: 'Material clean-up: project prefix and unused materials',
    status: 'Experiment',
    problem: 'Project materials with mixed names, and unused materials left behind in the model.',
    solution: 'A Dynamo Python Script node that renames materials to the project prefix (for example 20105_H1_Interior Walls) and lists unused materials for deletion. Settings at the top set the prefix, the separator, names to skip and names never to delete, and the results can be written to a CSV file. The delete list is checked against Revit\u2019s Purge Unused before anything is removed.',
    tools: ['Dynamo', 'Python', 'Revit API'],
    image: '/uploads/showcase/dynamo-material-cleanup.jpg',
    alt: 'Revit Material Browser listing materials renamed with the 20105_H1 prefix, beside a Dynamo Python Script node showing the prefix, separator, skip and never-delete settings.',
  },
];

// Screenshots shown beside the lab list, in order.
export const labShots = [
  {
    image: '/uploads/showcase/dynamo-parametric-facade.jpg',
    alt: 'Dynamo graph with sliders for facade width, height, fin spacing, wave amplitude and panel size feeding a CPython3 node that creates wave facade elements in Revit.',
    caption: 'Parametric wave facade generator · Experiment',
  },
  {
    image: '/uploads/showcase/dynamo-python-automation.jpg',
    alt: 'Dynamo graph with a Python Script node reading level elevations through the Revit API.',
    caption: 'Python Script node reading level elevations · Experiment',
  },
  {
    image: '/uploads/showcase/dynamo-material-cleanup.jpg',
    alt: 'Revit Material Browser listing materials renamed with the 20105_H1 prefix, beside a Dynamo Python Script node showing the prefix, separator, skip and never-delete settings.',
    caption: 'Material clean-up script and renamed materials · Experiment',
  },
];
