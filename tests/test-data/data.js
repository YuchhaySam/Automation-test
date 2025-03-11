'use strict';
export const data = {
  accountStaging: {
    email: 'sounsony@gmail.com',
    password: '@Sony7727',
  },
  accountBeta: {
    email: 'yuchhay.sam@nuformdigital.com',
    password: 'Yuchhaysam123@'
  },
  candidateAccount: {
    email: 'johnbrewmen14@indigobook.com',
    password: 'Yuchhaysam123@'
  },
  BOAccount:{
    email : 'jaksmokqa@gmail.com',
    password: 'Abc1234!'
  },
  pageTitle: {
    myProfileTitle: 'Profile | Vizzy',
    settingTitle: 'Settings | Vizzy',
    myApplication: 'My Applications | Vizzy',
    BODashBoard: 'Vizzy | Dashboard',
    businessDetail: 'Vizzy | Business Detail'
  },
  copy: {
    jobDetailCopy: "This section outlines the minimum mandatory requirements for creating a job. Please complete the required fields, then click 'Save' and 'Publish'. This information will be visible to candidates.",
    groupJobCopy: "Group jobs by campaign, region, department, etc., for example, 'On-Campus Recruiting Program'. Candidates will view your jobs in these groups, and their applications will be organised into these groups for you and your recruiters to screen.",
    prerequisteCopy: `Ask candidates questions to easily filter by key criteria. For example, "Do you have the right to work in the UK?" These questions will appear before candidates create their Vizzy profile. Recruiters can filter candidates based on these questions and answers.`,
    EDICopy: `Select which questions you would like your candidates to answer. These questions will appear before they create their profile. Recruiters cannot identify individuals by their answers. The aggregated data will be presented to recruiters in the 'Insights' section.`,
    customQA: `Select questions from Vizzy's shortlist or create your own. These questions will appear at the top of candidates' profiles. Candidates can bring their answers to life with Vizzy's multimedia tools. Questions will appear in the order they are arranged in below.`,
    answerRequirementCopy: `Specify the type of media candidates must use to answer this question. You can select one or multiple types of media. Candidates cannot submit their application unless they provide answers using the selected format(s):`,
    submissionRequirement: {
      copy1: `Select the information candidates must complete before submitting their application or remove content entirely from their profile.`,
      copy2: `Anything listed as neither required nor removed will appear as 'Optional'. The Bio card and custom questions (if created) will always be required.`
    },
    recruiterAcess: {
      copy1: `Account owners, Super admins, and Hiring admins automatically have access to all jobs.`,
      copy2: `'Recruiters' need to be assigned to this job, enabling them to view, shortlist, and share candidates / applications.`
    },
    anonHiring: `Select the content that should be hidden from recruiters during the screening process.`,
    landingPage: `Assign the landing page that candidates applying to this job will visit to sign up/log in. You can create new landing pages and update existing ones in 'Candidate Landing Pages'. If you create a new candidate landing page, you will need to return to this section to assign it to this job.`,
    EDIQuestion: {
      DOB: 'Let’s start with your date of birth',
      ethnicity: 'Which of the following best describes your ethnicity?',
      gender: 'Which of the following genders do you identify as?',
      sexualOrientaltion: 'Which of the following best describes your sexual orientation?',
      disability: 'Do you consider yourself to have any long-standing mental or physical illness or disability?',
      neurodiverse: 'Do you have any of the following Neurodiverse conditions?',
      religion: 'Which of these best describes your religion?',
      meal: 'Were you eligible for free school meals?',
      school: 'What type of school did you mainly attend between ages 11-16?'
    },
    bio: {
      tag: `Add tags to provide more information about your interests, nationalities, languages, etc.`,
      socialPlatform: `Add your social media channels. You can add up to 6.`
    },
    skill: `Any software you're handy with? Or maybe you're a great presenter, writer, problem solver, juggler? Type a skill and pick a colour below.`,
    hideCardCopy: `Please note: if this content is ‘required’ for this or any other application(s) it will continue to be visible in that application. By selecting ‘Hide’, this content will be hidden on your personal profile / ‘My Profile’, and can be unhidden at any time.`,
    hideCheckModalCopy: `This content is currently hidden on your public profile but it is required for this application. It will continue to be hidden on your public profile.`
  },
  url: {
    jobSpecificURLStaging: 'https://staging.vizzy.com/jobs/@Cavemans/c/cjjbcfz',
    jobSpecificURLBeta: 'https://beta.vizzy.com/jobs/@demoPinpoint/c/g5vsfhx',
    vizzyStaging: 'https://staging.vizzy.com/',
    vizzyBeta: 'https://beta.vizzy.com/',
    youtubeURL1: 'https://www.youtube.com/watch?v=GPZ2hPn9rEQ',
    youtubeURL2: 'https://www.youtube.com/watch?v=MxfbUPpwDlw',
    vimeoURL1: 'https://vimeo.com/1062256004',
    vimeoURL2: 'https://vimeo.com/952721889',
    businessURL: 'https://teamfighttactics.leagueoflegends.com/en-us/',
    mailinator: 'https://www.mailinator.com/',
    mailTM: 'https://mail.tm/en/',
    new: 'www.nytimes.com',
    BOStaging: 'admin.staging.vizzy.com',
    BOBeta: 'admin.beta.vizzy.com',
  },
  locatorData: {
    ethnicity: {
      asainChinese: 'Asian - Chinese',
      asainChineseOther: 'Asian - Chinese Other',
      asianSoutheastAsian: 'Asian - Southeast Asian',
      asianJapanese: 'Asian - Japanese',
      asianKorean: 'Asian - Korean',
      asianPakistani: 'Asian - Pakistani',
      asianBangladeshi: 'Asian - Bangladeshi',
      asianIndian: 'Asian - Indian',
      asianOther: 'Asian - Other',
      blackAfrican: 'Black - African',
      blackCaribbean: 'Black - Caribbean',
      blackOther: 'Black - Other',
      hispanic: 'Hispanic or Latino',
      hawaiian: 'Hawaiian or Pacific Islander',
      nativeAmerican: 'Native American',
      middleEastern: 'Middle Eastern / Arab',
      northAfrican: 'North African / Arab',
      mixedBlack: 'Mixed - Black and other',
      mixedAsian: 'Mixed - Asian and other',
      mixedHispanic: 'Mixed - Hispanic and other',
      mixedPacificIslander: 'Mixed - Pacific Islander and other',
      mixedNorthAfrican: 'Mixed - North African and other',
      mixedOther: 'Mixed - Other',
      white: 'White',
    },
    gender: {
      female: 'Female',
      male: /^Male$/, //cannot use
      nonBinary: 'Non-binary / Genderqueer /',
      transman: 'Transman',
      transwoman: 'Transwoman',
      preferNotToSay: 'Prefer not to say',
      preferToSelfDescribe: 'Prefer to self-describe'
    },
    sexualOrientaltion: {
      bisexual: 'Bisexual',
      gay: 'Gay or Lesbian',
      heterosexual: 'Heterosexual',
      preferNotToSay: 'Prefer not to say',
      other: 'Other'
    },
    disability: {
      mentalIllness: 'Yes - Mental illness/',
      physicalIllness: 'Yes - Physical illness/',
      combination: 'Yes - Combination of physical',
      no: /^No$/, //cannot use
      preferNotToSay: 'Prefer not to say'
    },
    neurodiverse: {
      ADD: 'Attention Deficit Disorder (',
      autism: 'Autism Spectrum Conditions (',
      dyscalculia: 'Dyscalculia',
      dyslexia: 'Dyslexia',
      dyspraxia: 'Dyspraxia',
      tourettee: 'Tourette Syndrome',
      notApplicable: 'Not applicable to me',
      preferNotToSay: 'Prefer not to say',
      other: 'Other'
    },
    religion: {
      no: 'No religion',
      buddhish: 'Buddhist',
      christian: 'Christian',
      hindu: 'Hindu',
      jewish: 'Jewish',
      muslim: 'Muslim',
      sikh: 'Sikh'
    },
    meal: {
      yes: 'Yes',
      no: /^No$/, //cannot use
      notApplicable: 'Not applicable (finished',
      notSure: 'Not sure',
      preferNotToSay: 'Prefer not to say',
    },
    school: {
      selectiveState: 'Selective state school on',
      nonSelective: 'Non-selective state school',
      indpendent: 'Independent or fee-paying school - bursary',
      outside: 'Attended school outside of',
      notSure: 'Not sure',
      other: /^Other$/,
      preferNotToSay: 'Prefer not to say'
    },
    headerQuestions: {
      DOB: 'Let’s start with your date of',
      ethnicity: 'Which of the following best',
      gender: 'Which of the following',
      sexualOrientation: 'Which of the following best',
      disability: 'Do you consider yourself to',
      neurodiverse: 'Do you have any of the',
      religion: 'Which of these best describes',
      meal: 'Were you eligible for free',
      school: 'What type of school did you'
    }
  },
  fileType: {
    image: ['jpg', 'png', 'gif'],
    audio: ['mp3', 'wav', 'ogg', 'm4a', 'flac'], //acc bug
    video: ['mp4', 'mov', 'avi', 'vimeo', 'youtube' ],
    portfolio : ['pdf', 'weblink'],
    card: ['jpg', 'wav' , 'pdf', 'youtube', 'vimeo', 'weblink'],
    tempoaryQA: ['jpg', 'wav' , 'pdf']
  },
  education: {
    institute: 'Delft University of Technology',
    url: 'https://www.ox.ac.uk/',
    degree: 'Doctor Law - JD',
    grade: '4.0',
    fieldOfStudy: 'Law',
    startDate: '02/2007',
    endDate: '08/2010',
    description: 'This is an automated description',
  },
  work: {
    companyName: 'Nuform digital',
    companyURL: 'https://www.nuformtechnology.com/',
    title: 'QA',
    location: 'Cambodia',
    description: 'This is an automated description',
    startDate: '09/2008',
    endDate: '01/2020'
  },
  project: {
    title: 'Building a platform',
    description: 'This is an automated description',
    startDate: '09/2012',
    endDate: '03/2018'
  },
  media:{
    headline: 'Book of a god',
    description: 'This is an automated description'
  },
  additionalInformation:{
    businessName: 'Cave Men Cafes'
  }
};