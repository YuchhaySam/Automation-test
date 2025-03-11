'use strict'
import {test, expect, chromium} from '@playwright/test';  
import * as landingPage from '../locator/landingPage.js';
import { data } from '../test-data/data.js';
import * as settingLocator from '../locator/settingLocator.js';
import { jobUtils } from '../ulti-function/util.js';
import dayjs from "dayjs";


test('Create a job process', async ({page}) => {
  //variable needed for the locator
  const header = await landingPage.headerLocators(page);
  const settingPage = await settingLocator.settingLocator(page);
  const signInField = await landingPage.signInFieldLocator(page);
  const setting = settingPage.setting;
  const createAndManageJobPage = settingPage.createJobForm;
  const createAndManageJob = settingPage.createAndManageJob;
  const EDIListLocator = createAndManageJobPage.EDI.EDIList;
  const responseList = createAndManageJobPage.EDI.reponseList;
  const answerRequirementToggle = createAndManageJobPage.customQA.answerRequrement.toggle;
  const customQA = createAndManageJobPage.customQA;

  //dayjs 
  let today = dayjs().format('DD/MM/YYYY');
  let tomorrow = dayjs().add(3, 'day').format('DD/MM/YYYY');

  //auto generate job name and code
  const jobName = jobUtils.generateJobName();
  const code = jobUtils.codeGenerate();

  //navigate to Vizzy
  page.goto(data.url.vizzyBeta);
  
  //allow cookie
  await header.cookieAllow.click();

  //Login 
  await header.loginButton.click();
  await signInField.emailField.fill(data.accountBeta.email);
  await signInField.passwordField.fill(data.accountBeta.password);
  await signInField.signInButton.click();

  // Wait for the page to load and verified the page
  await header.vizzyLogo.waitFor({state: 'visible'});
  await expect(page).toHaveTitle(data.pageTitle.myProfileTitle);

  //navigate to create & manage job
  await setting.settingIcon.click();
  await setting.createAndManageJob.click();
  console.log('navigate to create & manage job');
  await page.waitForLoadState('domcontentloaded');

  //create a new job
  await createAndManageJob.createNewJobButton.click();
  console.log('create a new job');
  await page.waitForTimeout(5000);

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
  await createAndManageJobPage.currencyDropdown.EUR.click();
  console.log('Currency value: USD');
  await createAndManageJobPage.salaryTypeDropdown.salaryTypeDropdownContainer.click();
  await createAndManageJobPage.salaryTypeDropdown.hourly.click();
  console.log('Salary type: Monthly');
  await createAndManageJobPage.employmentType.empoymentTypeContainer.click();
  await createAndManageJobPage.employmentType.partTime.click();
  console.log('Employment type: Full-time');
  await createAndManageJobPage.minimumSalary.fill('1000');
  console.log('Minimum salary: 1000');
  await createAndManageJobPage.maximumSalary.fill('2000');
  console.log('Maximum salary: 2000');
  
  // Save the job
  await createAndManageJobPage.saveButton.click();
  console.log('Save the job');

  //check for success message
  await jobUtils.checkForSuccessMessage(createAndManageJobPage.sucessMessage);

  //check if the button is disable after save
  await jobUtils.checkButtonDisabled(createAndManageJobPage.saveButton);

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
  await jobUtils.checkForSuccessMessage(createAndManageJobPage.sucessMessage);

  //check if the button is disable after save
  await jobUtils.checkButtonDisabled(createAndManageJobPage.saveButton);

  //pre-requiste questions creation
  await createAndManageJobPage.prerequsiteAndEDITab.click();
  await expect(createAndManageJobPage.prerequisiteQuestion.prerequisteCopy).toHaveText(data.copy.prerequisteCopy);

  //add question with no multi answers
  await createAndManageJobPage.prerequisiteQuestion.addQuestionButton.click();

  // Verify if the toggle is enabled or disabled
  const isToggleEnabled = await createAndManageJobPage.prerequisiteQuestion.multipleQuestionToggle.isChecked();
  expect(isToggleEnabled).toBe(false); 

  await createAndManageJobPage.prerequisiteQuestion.questionField.fill('automation questions');
  await jobUtils.answerCreationLoop(createAndManageJobPage);

  await createAndManageJobPage.prerequisiteQuestion.saveQuestionButton.click();
  //add question with multi answers
  await createAndManageJobPage.prerequisiteQuestion.addQuestionButton.click();
  // Verify if the toggle is enabled or disabled
  expect(isToggleEnabled).toBe(false);
  await createAndManageJobPage.prerequisiteQuestion.questionField.fill('automation questions 2');
  await jobUtils.answerCreationLoop(createAndManageJobPage);
  await createAndManageJobPage.prerequisiteQuestion.multipleQuestionToggle.click();
  await createAndManageJobPage.prerequisiteQuestion.saveQuestionButton.click();
  await createAndManageJobPage.saveButton.click();

  //check for success message
  await jobUtils.checkForSuccessMessage(createAndManageJobPage.sucessMessage);

  //check if the button is disable after save
  await jobUtils.checkButtonDisabled(createAndManageJobPage.saveButton);

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

  await jobUtils.checkForSuccessMessage(createAndManageJobPage.EDI.EDISuccessMessage);
  await jobUtils.checkButtonDisabled(createAndManageJobPage.saveButton);

  //customQ&A
  await createAndManageJobPage.candidateProfileTab.click();
  await expect(createAndManageJobPage.customQA.customQACopy).toHaveText(data.copy.customQA);
  await page.waitForTimeout(2000);
  //add a prefix 1-5
  
  for (let i = 1; i <= 5; i++) {
    await jobUtils.addingPrefixQuestion(customQA.customQAContainer, customQA.customQADropdown[`preDefindQuestion${i}`]);
  }
  //scroll down slightly
  await page.evaluate(() => {
    window.scrollBy(0, 200);
  });


  //adding requirement to the question
  for (let i = 2; i <= 5; i++) {
    const locator = customQA.kebabMenu(page, i);
    // Perform actions with the locator
    await locator.click();
    await createAndManageJobPage.customQA.answerRequrement.answerRequrementButton.click();
    await expect(createAndManageJobPage.customQA.answerRequrement.copy).toHaveText(data.copy.answerRequirementCopy);
    await jobUtils.checkTogglesStatus(answerRequirementToggle);
    await createAndManageJobPage.customQA.answerRequrement.saveButton.click();
    await createAndManageJobPage.customQA.answerRequrement.confirmButton.click();
  }
  await createAndManageJobPage.saveButton.click();
  await jobUtils.checkForSuccessMessage(createAndManageJobPage.sucessMessage);
  await jobUtils.checkButtonDisabled(createAndManageJobPage.saveButton);

  //submission requirement
  await createAndManageJobPage.submissionRequirement.submissionTab.click();
  await expect (createAndManageJobPage.submissionRequirement.copy1).toHaveText(data.copy.submissionRequirement.copy1);
  await expect(createAndManageJobPage.submissionRequirement.copy2).toHaveText(data.copy.submissionRequirement.copy2);
  //check if the 4 default toggles are on
  await jobUtils.checkTogglesStatusOn(createAndManageJobPage.submissionRequirement.toggle);

  //check if the remaining toggles are off
  await jobUtils.checkTogglesStatus(createAndManageJobPage.submissionRequirement.toggleForMedia);

  await createAndManageJobPage.saveButton.click();
  await jobUtils.checkForSuccessMessage(createAndManageJobPage.sucessMessage);
  await jobUtils.checkButtonDisabled(createAndManageJobPage.saveButton);

  
  //recruiter access
  await createAndManageJobPage.screeningTab.click();
  
  await expect(createAndManageJobPage.recruiterAcess.copy1).toHaveText(data.copy.recruiterAcess.copy1);
  await expect(createAndManageJobPage.recruiterAcess.copy2).toHaveText(data.copy.recruiterAcess.copy2);
  await createAndManageJobPage.recruiterAcess.selectAllButton.click();
  await createAndManageJobPage.recruiterAcess.assignButton.click();
  await createAndManageJobPage.recruiterAcess.confirmYes.click();
  await createAndManageJobPage.saveButton.click();
  await jobUtils.checkForSuccessMessage(createAndManageJobPage.sucessMessage);
  await jobUtils.checkButtonDisabled(createAndManageJobPage.saveButton);

  //anon hiring
  await createAndManageJobPage.anonHiring.anonHiringTab.click();
  await expect(createAndManageJobPage.anonHiring.copy).toHaveText(data.copy.anonHiring);
  await jobUtils.checkTogglesStatus(createAndManageJobPage.anonHiring.checkBox);
  await createAndManageJobPage.saveButton.click();
  await jobUtils.checkForSuccessMessage(createAndManageJobPage.sucessMessage);
  await jobUtils.checkButtonDisabled(createAndManageJobPage.saveButton);

  //landing page
  await createAndManageJobPage.landingPage.landingPageTab.click();
  await expect(createAndManageJobPage.landingPage.copy).toHaveText(data.copy.landingPage);
  const primaryLandingPage = await createAndManageJobPage.landingPage.primary.isChecked();
  expect(primaryLandingPage).toBe(true);
  jobUtils.checkButtonDisabled(createAndManageJobPage.saveButton);

  //check if publish button is enable
  const publishButton = await createAndManageJobPage.publishButton.isEnabled();
  expect(publishButton).toBe(true);
  await createAndManageJobPage.publishButton.click();
  await createAndManageJobPage.confirmPublish.click();
  await expect(createAndManageJobPage.publishedMessage).toBeVisible();
  await page.waitForTimeout(3000);
  await expect(page).toHaveTitle(data.pageTitle.settingTitle);
  
});