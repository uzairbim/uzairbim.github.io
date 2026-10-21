// How the Certificates page sorts, labels and features each certificate.
// Everything here is derived from the certificate files in src/content/certificates;
// nothing is added that is not in those files.

export type CertCategory = 'iso' | 'revizto' | 'acc' | 'canbim' | 'procore' | 'other';

export const categories: { id: CertCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Certificates' },
  { id: 'iso', label: 'ISO 19650' },
  { id: 'revizto', label: 'Revizto' },
  { id: 'acc', label: 'Autodesk Construction Cloud' },
  { id: 'canbim', label: 'CanBIM' },
  { id: 'procore', label: 'Procore' },
  { id: 'other', label: 'Other Certifications' },
];

// Shown first, in this order, in the Featured Credentials row.
export const featuredIds = [
  'bim-project-information-practitioner',
  'iso-19650', // BIM Project Information Professional
  'bim-asset-information-practitioner',
  'bim-asset-information-professional',
  'revizto-level-3',
  'canbim-s4',
];

type CertData = { issuer: string; group?: string };

export function categoryOf(d: CertData): CertCategory {
  if (d.group === 'ISO 19650 Certification') return 'iso';
  if (d.issuer === 'Revizto') return 'revizto';
  if (d.issuer === 'Autodesk Construction Cloud') return 'acc';
  if (d.issuer.startsWith('CanBIM')) return 'canbim';
  if (d.issuer.startsWith('Procore')) return 'procore';
  return 'other';
}

// Area of specialisation each certificate supports. Used for the summary at the top.
export function areaOf(id: string, d: CertData): string {
  if (id === 'nebosh') return 'Construction health & safety';
  if (id === 'plannerly') return 'Information management';
  switch (categoryOf(d)) {
    case 'iso': return 'Information management';
    case 'revizto': return 'Digital coordination';
    case 'acc':
    case 'procore': return 'Construction technology & CDE';
    default: return 'BIM modelling & fundamentals';
  }
}

// The organisation that issued the certificate, for counting issuers.
// "BIM certification" (Revit Structure) does not name an organisation, so it is not counted.
export function organisationOf(d: CertData): string | null {
  if (d.issuer === 'BIM certification') return null;
  return d.issuer.replace(/\s*·.*$/, '').replace(/,\s*(Canada|UK)$/, '').trim();
}

// Label shown on the card: Coursera courses name the platform as well as the university.
export function issuerLabel(d: CertData): string {
  return d.group === 'Coursera Certification' ? `${d.issuer} · Coursera` : d.issuer;
}

export const categoryOrder: CertCategory[] = ['iso', 'revizto', 'acc', 'canbim', 'procore', 'other'];
