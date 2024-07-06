import { ExperinceType } from '../type/type';

export const NAME = 'Dzmitry Dubovik';
export const PROFESSION = 'NDT Engineer at LLC "Dekra Industrial"';
export const PHONE = '+370 68840131';
export const EMAIL = 'dzmitry.dubovik@dekra.com';
export const LOCATION = 'Vilnius, Lithuania';
export const SUMMARY = [
  'An engineer with 12 years of experience in non-destructive testing, possessing programming and 3D modeling skills.',
  'Personal qualities: Inquisitive, hardworking, proactive, responsible, sociable, and free of bad habits.',
  'Interests: Solving complex problems and engaging in interesting projects.',
];

export const EDUCATION = {
  header: 'Engineer - Belarusian National Technical University',
  years: '2005 -2010',
  about: [
    'Faculty of Instrument Engineering',
    'Department of Information Measuring Devices and Technologies',
    'Speciality is "Methods and Devices for Quality Control and Objects Condition Diagnostics"',
  ],
  logo: 'bntu',
};

export const EXPERIENCE: ExperinceType[] = [
  {
    header: 'NDT Engineer - LLC "Dekra Industrial", Lithuania',
    years: 'May 2023 - Present',
    work: [
      'Conducted non-destructive testing of metal and welded joints;',
      'Developed testing protocols;',
      'Diagnosed steam turbines at a power plant;',
      'Developed the probe for performing ultrasonic testing.',
    ],
    logo: 'dekra',
  },
  {
    header: 'Online programming courses of RS School',
    years: '2021 - 2023',
    work: [
      'Acquired skills in frontend and backend development',
      'Developed frontend, backend and desktop applications',
    ],
    logo: 'rs',
  },
  {
    header: 'NDT Engineer - PLC "Belenergoremnaladka", Belarus',
    years: '2010 -2021',
    work: [
      `Conducted non-destructive testing of metal and welded joints;`,
      `Conducted technical diagnostics of energy equipment (boilers, vessels, pipelines, steam lines, gas pipelines, turbines, etc.);`,
      `Performed strength calculations for energy equipment;`,
      `Carried out strength calculations using the finite element method in Ansys Mechanical software;`,
      `Developed the device for performing penetration testing of the turbine rotor's axial channel;`,
      `Developed methodologies for the inspection of welded joints and base materials;`,
      `Conducted spectral analysis of metals using X-ray fluorescence spectrometers and optical emission spectrometer PMI-MASTER SMART;`,
      `Measured thickness through insulation using the Eddyfi Lyft pulse eddy current flaw detector;`,
      `Developed testing protocols and reports;`,
      `Developed drawings.`,
    ],
    logo: 'bern',
  },
];

export const SKILLS = [
  {
    header: 'Non-destructive testing (NDT):',
    list: ['VT-2', 'PT-2', 'MT-2', 'ET-2', 'UT-2', 'RT-2'],
  },
  {
    header: 'Software:',
    list: ['AutoCAD, Ansys Mechanical, SolidWorks, Maxon Cinema 4d, CorelDRAW, Photoshop'],
  },
  {
    header: 'Programming technologies:',
    list: [
      'Git, HTML, CSS, JavaScript, TypeScript, WebPack, Node.js, NestJS, React, React Native, Angular, Electron, Redux Toolkit, Effector.js, Canvas, Docker, TypeORM, MongoDB, PostgreSQL, GraphQL (Apollo Server), Amazon Web Services (AWS)',
    ],
  },
  {
    header: 'Driving license:',
    list: ['Category B'],
  },
  {
    header: 'Languages:',
    list: ['Russian: native', 'Belarusian: native', 'English : B1'],
  },
];
