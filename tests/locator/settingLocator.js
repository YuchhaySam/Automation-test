
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
  
  //job detail
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
  }
});

const createJobData = [];