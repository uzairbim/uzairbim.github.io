// "Technical Expertise in Practice" cards on the Home page.
// To swap an image: put your screenshot in public/uploads/showcase/ and change `image`.
// Leave `image` out to show a labelled placeholder. `link` is optional.
export type ShowcaseItem = {
  title: string;
  image?: string;
  caption: string; // what the image shows and where it is from
  tags: string[];
  text: string;
  link?: { href: string; label: string; external?: boolean };
  // Which part of the image stays visible when it is cropped to the card.
  focus?: string;
};

export const showcase: ShowcaseItem[] = [
  {
    title: 'BIM Modeling & LOD 400',
    image: '/uploads/showcase/lod400-exploded-model.jpg',
    caption: 'Exploded Revit model · Turtle Bay Village, NEOM',
    tags: ['Revit', 'LOD 400'],
    text: 'Architectural and structural Revit models built to LOD 400 for LGS and hot-rolled steel buildings at NEOM.',
    link: { href: 'portfolio', label: 'See in full portfolio', external: true },
    focus: 'center',
  },
  {
    title: 'Multidisciplinary Clash Detection',
    image: '/uploads/showcase/clash-detection-navisworks.jpg',
    caption: 'Federated model, architecture vs plumbing test · Navisworks',
    tags: ['Navisworks', 'Revizto'],
    text: 'Federated architecture, structure and MEP models, with clash tests run and each issue tracked through weekly coordination.',
    link: { href: 'portfolio', label: 'See in full portfolio', external: true },
    focus: 'center',
  },
  {
    title: 'Shop Drawings & Construction Documentation',
    image: '/uploads/showcase/shop-drawing-elevation.jpg',
    caption: 'Interior fit-out elevation · Four Seasons Hotel, Jeddah',
    tags: ['Revit', 'ACC', 'Aconex'],
    text: 'Interior fit-out shop drawings with plans, sections, elevations and finish tags, issued to site engineers.',
    link: { href: '/work/four-seasons-jeddah/', label: 'View project details' },
    focus: 'center 40%',
  },
  {
    title: 'BIM Automation with Dynamo and pyRevit',
    caption: 'Add a screenshot of a Dynamo graph or pyRevit tool',
    tags: ['Dynamo', 'pyRevit', 'DiRoots'],
    text: 'Dynamo scripts that create sheets and export them to PDF and CAD with ISO 19650 naming, plus pyRevit and DiRoots tools that make delivery faster and more consistent.',
    link: { href: '/work/ilmi-center-misk-city/', label: 'View project details' },
  },
];
