'use strict';
import {test, expect} from '@playwright/test';
import axios from 'axios';
import { data } from '../test-data/data';
import { backOffice } from '../locator/backOffice';
import { testcase } from '../ulti-function/reusableTestCase';
import * as landingPage from '../locator/landingPage';
import * as profileOverlay from '../locator/profileOverlay.js';
import * as settingLocator from '../locator/settingLocator.js';
import path from 'path';
import dayjs from 'dayjs';
import { jobUtils } from '../ulti-function/util.js';


test('BO video toggle', async () => {
  const browser = await chromium.launch(); 
  const context = await browser.newContext();
  const vizzy = await context.newPage();
  const BO = await context.newPage();
  const signIn = await landingPage.signInFieldLocator(BO);
  const profile = await profileOverlay.profile(vizzy);
  const videoFolder = path.join('tests', 'image-video', 'video');
  const videoPath = path.join(videoFolder, '0.mp4');
  const settingPage = await settingLocator.settingLocator(vizzy);
  const setting = settingPage.setting;
  const createAndManageJob = settingPage.createAndManageJob;
  const createAndManageJobPage = settingPage.createJobForm;
  const customQA = createAndManageJobPage.customQA;

  //dayjs
  let today = dayjs().format('DD/MM/YYYY');
  let tomorrow = dayjs().add(3, 'day').format('DD/MM/YYYY');
  

  //declare variable for locator
  const businessRegister = backOffice.businessRegister;
  const businessNameLocator = await businessRegister.list.businessName(data.additionalInformation.businessName);
 
  //Login process, need API

  //arrive on dashboard
  await expect(BO).toHaveTitle(data.pageTitle.backOffice);
  await businessRegister.container.click();
  await businessRegister.approve.click();
  await businessRegister.list.search.fill(data.additionalInformation.businessName);
  await BO.waitForLoadState('domcontentloaded');
  await expect(businessNameLocator).toBeVisible();
  await businessRegister.list.viewBusinessButton(data.additionalInformation.businessName).click();
  await BO.waitForLoadState('domcontentloaded');
  await expect(BO).toHaveTitle(data.pageTitle.businessDetail);

  
  await vizzy.goto(data.url.vizzyStaging);
  await testcase.signIn(signIn.emailField, signIn.passwordField, data.accountStaging.email, data.accountStaging.password, signIn.signInButton);
  await vizzy.waitForLoadState('domcontentloaded');
  await expect(vizzy).toHaveTitle(data.pageTitle.myProfileTitle);

  //community
  await profile.customQA.hoverElement.hover();
  await profile.customQA.answerButton.click();
  await profile.customQA.question1.answerButton.hover();
  await profile.customQA.question1.answerButton.click();
  await profile.customQA.addFile.setInputFiles(videoPath);
  await expect(profile.customQA.addFile).toContainText('File type is not supported');
  await vizzy.keyboard.press('Escape');

  //job
  await setting.settingIcon.click();
  await setting.createAndManageJob.click();
  await createAndManageJob.createNewJobButton.click();
  await vizzy.waitForLoadState('domcontentloaded');
  
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
  await profile.saveButton.click();
  
  //job
  await settingPage.navBar.myApplication.click();
  await jobUtils.clickApplyOrContinue(vizzy);
  await vizzy.waitForLoadState('domcontentloaded');
  await customQA.question5.answerButton.hover();
  await customQA.question5.answerButton.click();
  await profile.customQA.addFile.setInputFiles(videoPath);
  await expect(profile.customQA.addFile).not.toContainText('File type is not supported');
  await settingPage.navBar.myProfile.click();
});