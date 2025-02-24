'use strict'
import {test, expect, chromium} from '@playwright/test';  
import * as landingPage from './locator/landingPage.js';
import * as data from './test-data/data.js';
import * as setting from './locator/settingLocator.js';
import { autoGenerationCreateJob } from './ulti-function/generateNameForJob.js';
import dayjs from "dayjs";
import { create } from 'domain';



test('Create a job process', async ({page}) => {
  //variable needed for the locator
  const header = await landingPage.headerLocators(page);
  const signInField = await landingPage.signInFieldLocator(page);
  const settingPage = await setting.settingLocator(page);
  const createAndManageJobPage = await setting.createJobForm(page);
  const createAndManageJob = await setting.createAndManageJob(page);

  //dayjs 
  let today = dayjs().format('DD/MM/YYYY');
  let tomorrow = dayjs().add(1, 'day').format('DD/MM/YYYY');

  //auto generate job name and code
  const jobName = autoGenerationCreateJob.generateJobName();
  const code = autoGenerationCreateJob.codeGenerate();

  //navigate to Vizzy
  page.goto('https://staging.vizzy.com/');

  //Login 
  await header.loginButton.click();
  await signInField.emailField.fill(data.account.email);
  console.log(data.account.email);
  await signInField.passwordField.fill(data.account.password);
  console.log(data.account.password);
  await signInField.signInButton.click();

  // Wait for the page to load and verified the page
  await header.vizzyLogo.waitFor({state: 'visible'});
  await expect(page).toHaveTitle(data.pageTitle.myProfileTitle);

  //navigate to create & manage job
  await settingPage.settingIcon.click();
  await settingPage.createAndManageJob.click();
  console.log('navigate to create & manage job');

  //create a new job
  await createAndManageJob.createNewJobButton.click();
  console.log('create a new job');

  // Job detail
  // Fill in non-required fields
  await createAndManageJobPage.jobTitle.fill(jobName);
  console.log('Job name:', jobName);
  await createAndManageJobPage.jobCode.fill(code);
  console.log('Job code:', code);
  await createAndManageJobPage.applicationStartFromDate.fill(today);
  console.log('Application start from date:', today);
  await createAndManageJobPage.applicatonEndDate.fill(tomorrow);
  console.log('Application end date:', tomorrow);
  await createAndManageJobPage.applicationType.dropdownContainer.click();
  await createAndManageJobPage.applicationType.both.click();
  console.log('Application type: both');
  await createAndManageJobPage.jobDescription.fill('This is a job description');
  console.log('Job description: This is a job description');
  await createAndManageJobPage.requirement.fill('This is a job requirement');
  console.log('Job requirement: This is a job requirement');
  await createAndManageJobPage.workModel.onsite.click();
  console.log('Work model: Onsite');
  await createAndManageJobPage.expectedStartDate.fill(tomorrow);
  console.log('Expected start date:', tomorrow);
  await createAndManageJobPage.country.fill('Cambodia');
  console.log('Country: Cambodia');
  await createAndManageJobPage.city.fill('Siem Reap');
  console.log('City: Siem Reap');
  await createAndManageJobPage.currencyDropdown.currencyDropdownContainer.click();
  await createAndManageJobPage.currencyDropdown.USD.click();
  console.log('Currency value: USD');
  await createAndManageJobPage.salaryTypeDropdown.salaryTypeDropdownContainer.click();
  await createAndManageJobPage.salaryTypeDropdown.monthly.click();
  console.log('Salary type: Monthly');
  await createAndManageJobPage.employmentType.empoymentTypeContainer.click();
  await createAndManageJobPage.employmentType.fullTime.click();
  console.log('Employment type: Full-time');
  await createAndManageJobPage.minimumSalary.fill('1000');
  console.log('Minimum salary: 1000');
  await createAndManageJobPage.maximumSalary.fill('2000');
  console.log('Maximum salary: 2000');
  
  // Save the job
  await createAndManageJobPage.jobDetailSaveButton.click();
  console.log('Save the job');

  // Wait for the save button to be disabled
  await page.waitForTimeout(5000);


  //check if the save is success
  let isSaveButtonDisabled = await createAndManageJobPage.jobDetailSaveButton.isDisabled();
  console.log('Save button is disabled initially:', isSaveButtonDisabled);
  expect(isSaveButtonDisabled).toBe(true);
  console.log('save success');
});