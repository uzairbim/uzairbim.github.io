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
  // Set to false to hide the "Open to BIM Engineering Opportunities" status on the Home page.
  openToWork: true,
  openToWorkLabel: 'Open to BIM Engineering Opportunities',
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
  cv: '/downloads/Uzair-Ur-Rehman-CV.pdf',
  // Canva share link: always shows the latest version of your Canva design.
  portfolioLink: 'https://canva.link/br3h9qou92mbvsf',
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
      role: 'BIM Engineer',
      company: 'Havelock One (Interior Fit-out)',
      place: 'Jeddah, KSA',
      period: 'Feb 2026 – Present',
      project: 'Four Seasons Hotel and Private Residences Jeddah',
      points: [
        'Playing a key role in implementing BIM on the project.',
        'Creating LOD 400 and LOD 500 models (red-line markups).',
        'Resolving clashes in Revizto and Navisworks before drawings are implemented on site by the site engineers.',
        'Creating BIM models from CAD drawings.',
        'Creating the AIM (Asset Information Model) and PIM (Project Information Model).',
        'Developing BIM models in line with the BEP.',
        'Using pyRevit, DiRoots, Dynamo and other automation tools to streamline workflows.',
        'Collaborating with designers, site engineers and team members to increase productivity and maintain the project baseline.',
        'Weekly submission of BIM models via ACC, Aconex and Revizto.',
        'Weekly BIM progress presentations to the Project Manager.',
      ],
    },
    {
      role: 'BIM Engineer',
      company: 'CONSOL Arabia Contracting (ALEC Fit-out)',
      place: 'Riyadh, KSA',
      period: 'Jun 2025 – Feb 2026',
      project: 'ILMI Science & Innovation Center, MISK City',
      points: [
        'Developed LOD 400 architectural models and resolved clashes in Revizto.',
        'Built Dynamo scripts that create sheets and export them to PDF and CAD with ISO 19650 naming.',
        'Managed MIDP and TIDP and produced 5D quantity take-offs and BOQs.',
      ],
    },
    {
      role: 'BIM Specialist (Freelance)',
      company: 'Mint Creative Production',
      place: 'Tabuk, KSA',
      period: 'Jan 2025 – Jun 2025',
      project: 'Tabuk Entertainment Complex',
      points: [
        'Created parametric Revit families for the project.',
        'Managed clash detection in Navisworks and issued clash reports.',
      ],
    },
    {
      role: 'BIM Engineer',
      company: 'DMS Management Group',
      place: 'Florida, USA (remote)',
      period: 'Jul 2023 – Nov 2024',
      project: 'Education and public-safety projects in California',
      points: [
        'Modelled light gauge steel framing to LOD 400 with MWF Pro Metal.',
        'Coordinated with GCs and subcontractors through BIM 360/ACC, Procore and Revizto.',
      ],
    },
    {
      role: 'BIM Engineer',
      company: 'Proctor Global Design (for Rabiah Garden Co.)',
      place: 'Islamabad / Riyadh',
      period: 'Jan 2022 – May 2023',
      project: 'Six Flags Qiddiya · NEOM HAQL',
      points: [
        'Delivered LOD 400 architectural, structural and landscape models aligned with the BEP.',
        'Created 4D schedules in Navisworks to visualise construction sequencing.',
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
