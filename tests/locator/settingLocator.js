import { scheduler } from "timers/promises";

export const settingLocator = async (page) => ({
  settingIcon: await page.locator(`a[aria-label='Settings'] svg path`),
  MyAccount: await page.locator(`//aside[@class='Sidebar_sidebar__359Vd SettingsLayout_sidebar__IM3iT']//a[normalize-space()='My account']`),
  businessAccountSetting : await page.locator(`//aside[@class='Sidebar_sidebar__359Vd SettingsLayout_sidebar__IM3iT']//a[contains(text(),'Business account settings')]`),
  createAndManageJob : await page.locator(`aside[class='Sidebar_sidebar__359Vd SettingsLayout_sidebar__IM3iT'] div:nth-child(4) a:nth-child(1)`),
  createAndManageCommuntiy : await page.locator(`//aside[@class='Sidebar_sidebar__359Vd SettingsLayout_sidebar__IM3iT']//a[contains(text(),'Create & manage community')]`),
  candidateLandingPage : await page.locator(`//aside[@class='Sidebar_sidebar__359Vd SettingsLayout_sidebar__IM3iT']//a[contains(text(),'Candidate landing page')]`),
  communityLandingPage : await page.locator(`//aside[@class='Sidebar_sidebar__359Vd SettingsLayout_sidebar__IM3iT']//a[contains(text(),'Community landing page')]`),
  businessVizzyProfile : await page.locator(`//aside[@class='Sidebar_sidebar__359Vd SettingsLayout_sidebar__IM3iT']//a[contains(text(),'Business Vizzy profile')]`),
  integrations : await page.locator(`//aside[@class='Sidebar_sidebar__359Vd SettingsLayout_sidebar__IM3iT']//a[contains(text(),'Integrations')]`),
  logOut: await page.locator(`//aside[@class='Sidebar_sidebar__359Vd SettingsLayout_sidebar__IM3iT']//a[normalize-space()='Log out']`)
});

export const createAndManageJob = async (page) => ({
  createNewJobButton : await page.locator(`//a[@class='Button_button__SbxBC Button_variantPrimaryLightBackground___T_v_ Button_borderRegular__irCcT Button_sizeMedium__J0mM8']`)
});

export const createJobForm = async (page) => ({
  //successMessage
  sucessMessage: await page.getByText('Content saved'),
  //save Button
  saveButton: await page.getByRole('button', { name: 'Save' }),
  //job detail
  jobDetailCopy: await page.getByText('This section outlines the'),
  jobDetailSaveButton: await page.getByRole('button', { name: 'Save' }),
  jobTitle :  await page.getByPlaceholder('New job'),
  jobCode :await page.getByLabel('Code *Required for job URL'),
  applicationStartFromDate: await page.getByLabel('Applications open from *'),
  applicatonEndDate : await page.locator(`//input[@name='endDate']`),
  timeZoneDefault: await page.locator(`//input[@placeholder='Select']`),
  applicationType: {
    dropdownContainer :  page.locator('label').filter({ hasText: 'Application type *' }).getByLabel('dropdown indicator'),
    internalOnly : await page.getByLabel('INTERNAL', { exact: true }),
    externalOnly: await page.getByLabel('EXTERNAL', { exact: true }),
    both: await page.getByLabel('BOTH', { exact: true })
  },
  jobDescription: await page.getByPlaceholder('Add a description for'),
  requirement : await page.getByPlaceholder('Add requirements for the role'),
  workModel: {
    onsite: await page.locator('label').filter({ hasText: 'Onsite' }),
    hybrid:  page.locator('label').filter({ hasText: 'Hybrid' }).locator('span').first(),
    remote: await page.locator('label').filter({ hasText: 'Remote' }).locator('span').first()
  },
  expectedStartDate: await page.getByLabel('Expected start date'),
  country: await page.getByLabel('Country *'),
  city : await page.getByLabel('City'),

  //currency value: USD, EUR, GBP, JPY, CAD
  currencyDropdown: {
    currencyDropdownContainer: await page.locator('label').filter({ hasText: 'CurrencySelectUSDEURGBPJPYCADSelect' }).getByLabel('dropdown indicator'),
    USD: await page.getByLabel('USD', { exact: true }),
    EUR: await page.getByLabel('EUR', { exact: true }),
    GBP: await page.getByLabel('GBP', { exact: true }),
    JPY: await page.getByLabel('JPY', { exact: true }),
    CAD: await page.getByLabel('CAD', { exact: true })
  },

  //salary value: HOURLY, DAILY, MONTHLY, YEARLY
  salaryTypeDropdown: {
    salaryTypeDropdownContainer: await page.locator('label').filter({ hasText: 'Salary typeSelectHourlyDailyMonthlyAnnualSelect' }).getByLabel('dropdown indicator'),
    hourly: await page.getByLabel('HOURLY', { exact: true }),
    daily: await page.getByLabel('DAILY', { exact: true }),
    monthly: await page.getByLabel('MONTHLY', { exact: true }),
    yearly: await page.getByLabel('YEARLY', { exact: true })
  },  
  minimumSalary: await page.locator(`//input[@name='minimumSalary']`),
  maximumSalary: await page.locator(`//input[@name='maximumSalary']`),

  // Employment Type value: FULL_TIME, PART_TIME, CONTRACT, INTERNSHIP, FREELANCE
  employmentType : {
    empoymentTypeContainer: await page.locator('label').filter({ hasText: 'Employment type *' }).getByLabel('dropdown indicator'),
    internship :await page.getByLabel('INTERNSHIP', { exact: true }),
    fullTime : await page.getByLabel('FULL_TIME'),
    partTime: await page.getByLabel('PART_TIME'),
    contract: await page.getByLabel('CONTRACT', { exact: true }),
    freelance: await page.getByLabel('FREELANCE', { exact: true })
  },


  //Group jobs
  groupsJob: {
    groupJobCopy: await page.getByText('Group jobs by campaign,'),
    groupJobTab: await page.getByRole('button', { name: 'Group jobs' }),
    groupJobDropDownContainer: await page.getByLabel('Select groupNo group'),
    createNewGroupButton: await page.getByText('Create a new group'),
    newGroup:{
      groupTitle: await page.getByPlaceholder('Enter text here'),
      groupDescription: await page.getByPlaceholder('Enter text here'),
    }
  },

  //Prerequisite and EDI
  prerequsiteAndEDITab: await page.getByRole('button', { name: 'Pre-requisites and EDI' }),
  prerequisiteQuestion: {
    prerequisteCopy: await page.getByText('Ask candidates questions to'),
    addQuestionButton: await page.getByRole('button', { name: 'Add question' }),
    questionField: await page.getByLabel('Prerequisite question *Max'),
    answerField: await page.getByLabel('Answer', { exact: true }),
    addAnswerButton: await page.getByRole('button', { name: 'Add', exact: true }),
    multipleQuestionToggle: await page.locator('label').filter({ hasText: 'Allow multiple answers' }).locator('span'),
    saveQuestionButton: await page.locator('#modal-lightbox').getByRole('button', { name: 'Save' })
  },
  EDI:{
    EDITab: await page.getByRole('button', { name: 'Equity, Diversity, &' }),
    EDICopy: await page.getByText('Select which questions you'),
    EDIList: [
      {
        dateOfBirth: await page.locator('li').filter({ hasText: 'Checkbox fieldDate of birth' }).locator('span').first(),
      },
      {
        ethnicity: await page.locator('li').filter({ hasText: 'Checkbox fieldWhich of the following best describes your ethnicity?Response' }).locator('span').first(),
      },
      {
        gender: await page.locator('li').filter({ hasText: 'Checkbox fieldWhich of the following genders do you identify as?Response options' }).locator('span').first()
      },
      {
      sexualOrientatoin: await page.locator('li').filter({ hasText: 'Checkbox fieldWhich of the following best describes your sexual orientation?' }).locator('span').first()
      },
      {
        disability: await page.locator('li').filter({ hasText: 'Checkbox fieldDo you consider' }).locator('span').first()
      },
      {
        neurodiverse: await page.locator('li').filter({ hasText: 'Checkbox fieldDo you have any' }).locator('span').first()
      },
      {
        religion: await page.locator('li').filter({ hasText: 'Checkbox fieldWhich of these' }).locator('span').first()
      },
      {
        school: await page.locator('li').filter({ hasText: 'Checkbox fieldWhat type of' }).locator('span').first()
      },
      {
        meal: await page.locator('li').filter({ hasText: 'Checkbox fieldWere you' }).locator('span').first()
      }
    ],
    reponseList: [
      {
        ethnicity: await page.locator('li').filter({ hasText: 'Checkbox fieldWhich of the following best describes your ethnicity?Response' }).getByRole('button'),
        responseOverlay: await page.getByText('Which of the following best describes your ethnicity?Asian - ChineseAsian -')
      },
      {
        gender: await page.locator('li').filter({ hasText: 'Checkbox fieldWhich of the following genders do you identify as?Response options' }).getByRole('button'),
        responseOverlay: await page.getByText('Which of the following genders do you identify as?FemaleMaleNon-binary /')
      },
      {
        sexualOrientatoin: await page.locator('li').filter({ hasText: 'Checkbox fieldWhich of the following best describes your sexual orientation?' }).getByRole('button'),
        responseOverlay: await page.getByText('Which of the following best describes your sexual orientation?BisexualGay or')
      },
      {
        disability: await page.locator('li').filter({ hasText: 'Checkbox fieldDo you consider' }).getByRole('button'),
        responseOverlay: await page.locator('li').filter({ hasText: 'Checkbox fieldDo you consider' }).getByRole('button')
      },
      {
        neurodiverse: await page.locator('li').filter({ hasText: 'Checkbox fieldDo you have any' }).getByRole('button'),
        responseOverlay: await page.getByText('Do you have any of the following Neurodiverse conditions?Attention Deficit')
      },
      {
        religion: await page.locator('li').filter({ hasText: 'Checkbox fieldWhich of these' }).getByRole('button'),
        responseOverlay: await page.getByText('Which of these best describes your religion?No')
      },
      {
        school: await page.locator('li').filter({ hasText: 'Checkbox fieldWhat type of' }).getByRole('button'),
        responseOverlay: await page.getByText('What type of school did you mainly attend between ages 11-16?Selective state')
      },
      {
        meal: await page.locator('li').filter({ hasText: 'Checkbox fieldWere you' }).getByRole('button'),
        responseOverlay: await page.getByText('Were you eligible for free school meals?YesNoNot applicable (finished school')
      }

    ],
    EDISuccessMessage : await page.getByText('Success!')
  },

  //Candidate profile
  candidateProfileTab : await page.getByRole('button', { name: 'Candidate profiles' }),
  customQA : {
    customQACopy: await page.getByText('Select questions from Vizzy\'s'),
    customQAContainer : await page.getByLabel('Choose from listSelect'),
    customQADropdown: {
      createYourOwn: {
        dropDown: await page.getByText('Create your own', { exact: true }),
        inputField: await page.getByLabel('Text field'),
        addButton: await page.getByRole('button', { name: 'Add' })
      },
      preDefindQuestion1: await page.getByText('Why would you like to join')
    },
    kebabMenu1: await page.getByLabel('button').nth(2),
    kebabMenu2: await page.getByLabel('button').nth(4),
    answerRequrement: {
      copy: await page.getByText('Specify the type of media'),
      answerRequrementButton: await page.getByRole('button', { name: 'Answer requirements' }),
      toggle: [
        {
          name: 'text answer',
          locator: await page.getByRole('row', { name: 'Text answer Provide an answer' }).locator('span').first()
        },
        {
          name: 'video(both)',
          locator: await page.getByRole('row', { name: 'Video Upload a video, or add' }).locator('span').first()
        },
        {
          name: 'video upload',
          locator: await page.getByRole('row', { name: 'Video upload Video upload' }).locator('span').first()
        },
        {
          name: 'video link',
          locator: await page.getByRole('row', { name: 'Video via a weblink Add video' }).locator('span').first()
        },
        {
          name: 'portfolio',
          locator: await page.getByRole('row', { name: 'Portfolio Upload a PDF or add' }).locator('span').first()
        },
        {
          name: 'document',
          locator: await page.getByRole('row', { name: 'Document Upload a PDF file.' }).locator('span').first()
        },
        {
          name: 'weblink',
          locator: await page.getByRole('row', { name: 'Weblink Add a weblink. hidden' }).locator('span').first()
        },
        {
          name: 'audio',
          locator: await page.getByRole('row', { name: 'Audio Upload an audio file.' }).locator('span').first()
        },
        {
          name: 'image',
          locator: await page.getByRole('row', { name: 'Image Upload an image file.' }).locator('span').first()
        }
      ],
      saveButton: await page.locator('#modal-lightbox').getByRole('button', { name: 'Save' }),
      confirmButton: await page.getByRole('button', { name: 'Confirm' })
    }
      
  },
  
  //submissionRequirement
  submissionRequirement:{
    submissionTab : await page.getByRole('button', { name: 'Submission requirements' }),
    copy1: await page.getByText('Select the information'),
    copy2: await page.getByText('Anything listed as neither'),
    toggle: [
      {
        name: 'work experience',
        locator: await page.getByRole('row', { name: 'Work experience Checkbox' }).locator('span').first()
      },
      {
        name: 'psychometrics',
        locator: await page.getByRole('row', { name: 'Psychometrics Checkbox field' }).locator('span').first()
      },
      {
        name: 'education',
        locator: await page.getByRole('row', { name: 'Education Checkbox field' }).locator('span').first()
      },
      {
        name: 'skills',
        locator: await page.getByRole('row', { name: 'Skills Checkbox field' }).locator('span').first()
      }
    ],
    toggleForMedia: [
      {
        name: 'projects',
        locator: await page.getByRole('row', { name: 'Projects Checkbox field' }).locator('span').first(),
      },
      {
        name: 'media cards',
        locator: await page.getByRole('row', { name: 'Media cards Checkbox field' }).locator('span').first()
      },
      {
        name: 'Q&A',
        locator: await page.getByRole('row', { name: 'Q&A Checkbox field Checkbox' }).locator('span').first()
      }
    ]
  },

  //screening
  screeningTab: await page.getByRole('button', { name: 'Screening' }),
  recruiterAcess: {
    copy1: await page.getByText('Account owners, Super admins'),
    copy2: await page.getByText('\'Recruiters\' need to be'),
    selectAllButton: await page.getByText('Select all'),
    assignButton: await page.getByRole('button', { name: 'Assign', exact: true }),
    unassignButton: await page.getByRole('button', { name: 'Unassign' }),
    confirmYes: await page.getByRole('button', { name: 'Yes' })
  },
  anonHiring: {
    anonHiringTab: await page.getByRole('button', { name: 'Anonymised hiring' }),
    copy: await page.getByText('Select the content that'),
    checkBox: [
      {
        name: 'profile picture',
        locator: await page.locator('li').filter({ hasText: 'Checkbox fieldProfile picture' }).locator('span').first()
      },
      {
        name: 'name & pronouns',
        locator: await page.locator('li').filter({ hasText: 'Checkbox fieldName & pronouns' }).locator('span').first()
      },
      {
        name: 'Bio',
        locator: await page.locator('li').filter({ hasText: 'Checkbox fieldBio location,' }).locator('span').first()
      },
      {
        name: 'social media',
        locator: await page.locator('li').filter({ hasText: 'Checkbox fieldSocial media &' }).locator('span').first()
      },
      {
        name: 'psychometrics',
        locator: await page.locator('li').filter({ hasText: 'Checkbox fieldPsychometrics' }).locator('span').first()
      },
      {
        name: 'custom question',
        locator: await page.locator('li').filter({ hasText: 'Checkbox fieldCustom questions' }).locator('span').first()
      },
      {
        name: 'education',
        locator: await page.locator('li').filter({ hasText: 'Checkbox fieldEducation' }).locator('span').first()
      },
      {
        name: 'work experience',
        locator: await page.locator('li').filter({ hasText: 'Checkbox fieldWork experience' }).locator('span').first()
      },
      {
        name: 'projects',
        locator: await page.locator('li').filter({ hasText: 'Checkbox fieldProjects' }).locator('span').first()
      },
      {
        name: 'skills',
        locator: await page.locator('li').filter({ hasText: 'Checkbox fieldSkills' }).locator('span').first()
      },
      {
        name: 'media cards',
        locator: await page.locator('li').filter({ hasText: 'Checkbox fieldMedia cards' }).locator('span').first()
      },
      {
        name: 'Q&A',
        locator: await page.locator('li').filter({ hasText: 'Checkbox fieldQ&As' }).locator('span').first()
      }
    ]
  },

  //landing page
  landingPage:{
    landingPageTab: await page.getByRole('button', { name: 'Landing page' }),
    copy: await page.getByText('Assign the landing page that'),
    primary:  await page.locator('ul').filter({ hasText: 'Primary landing pageNew' }).locator('span').first()
  },
  publishButton:  await page.getByRole('button', { name: 'Publish' }),
  confirmPublish: await page.getByRole('button', { name: 'Yes, publish now!' }),
  publishedMessage: await page.getByText('Job is published now')
});
