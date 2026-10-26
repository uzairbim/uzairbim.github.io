// Everything about you that appears across the site lives here.
export const profile = {
  name: 'Uzair Ur Rehman',
  title: 'BIM Engineer | BIM Coordinator',
  tagline:
    'Civil Engineer and ISO 19650-certified BIM professional with a Postgraduate Diploma in BIM and Construction Management and hands-on experience in high-rise building projects. Skilled in BIM modeling, multidisciplinary coordination, shop drawing preparation, and on-site coordination, with experience supporting project delivery from the modeling stage through coordination, construction documentation, and site execution. Committed to maintaining model accuracy, resolving design clashes, and ensuring alignment between design intent and construction requirements.',
  // Short version of the tagline, used in the Home page hero.
  headline: 'From complex BIM models to construction-ready solutions.',
  // Intro paragraph in the Home page hero.
  positioning:
    '5+ years turning complex BIM models into construction-ready deliverables, most recently on hotels, cultural venues and giga-projects in Saudi Arabia. I coordinate multidisciplinary models, produce LOD 400 shop drawings and manage project information to ISO 19650.',
  // Set to false to hide the "Open to work" status on the Home page.
  openToWork: true,
  openToWorkLabel: 'Open to BIM Engineer / BIM Coordinator',
  // Portrait used in the Home page hero (cut out, transparent background).
  heroPhoto: '/uploads/home/portrait-hero.png',
  summary:
    'Civil engineer and ISO 19650-certified BIM professional with 5+ years on hotels, high-rise and giga-projects in Saudi Arabia. I coordinate multidisciplinary models, resolve clashes and produce LOD 400 shop drawings that site teams can build from.',
  location: 'Jeddah, Saudi Arabia',
  availability: 'Transferable Iqama',
  noticePeriod: '30 days',
  phone: '+966 53 785 4209',
  whatsapp: 'https://wa.me/966537854209',
  credential: 'ISO-19650 Certified',
  email: 'engr.uzairofficial@gmail.com',
  linkedin: 'https://www.linkedin.com/in/uzair-bim-99070b181',
  // These two files live in the "downloads" folder of the website and are NOT rebuilt,
  // so you can replace them yourself (keep the same file names) and just Commit + Push.
  cv: '/downloads/Uzair-Ur-Rehman-BIM-Coordinator-CV.pdf',
  // Full portfolio, shared from Google Drive.
  portfolioLink: 'https://drive.google.com/file/d/1yQp9b4RPkZOflR_YYVwJiz0oZps_PIFL/view?usp=sharing',
  certificatesLink:
    'https://drive.google.com/drive/folders/1gEnsfeMzxnoIgOD_vvTEDHrFduvBCbLC?usp=sharing',
  photo: '/uploads/profile-full.png',
  about: [
    'I am a civil engineer with more than five years of experience in Building Information Modelling, most of it on large projects in Saudi Arabia including hotels, high-rise buildings, entertainment venues and NEOM.',
    'My work covers BIM workflows, clash detection and 4D/5D BIM in line with ISO 19650 and BIMForum LOD standards. I lead multidisciplinary coordination between architecture, structure and MEP teams, and I build automation with Dynamo, pyRevit and DiRoots to make delivery faster and more consistent.',
  ],
  stats: [
    { value: '5+', label: 'Years in BIM' },
    { value: '10+', label: 'Major projects' },
    { value: 'LOD 400', label: 'Construction models' },
    { value: 'ISO 19650', label: 'Information management' },
  ],
  experience: [
    {
      role: 'BIM Coordinator',
      company: 'Havelock One (Interior Fit-out)',
      place: 'Jeddah, KSA',
      period: 'Feb 2026 – Present',
      project: 'Four Seasons Hotel and Private Residences Jeddah (5-star hotel, interior fit-out)',
      points: [
        'Playing a key role in implementing BIM at Havelock One.',
        'Setting up templates, naming conventions and model arrangement, managing the CDE (Autodesk Forma) and running QC checks on BIM models.',
        'Managing the BIM team in creating the BIM models, with task tracking and BIM technical support for the team.',
        'Managing BIM models through the design and construction stages and coordinating with the design and site teams.',
        'Integrating multidisciplinary models and resolving clashes in Revizto and Navisworks before drawings are implemented on site by the site engineers.',
        'Revising sub-contractor BIM models in line with ISO 19650.',
        'Using pyRevit, DiRoots, BIM Interoperability Tools, Dynamo and other automation tools to streamline workflows.',
        'Collaborating with designers, site engineers and team members to increase productivity and maintain the project baseline.',
        'Weekly submission of BIM models via ACC, Aconex and Revizto.',
        'Weekly BIM progress presentations.',
      ],
    },
    {
      role: 'BIM Coordinator',
      company: 'CONSOL Arabia Contracting (ALEC Fit-out)',
      place: 'Riyadh, KSA',
      period: 'Jun 2025 – Feb 2026',
      project: 'ILMI Science & Innovation Center, MISK City (high-rise educational, interior fit-out)',
      points: [
        'Led the BIM team to complete tasks in line with the TIDP and MIDP.',
        'Created Revit families, filters and templates for team members.',
        'Created LOD 400 BIM models and interior fit-out shop drawings for site execution.',
        'Coordinated with the MEP, lighting and structural disciplines, and led weekly BIM coordination meetings resolving clashes across MEP, structural and architectural models.',
        'Produced and processed LOD 300–400 shop drawing models for review, approval and field implementation.',
        'Generated 5D quantity take-offs and material BOQs from BIM models to support site work, procurement and workforce planning.',
        'Ran model health checks with BIM Interoperability Tools.',
        'Streamlined sheet creation and PDF and CAD export to the BEP naming convention with DiRoots, and created hatch patterns with pyRevit.',
        'Weekly submission of BIM models (.rvt, .nwc, IFC) to Revizto and ACC.',
      ],
    },
    {
      role: 'BIM Specialist (Freelance)',
      company: 'Mint Creative Production',
      place: 'Tabuk, KSA',
      period: 'Jan 2025 – Jun 2025',
      project: 'Tabuk Entertainment Complex (Saudi Entertainment Ventures)',
      points: [
        'Created parametric Revit families for the Tabuk Entertainment Complex.',
        'Managed clash detection in Navisworks and Revizto and issued clash reports.',
        'Used the MIDP and TIDP to track project submissions and help the team reach milestones on time.',
        'Developed detailed 3D models and shop drawings with accurate dimensions for field use and review.',
        'Prepared and printed drawing sets for team reviews and approvals.',
        'Calculated quantities for material orders and crew work planning.',
        'Weekly submission of BIM models (.rvt, .nwc, IFC) to Revizto and ACC.',
      ],
    },
    {
      role: 'BIM Engineer',
      company: 'DMS Management Group',
      place: 'Florida, USA (remote)',
      period: 'Jul 2023 – Nov 2024',
      project: 'Police academy and college projects in California (structure and shop drawings, LOD 350–400)',
      points: [
        'Developed LOD 300 (design) and LOD 400 (construction) models in Revit, specialising in light gauge steel framing with the MWF Pro Metal plugin.',
        'Coordinated with general contractors, subcontractors and consultants, resolving clashes in Navisworks in line with the BEP.',
        'Created and maintained Revit project templates, shared parameters and custom families to enforce company BIM protocols.',
        'Managed cloud collaboration in BIM 360/ACC, keeping model integrity, version control and subcontractor submission guidelines.',
        'Audited models against BIM checklists, AIA E203, G202 and project requirements.',
        'Managed documentation, RFIs, submittals and issues in Procore and Revizto.',
        'Took part in weekly BIM coordination meetings, tracking progress and risks.',
      ],
    },
    {
      role: 'BIM Engineer',
      company: 'Proctor Global Design (for Rabiah Garden Co.)',
      place: 'Islamabad / Riyadh',
      period: 'Jan 2022 – May 2023',
      project: 'Six Flags Qiddiya (landscape LOD 400) · NEOM HAQL (structure and architecture LOD 400)',
      points: [
        'Delivered LOD 400 architectural and structural models in Revit aligned with ISO 19650 and the BEP.',
        'Generated IFC files for multidisciplinary coordination and produced fabrication-ready shop drawings.',
        'Collaborated with engineers, architects, contractors and consultants on BIM coordination and information exchange.',
        'Reviewed models against drawings to catch errors before issue.',
        'Developed parametric Revit families, view templates, project parameters and modelling protocols.',
        'Ran multi-trade clash detection in Navisworks and issued clash reports to reduce rework on site.',
        'Created 4D schedules in Navisworks to visualise construction sequencing.',
        'Weekly submission of BIM models (.rvt, .nwc, IFC) to Revizto and ACC.',
      ],
    },
    {
      role: 'BIM Engineer',
      company: 'Innovative Design and Consultant',
      place: 'Pakistan',
      period: 'Dec 2019 – Nov 2021',
      project: 'NEOM Labour Housing · J7 Emporium · J7 ICON & Radisson Blu',
      points: [
        'Produced structural and architectural drawings and reinforcement detailing.',
        'Prepared quantity take-offs and material schedules.',
      ],
    },
  ],
  education: [
    { title: 'BSc Civil Engineering', org: 'UET Peshawar', note: '88%' },
    { title: 'Post Graduate Diploma in BIM & Construction Management', org: 'CanBIM, Canada', note: '91%' },
    { title: 'NEBOSH Health & Safety in Construction', org: 'NEBOSH, UK', note: '85%' },
  ],
};
