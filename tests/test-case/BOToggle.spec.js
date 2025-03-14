'use strict';
import {test, expect, chromium} from '@playwright/test';
import { data } from '../test-data/data';
import * as backOfficeLocator from '../locator/backOffice';
import { testcase } from '../ulti-function/reusableTestCase';
import * as landingPage from '../locator/landingPage';
import * as profileOverlay from '../locator/profileOverlay.js';
import * as settingLocator from '../locator/settingLocator.js';
import path from 'path';
import dayjs from 'dayjs';
import { jobUtils } from '../ulti-function/util.js';
import * as landingPageLocator from '../locator/landingPage.js';


test('BO video toggle', async () => {
  const browser = await chromium.launch(); 
  const context = await browser.newContext();
  const vizzy = await context.newPage();
  const BO = await context.newPage();
  vizzy.setDefaultTimeout(100000);
  BO.setDefaultTimeout(100000);
  const backOffice = await backOfficeLocator.backOffice(BO);
  const signIn = await landingPage.signInFieldLocator(vizzy);
  const profile = await profileOverlay.profile(vizzy);
  const header = await landingPageLocator.headerLocators(vizzy);
  const videoFolder = path.join('tests', 'image-video', 'video');
  const videoPath = path.join(videoFolder, '0.mp4');
  const settingPage = await settingLocator.settingLocator(vizzy);
  const setting = settingPage.setting;
  const createAndManageJob = settingPage.createAndManageJob;
  const createAndManageJobPage = settingPage.createJobForm;
  const customQA = createAndManageJobPage.customQA;
  const businessRegister = backOffice.businessRegister;
  const businessOverlay = businessRegister.list.businessOverlay;

  //dayjs
  let today = dayjs().format('DD/MM/YYYY');
  let tomorrow = dayjs().add(3, 'day').format('DD/MM/YYYY');
  

  //declare variable for locator
  const businessNameLocator = await businessRegister.list.businessNameLocator(data.additionalInformation.businessName);
  const viewBusinessButton = await businessRegister.list.viewBusinessButton(data.additionalInformation.businessName);
  /*
  const isCommunityVideoToggleOn = await businessOverlay.community.customVideoToggle.isChecked();
  const isHiringVideoToggleOn = await businessOverlay.hiring.customVideoToggle.isChecked();*/
 
  //Login process
  await BO.goto(data.url.BOStaging);
  await backOffice.login.emailField.fill(data.BOAccount.email);
  await backOffice.login.passwordField.fill(data.BOAccount.password);
  await backOffice.login.loginButton.click();
  await BO.waitForSelector(backOffice.login.verificationModal)
  // the process pause, so we can enter the code manually
  await BO.pause();
  await backOffice.login.verifyButton.click();
  await BO.waitForSelector(backOffice.login.dashBoardLogo);
  //arrive on dashboard
  await expect(BO).toHaveTitle(data.pageTitle.BODashBoard);
  await businessRegister.container.click();
  await businessRegister.approve.click();
  await businessRegister.list.search.fill(data.additionalInformation.businessName);
  await BO.waitForLoadState('domcontentloaded');
  await expect(businessNameLocator).toBeVisible();
  await viewBusinessButton.click();
  await BO.waitForLoadState('domcontentloaded');
  await expect(BO).toHaveTitle(data.pageTitle.businessDetail);
  /*
  if(isCommunityVideoToggleOn === false && isHiringVideoToggleOn === false){
    console.log('Both video toggle are off');
  } else{
    await businessRegister.list.businessOverlay.community.customVideoToggle.click();
    await businessRegister.list.businessOverlay.hiring.customVideoToggle.click();
    console.log('turn off both video toggle');
  }*/
  
  await vizzy.goto(data.url.vizzyStaging);
  await header.cookieAllow.click();
  await header.loginButton.click();
  await testcase.signIn(signIn.emailField, signIn.passwordField, data.accountStaging.email, data.accountStaging.password, signIn.signInButton);
  await vizzy.waitForLoadState('domcontentloaded');
  await expect(vizzy).toHaveTitle(data.pageTitle.myProfileTitle);

  //community
  await profile.customQA.question1.answerButton.hover();
  await profile.customQA.question1.answerButton.click();
  await profile.customQA.addFile.setInputFiles(videoPath);
  await expect(profile.customQA.addFile).toContainText('File type is not supported');
  await vizzy.keyboard.press('Escape');
  await profile.discardButton.click();

  //job
  await setting.settingIcon.click();
  await setting.createAndManageJob.click();
  await createAndManageJob.createNewJobButton.click();
  await vizzy.waitForSelector(createAndManageJobPage.jobDetailCopySelector);
  
  await testcase.fillInJobDetail(createAndManageJobPage, data.copy.jobDetailCopy , 'Job testing', 'ABC8883', today, tomorrow);

  //Navigate to custom QA
  await createAndManageJobPage.candidateProfileTab.click();
  await createAndManageJobPage.customQA.click();
  await jobUtils.addingPrefixQuestion(customQA.customQAContainer, customQA.customQADropdown[`preDefindQuestion${1}`]);
  const locator = customQA.kebabMenu(vizzy, 1);
  await page.evaluate(() => {
    window.scrollBy(0, 200);
  });
  await locator.click();
  await customQA.answerRequrement.answerRequrementButton.click();
  let videoAndLink;
  let videoUpload;
  for (const toggle of customQA.answerRequrement.toggle) {
    if (toggle.name === 'video(both)') {
      videoAndLink = toggle.locator;
    } else if (toggle.name === 'video upload') {
      videoUpload = toggle.locator;
    }
  }
  const isVideoAndLinkEnabled = await videoAndLink.isChecked();
  const isVideoUploadEnabled = await videoUpload.isChecked();
  expect(isVideoAndLinkEnabled).toBe(false);
  expect(isVideoUploadEnabled).toBe(false);
  await vizzy.keyboard.press('Escape');
  

  //check in the application, at this part, please make sure your job on my application has reach the application mode and has the 5 questions that set during the apply job process
  await settingPage.navBar.myApplication.click();
  await waitForLoadState('domcontentloaded');
  await jobUtils.clickApplyOrContinue(vizzy);
  await vizzy.waitForLoadState('domcontentloaded');
  await customQA.question5.answerButton.hover();
  await customQA.question5.answerButton.click();
  await profile.customQA.addFile.setInputFiles(videoPath);
  await expect(profile.customQA.addFile).toContainText('File type is not supported');
  await vizzy.keyboard.press('Escape');
  await profile.discardButton.click();
  await settingPage.navBar.myProfile.click();
  await waitForLoadState('domcontentloaded');

  //navagite back to BO
  await businessRegister.list.businessOverlay.community.customVideoToggle.click();
  await businessRegister.list.businessOverlay.hiring.customVideoToggle.click();

  //navigate back to Vizzy
  await vizzy.reload();
  await vizzy.reload();
  await vizzy.waitForLoadState('domcontentloaded');
  await profile.customQA.hoverElement.hover();
  await profile.customQA.answerButton.click();
  await profile.customQA.question1.answerButton.hover();
  await profile.customQA.question1.answerButton.click();
  await profile.customQA.addFile.setInputFiles(videoPath);
  await expect(profile.customQA.addFile).not.toContainText('File type is not supported');

  
  //job
  await settingPage.navBar.myApplication.click();
  await jobUtils.clickApplyOrContinue(vizzy);
  await vizzy.waitForLoadState('domcontentloaded');
  await customQA.question5.answerButton.hover();
  await customQA.question5.answerButton.click();
  await profile.customQA.addFile.setInputFiles(videoPath);
  await expect(profile.customQA.addFile).not.toContainText('File type is not supported');
  await vizzy.keyboard.press('Escape');
  await profile.discardButton.click();
  await settingPage.navBar.myProfile.click();

  await setting.settingIcon.click();
  await setting.createAndManageJob.click();
  await createAndManageJob.createNewJobButton.click();
  await vizzy.waitForSelector(createAndManageJobPage.jobDetailCopySelector);
  await testcase.fillInJobDetail(createAndManageJobPage, data , 'Job testing', 'ABC8884', today, tomorrow);

  await createAndManageJobPage.candidateProfileTab.click();
  await createAndManageJobPage.customQA.click();
  await jobUtils.addingPrefixQuestion(customQA.customQAContainer, customQA.customQADropdown[`preDefindQuestion${1}`]);
  const locator2 = customQA.kebabMenu(vizzy, 1);
  await page.evaluate(() => {
    window.scrollBy(0, 200);
  });
  await locator2.click();
  await customQA.answerRequrement.answerRequrementButton.click();
  let videoAndLink2;
  let videoUpload2;
  for (const toggle of customQA.answerRequrement.toggle) {
    if (toggle.name === 'video(both)') {
      videoAndLink2 = toggle.locator;
    } else if (toggle.name === 'video upload') {
      videoUpload2 = toggle.locator;
    }
  }
  const isVideoAndLinkEnabled2 = await videoAndLink.isChecked();
  const isVideoUploadEnabled2 = await videoUpload.isChecked();
  expect(isVideoAndLinkEnabled2).toBe(false);
  expect(isVideoUploadEnabled2).toBe(false);
  await vizzy.keyboard.press('Escape');

   //navagite back to BO
   await businessRegister.list.businessOverlay.community.customVideoToggle.click();
   await businessRegister.list.businessOverlay.hiring.customVideoToggle.click();
});