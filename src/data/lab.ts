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
    title: 'Reading level elevations through the Revit API',
    status: 'Experiment',
    solution: 'A Python node inside Dynamo that collects every level, reads its elevation through the Revit API and converts it from feet to millimetres.',
    tools: ['Dynamo', 'Python', 'Revit API'],
    image: '/uploads/showcase/dynamo-python-automation.jpg',
    alt: 'Dynamo graph with a Python Script node reading level elevations.',
  },
  {
    title: 'Custom hatch patterns with pyRevit',
    status: 'Used on a project',
    context: 'ILMI Science & Innovation Center, Riyadh',
    solution: 'Hatch patterns created with pyRevit for the interior fit-out model and shop drawings.',
    tools: ['pyRevit', 'Revit'],
  },
];
