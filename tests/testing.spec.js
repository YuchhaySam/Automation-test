'use strict';
import { test, expect, chromium } from '@playwright/test';  
import * as landingPageLocator from './locator/landingPage.js';
import { data } from './test-data/data.js';
import * as applicationAnsweringLocator from './locator/applicationAnswering.js';
import * as profileOverlay from './locator/profileOverlay.js';
import path from 'path';
import { jobUtils } from './ulti-function/util.js';
import { testcase } from './ulti-function/reusableTestCase.js';


test('uploading photo and video', async () => {
  
  const browser = await chromium.launch(); 
  const context = await browser.newContext();
  const vizzy = await context.newPage();
  const application = await applicationAnsweringLocator.applicationAnswering(vizzy);
  const signIn = await landingPageLocator.signInFieldLocator(vizzy);
  const profile = await profileOverlay.profile(vizzy);
  const bioOverLay = profile.bio.bioOverLay;
  const imagePath = path.join('tests', 'image-video', 'image'); 
  const profile1 = path.join(imagePath, 'profile1.jpg');
  const dataLocator = data;
  const header = await landingPageLocator.headerLocators(vizzy);
  const skills = profile.skills;
  const customQA = profile.customQA;

  //declare variable for locator
  const pronounsSelection = await bioOverLay.aboutYou.pronouns.selection('He / Him');

  await vizzy.goto(dataLocator.url.jobSpecificURLBeta);
  await header.cookieAllow.click();
  await application.landingPage.getStartedButton.click();
  await signIn.signInButtonOnModal.click();
  await testcase.signIn(signIn.emailField, signIn.passwordField, dataLocator.dummyTestingAccount.email, dataLocator.dummyTestingAccount.password, signIn.signInButton);
  await vizzy.waitForLoadState('networkidle');
  await jobUtils.clickApplyOrContinue(vizzy);
  await vizzy.waitForLoadState('networkidle');
  // Bio card

 /*
  // Profile
  jobUtils.hoverAndClick(profile.bio.hoverElement, profile.bio.editBioButton);
  await bioOverLay.profilePhoto.container.click();
  await bioOverLay.profilePhoto.uploadPhoto.setInputFiles(profile1);
  //await bioOverLay.profilePhoto.saveButton.click(); bug at the moment.
  await bioOverLay.profilePhoto.coverVideo.fill(dataLocator.url.vimeoURL1);

  // About you
  await bioOverLay.aboutYou.container.click();
  await bioOverLay.aboutYou.location.fill('London');
  await bioOverLay.aboutYou.pronouns.container.click();
  await pronounsSelection.click();
  await bioOverLay.aboutYou.business.fill('Game Developer');
  await bioOverLay.aboutYou.businessURL.fill(dataLocator.url.businessURL);
  await bioOverLay.aboutYou.bioDescription.fill('Caveman no like modern');

  // Tag
  await bioOverLay.tag.container.click();
  await expect(bioOverLay.tag.copy).toHaveText(dataLocator.copy.bio.tag);
  await jobUtils.inputField(bioOverLay.tag.languages, 'Kh', 'Khmer', vizzy);
  await jobUtils.inputField(bioOverLay.tag.nationalities, 'Cam', 'Cambodian', vizzy);
  await jobUtils.inputField(bioOverLay.tag.interests, 'Sai', 'Sailing', vizzy);
  await bioOverLay.tag.container.click();

  // Social platform
  await bioOverLay.socialPlatform.container.click();
  await expect(bioOverLay.socialPlatform.copy).toHaveText(dataLocator.copy.bio.socialPlatform);
  await bioOverLay.socialPlatform.inputField.fill('https://www.instagram.com/vizzy_hq/');
  
  await profile.bio.saveButton.click();
  await vizzy.waitForLoadState('networkidle');
  await expect(bioOverLay.bioModal).not.toBeVisible();*/
  
  /*
 //Skill
  await jobUtils.hoverAndClick(skills.hover, skills.add);
  await expect(skills.copy).toHaveText(dataLocator.copy.skill);
  await jobUtils.inputField(skills.input, 'Sa', 'Sales', vizzy);

  await jobUtils.hideCard(profile.hideCardToggle, profile.hideConfirmationButton, profile.hideConfirmationCopy, data.copy.hideCardCopy);
  await profile.saveButton.click();
  await expect(skills.modal).not.toBeVisible();*/

  await customQA.hoverElement.hover();
  await customQA.answerButton.click();
 /* await customQA.question1.hoverElement.hover();
  await customQA.question1.answerButton.click();
  await customQA.answerField.fill('question 1 is answered');
  await profile.saveButton.click();*/

  //image upload only
  await jobUtils.uploadingFile(customQA.question2, 'image', customQA.addFile, profile.saveImage, data.fileType.image, vizzy, customQA.addURL, customQA.addButton);
  await profile.saveButton.click();
  await vizzy.waitForLoadState('networkidle');

  //mp3 upload only
  await jobUtils.uploadingFile(customQA.question3, 'audio', customQA.addFile, profile.saveImage, data.fileType.audio, vizzy, customQA.addURL, customQA.addButton);
  await profile.saveButton.click();
  await vizzy.waitForLoadState('networkidle');

});