'use strict'
import {test, expect, chromium} from '@playwright/test';  
import * as landingPage from './locator/landingPage.js';
import * as data from './test-data/data.js';
import * as setting from './locator/settingLocator.js';
import { autoGenerationCreateJob, answerCreationLoop, checkButtonDisabled, checkForSuccessMessage} from './ulti-function/generateNameForJob.js';
import dayjs from "dayjs";


test('Create a job process', async ({page}) => {
  page.setDefaultTimeout(100000);
  //variable needed for the locator
  const header = await landingPage.headerLocators(page);
  const signInField = await landingPage.signInFieldLocator(page);
  const settingPage = await setting.settingLocator(page);
  const createAndManageJobPage = await setting.createJobForm(page);
  const createAndManageJob = await setting.createAndManageJob(page);
  const EDIListLocator = createAndManageJobPage.EDI.EDIList;
  const responseList = createAndManageJobPage.EDI.reponseList;
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
  await expect(createAndManageJobPage.jobDetailCopy).toHaveText(data.copy.jobDetailCopy);
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
  await createAndManageJobPage.saveButton.click();
  console.log('Save the job');

  //check for success message
  await checkForSuccessMessage(createAndManageJobPage.sucessMessage);

  //check if the button is disable after save
  await checkButtonDisabled(createAndManageJobPage.saveButton);

  await page.waitForTimeout(2000);

  //create a new group
  await createAndManageJobPage.groupsJob.groupJobTab.click();
  await expect(createAndManageJobPage.groupsJob.groupJobCopy).toHaveText(data.copy.groupJobCopy);
  await createAndManageJobPage.groupsJob.groupJobDropDownContainer.click();
  await createAndManageJobPage.groupsJob.createNewGroupButton.click();
  await createAndManageJobPage.groupsJob.newGroup.groupTitle.fill('Automation');
  await createAndManageJobPage.groupsJob.newGroup.groupDescription.fill('This is an automation group');
  await createAndManageJobPage.saveButton.click();

  //check for success message
  await checkForSuccessMessage(createAndManageJobPage.sucessMessage);

  //check if the button is disable after save
  await checkButtonDisabled(createAndManageJobPage.saveButton);

  //pre-requiste questions creation
  await createAndManageJobPage.prerequsiteAndEDITab.click();
  await expect(createAndManageJobPage.prerequisiteQuestion.prerequisteCopy).toHaveText(data.copy.prerequisteCopy);
  //add question with no multi answers
  await createAndManageJobPage.prerequisiteQuestion.addQuestionButton.click();
  // Verify if the toggle is enabled or disabled
  const isToggleEnabled = await createAndManageJobPage.prerequisiteQuestion.multipleQuestionToggle.isChecked();
  expect(isToggleEnabled).toBe(false); 
  await createAndManageJobPage.prerequisiteQuestion.questionField.fill('automation questions');
  await answerCreationLoop(createAndManageJobPage);
  await createAndManageJobPage.prerequisiteQuestion.saveQuestionButton.click();
  //add question with multi answers
  await createAndManageJobPage.prerequisiteQuestion.addQuestionButton.click();
  // Verify if the toggle is enabled or disabled
  expect(isToggleEnabled).toBe(false);
  await createAndManageJobPage.prerequisiteQuestion.questionField.fill('automation questions 2');
  await answerCreationLoop(createAndManageJobPage);
  await createAndManageJobPage.prerequisiteQuestion.multipleQuestionToggle.click();
  await createAndManageJobPage.prerequisiteQuestion.saveQuestionButton.click();
  await createAndManageJobPage.saveButton.click();

  //check for success message
  await checkForSuccessMessage(createAndManageJobPage.sucessMessage);

  //check if the button is disable after save
  await checkButtonDisabled(createAndManageJobPage.saveButton);

  //EDI
  await createAndManageJobPage.EDI.EDITab.click();
  await expect(createAndManageJobPage.EDI.EDICopy).toHaveText(data.copy.EDICopy);
  //loop through and check if the list is unchecked by default
  for (const item of EDIListLocator) {
    for (const key in item) {
      const locator = item[key];
      const isChecked = await locator.isChecked();
      expect(isChecked).toBe(false);
      if(!isChecked){
        await locator.click();
      }
    }
  }

  //loop to check the response overlay
  for (const item of responseList) {
    // Click on the first locator in the object
    for (const key in item) {
      if (key !== 'responseOverlay') {
        await item[key].click();

        // Verify if the responseOverlay is visible
        const responseOverlayLocator = await item.responseOverlay;
        await expect(responseOverlayLocator).toBeVisible();
        const isVisible = await responseOverlayLocator.isVisible();
            if (isVisible) {
                await page.keyboard.press('Escape');
            }
      }
    }
  }

  await createAndManageJobPage.saveButton.click();

  await checkButtonDisabled(createAndManageJobPage.saveButton);

  await checkForSuccessMessage(createAndManageJobPage.sucessMessage);
});