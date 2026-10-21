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
    title: 'Custom hatch patterns with pyRevit',
    status: 'Used on a project',
    context: 'ILMI Science & Innovation Center, Riyadh',
    solution: 'Hatch patterns created with pyRevit for the interior fit-out model and shop drawings.',
    tools: ['pyRevit', 'Revit'],
  },
];
