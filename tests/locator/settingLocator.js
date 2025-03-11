'use strict';
export const settingLocator = async (page) => ({
  navBar:{
    myProfile: await page.getByRole('link', { name: 'My profile' }),
    myApplication: await page.getByRole('link', { name: 'My applications' })
  },
  setting : {
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
  },
  createAndManageJob : {
    createNewJobButton : await page.locator(`//a[@class='Button_button__SbxBC Button_variantPrimaryLightBackground___T_v_ Button_borderRegular__irCcT Button_sizeMedium__J0mM8']`)
  },
  createJobForm : {
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
      internalOnly : await page.getByLabel('Internal', { exact: true }),
      externalOnly: await page.getByLabel('External', { exact: true }),
      both: await page.getByLabel('Both', { exact: true })
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
      hourly: await page.getByLabel('Hourly', { exact: true }),
      daily: await page.getByLabel('Daily', { exact: true }),
      monthly: await page.getByLabel('Monthly', { exact: true }),
      yearly: await page.getByLabel('Yearly')
    },  
    minimumSalary: await page.locator(`//input[@name='minimumSalary']`),
    maximumSalary: await page.locator(`//input[@name='maximumSalary']`),

    // Employment Type value: FULL_TIME, PART_TIME, CONTRACT, INTERNSHIP, FREELANCE
    employmentType : {
      empoymentTypeContainer: await page.locator('label').filter({ hasText: 'Employment type *' }).getByLabel('dropdown indicator'),
      internship :await page.getByLabel('Internship', { exact: true }),
      fullTime : await page.getByLabel('FullTime'),
      partTime: await page.getByLabel('PartTime'),
      contract: await page.getByLabel('Contract', { exact: true }),
      freelance: await page.getByLabel('Freelance', { exact: true })
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
          dateOfBirth: await page.locator('li').filter({ hasText: 'Date of birth' }).locator('span')
        },
        {
          ethnicity: await page.locator('li').filter({ hasText: 'Which of the following best describes your ethnicity?Response options' }).locator('span')
        },
        {
          gender: await page.locator('li').filter({ hasText: 'Which of the following genders do you identify as?Response options' }).locator('span')
        },
        {
        sexualOrientatoin: await page.locator('li').filter({ hasText: 'Which of the following best describes your sexual orientation?Response options' }).locator('span')
        },
        {
          disability: await page.locator('li').filter({ hasText: 'Do you consider yourself to' }).locator('span')
        },
        {
          neurodiverse: await page.locator('li').filter({ hasText: 'Do you have any of the' }).locator('span')
        },
        {
          religion: await page.locator('li').filter({ hasText: 'Which of these best describes' }).locator('span')
        },
        {
          school: await page.locator('li').filter({ hasText: 'What type of school did you' }).locator('span')
        },
        {
          meal: await page.locator('li').filter({ hasText: 'Were you eligible for free' }).locator('span')
        }
      ],
      reponseList: [
        {
          ethnicity: await page.locator('li').filter({ hasText: 'Which of the following best describes your ethnicity?Response options' }).getByRole('button'),
          responseOverlay: await page.getByRole('heading', { name: 'Which of the following best' })
        },
        {
          gender: await page.locator('li').filter({ hasText: 'Which of the following genders do you identify as?Response options' }).getByRole('button'),
          responseOverlay: await page.getByRole('heading', { name: 'Which of the following' })
        },
        {
          sexualOrientatoin: await page.locator('li').filter({ hasText: 'Which of the following best describes your sexual orientation?Response options' }).getByRole('button'),
          responseOverlay: await page.getByRole('heading', { name: 'Which of the following best' })
        },
        {
          disability: await page.locator('li').filter({ hasText: 'Do you consider yourself to' }).getByRole('button'),
          responseOverlay: await page.getByRole('heading', { name: 'Do you consider yourself to' })
        },
        {
          neurodiverse: await page.locator('li').filter({ hasText: 'Do you have any of the' }).getByRole('button'),
          responseOverlay: await page.getByRole('heading', { name: 'Do you have any of the' })
        },
        {
          religion: await page.locator('li').filter({ hasText: 'Which of these best describes' }).getByRole('button'),
          responseOverlay: await page.getByRole('heading', { name: 'Which of these best describes' })
        },
        {
          school: await page.locator('li').filter({ hasText: 'What type of school did you' }).getByRole('button'),
          responseOverlay: await page.getByRole('heading', { name: 'What type of school did you' })
        },
        {
          meal: await page.locator('li').filter({ hasText: 'Were you eligible for free' }).getByRole('button'),
          responseOverlay: await page.getByRole('heading', { name: 'Were you eligible for free' })
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
          inputField: await page.getByLabel('', { exact: true }),
          addButton: await page.getByRole('button', { name: 'Add' })
        },
        preDefindQuestion1: await page.getByText('Why would you like to join'),
        preDefindQuestion2: await page.getByText('Who inspires you and why?'),
        preDefindQuestion3: await page.getByText('What sustainable initiative'),
        preDefindQuestion4: await page.getByText('What new technology or'),
        preDefindQuestion5: await page.getByText('What trend do you think will')
      },
      kebabMenu: function(page, number) {
        return page.locator(`div:nth-child(${number}) > .Card_container__zFPvi > .Card_card__HRJrl > .Card_cardHeader__VU_0G > .TheEditQuestionnaireDropdown_question__UBbKm > .ContextMenu_contextMenu__QOxr7 > .ContextMenu_iconMore__SaVsX`);
      },
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
          }/*, not yet implemented on beta
          {
            name: 'video upload',
            locator: await page.getByRole('row', { name: 'Video upload Video upload' }).locator('span').first()
          },
          {
            name: 'video link',
            locator: await page.getByRole('row', { name: 'Video via a weblink Add video' }).locator('span').first()
          }*/,
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
            locator: await page.getByRole('row', { name: 'Weblink Add a weblink.' }).locator('span')
          },
          {
            name: 'audio',
            locator: await page.getByRole('row', { name: 'Audio Upload an audio file.' }).locator('span')
          },
          {
            name: 'image',
            locator: await page.getByRole('row', { name: 'Image Upload an image file.' }).locator('span')
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
          locator: await page.getByRole('row', { name: 'Work experience' }).locator('span').first()
        },
        {
          name: 'psychometrics',
          locator: await page.getByRole('row', { name: 'Psychometrics' }).locator('span').first()
        },
        {
          name: 'education',
          locator: await page.getByRole('row', { name: 'Education' }).locator('span').first()
        },
        {
          name: 'skills',
          locator: await page.getByRole('row', { name: 'Skills' }).locator('span').first()
        }
      ],
      toggleForMedia: [
        {
          name: 'projects',
          locator: await page.getByRole('row', { name: 'Projects' }).locator('span').first(),
        },
        {
          name: 'media cards',
          locator: await page.getByRole('row', { name: 'Media cards' }).locator('span').first()
        },
        {
          name: 'Q&A',
          locator: await page.getByRole('row', { name: 'Q&A' }).locator('span').first()
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
          locator: await page.locator('li').filter({ hasText: 'Profile picture' }).locator('span')
        },
        {
          name: 'name & pronouns',
          locator: await page.locator('li').filter({ hasText: 'Name & pronouns' }).locator('span')
        },
        {
          name: 'Bio',
          locator: await page.locator('li').filter({ hasText: 'Bio location,' }).locator('span')
        },
        {
          name: 'social media',
          locator: await page.locator('li').filter({ hasText: 'Social media &' }).locator('span')
        },
        {
          name: 'psychometrics',
          locator: await page.locator('li').filter({ hasText: 'Psychometrics' }).locator('span')
        },
        {
          name: 'custom question',
          locator: await page.locator('li').filter({ hasText: 'Custom questions' }).locator('span')
        },
        {
          name: 'education',
          locator: await page.locator('li').filter({ hasText: 'Education' }).locator('span')
        },
        {
          name: 'work experience',
          locator: await page.locator('li').filter({ hasText: 'Work experience' }).locator('span')
        },
        {
          name: 'projects',
          locator: await page.locator('li').filter({ hasText: 'Projects' }).locator('span')
        },
        {
          name: 'skills',
          locator: await page.locator('li').filter({ hasText: 'Skills' }).locator('span')
        },
        {
          name: 'media cards',
          locator: await page.locator('li').filter({ hasText: 'Media cards' }).locator('span')
        },
        {
          name: 'Q&A',
          locator: await page.locator('li').filter({ hasText: 'Q&As' }).locator('span')
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
  }
});
