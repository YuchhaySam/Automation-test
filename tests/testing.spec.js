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
  const image1 = path.join(imagePath, '0.jpg');
  const image2 = path.join(imagePath, '1.png');
  const header = await landingPageLocator.headerLocators(vizzy);
  const skills = profile.skills;
  const customQA = profile.customQA;
  const psych = profile.psych;
  const education = profile.education;
  const share = profile.share;
  const work = profile.work;
  const project = profile.project;
  const media = profile.mediaCard;
  const qa = profile.qaCard;

  //declare variable for locator
  const pronounsSelection = await bioOverLay.aboutYou.pronouns.selection('He / Him');

  await vizzy.goto(data.url.jobSpecificURLBeta);
  await header.cookieAllow.click();
  await application.landingPage.getStartedButton.click();
  await signIn.signInButtonOnModal.click();
  await testcase.signIn(signIn.emailField, signIn.passwordField, data.dummyTestingAccount.email, data.dummyTestingAccount.password, signIn.signInButton);
  await vizzy.waitForLoadState('networkidle');
  await jobUtils.clickApplyOrContinue(vizzy);
  await vizzy.waitForLoadState('networkidle');

  // Bio card
  // Profile
  jobUtils.hoverAndClick(profile.bio.hoverElement, profile.bio.editBioButton);
  await bioOverLay.profilePhoto.container.click();
  await bioOverLay.profilePhoto.uploadPhoto.setInputFiles(image2);
  //await bioOverLay.profilePhoto.saveButton.click(); bug at the moment.
  await bioOverLay.profilePhoto.coverVideo.fill(data.url.vimeoURL1);

  // About you
  await bioOverLay.aboutYou.container.click();
  await bioOverLay.aboutYou.location.fill('London');
  await bioOverLay.aboutYou.pronouns.container.click();
  await pronounsSelection.click();
  await bioOverLay.aboutYou.business.fill('Game Developer');
  await bioOverLay.aboutYou.businessURL.fill(data.url.businessURL);
  await bioOverLay.aboutYou.bioDescription.fill('Caveman no like modern');

  // Tag
  await bioOverLay.tag.container.click();
  await expect(bioOverLay.tag.copy).toHaveText(data.copy.bio.tag);
  await jobUtils.inputField(bioOverLay.tag.languages, 'Kh', 'Khmer', vizzy);
  await jobUtils.inputField(bioOverLay.tag.nationalities, 'Cam', 'Cambodian', vizzy);
  await jobUtils.inputField(bioOverLay.tag.interests, 'Sai', 'Sailing', vizzy);
  await bioOverLay.tag.container.click();

  // Social platform
  await bioOverLay.socialPlatform.container.click();
  await expect(bioOverLay.socialPlatform.copy).toHaveText(data.copy.bio.socialPlatform);
  await bioOverLay.socialPlatform.inputField.fill('https://www.instagram.com/vizzy_hq/');
  await bioOverLay.socialPlatform.addButton.click();
  
  await profile.saveButton.click();
  await vizzy.waitForLoadState('networkidle');
  await expect(bioOverLay.bioModal).not.toBeVisible();
  
  
 //Skill
  await jobUtils.hoverAndClick(skills.hover, skills.add);
  await expect(skills.copy).toHaveText(data.copy.skill);
  await jobUtils.inputField(skills.input, 'Sa', 'Sales', vizzy);
  await profile.saveButton.click();
  await vizzy.waitForLoadState('domcontentloaded');

  await customQA.hoverElement.hover();
  await customQA.answerButton.click();
  await customQA.question1.answerButton.hover();
  await customQA.question1.answerButton.click();
  await customQA.answerField.fill('question 1 is answered');
  await profile.saveButton.click();

 
  //image upload only
  await customQA.question2.answerButton.hover();
  await customQA.question2.answerButton.click();
  await jobUtils.uploadingFile('image', customQA.addFile, profile.saveImage, data.fileType.image, vizzy, customQA.addURL, customQA.addButton);
  await profile.saveButton.click();
  await vizzy.waitForLoadState('networkidle');

  
  //mp3 upload only
  await customQA.question3.answerButton.hover();
  await customQA.question3.answerButton.click();
  await jobUtils.uploadingFile('audio', customQA.addFile, profile.saveImage, data.fileType.audio, vizzy, customQA.addURL, customQA.addButton);
  await profile.saveButton.click();
  await vizzy.waitForLoadState('networkidle');

  
  //mp4 uplaod and video link
  await customQA.question5.answerButton.hover();
  await customQA.question5.answerButton.click();
  await jobUtils.uploadingFile('video', customQA.addFile, profile.saveImage, data.fileType.video, vizzy, customQA.addURL, customQA.addButton);
  await profile.saveButton.click();
  await vizzy.waitForLoadState('networkidle');

  
  //portfolio only
  await customQA.question4.answerButton.hover();
  await customQA.question4.answerButton.click();
  await jobUtils.uploadingFile('portfolio', customQA.addFile, profile.saveImage, data.fileType.portfolio, vizzy, customQA.addURL, customQA.addButton);
  await profile.saveButton.click();
  await vizzy.waitForLoadState('networkidle'); 

 
  //psych
  await psych.answerButton.hover();
  await psych.answerButton.click();
  await expect(psych.heading).toBeVisible();
  await psych.takingTest.click();

  await jobUtils.answeringPsychometric(psych, 1, '3', '5', vizzy);
  await jobUtils.answeringPsychometric(psych, 2, '7', '8', vizzy);
  await jobUtils.answeringPsychometric(psych, 3, '3', '1', vizzy);
  await jobUtils.answeringPsychometric(psych, 4, '7', '2', vizzy);
  await jobUtils.answeringPsychometric(psych, 5, '4', '7', vizzy);
  await jobUtils.answeringPsychometric(psych, 6, '4', '1', vizzy);
  await jobUtils.answeringPsychometric(psych, 7, '8', '2', vizzy);
  await jobUtils.answeringPsychometric(psych, 8, '1', '8', vizzy);
  await jobUtils.answeringPsychometric(psych, 9, '2', '1', vizzy);
  await jobUtils.answeringPsychometric(psych, 10, '3', '5', vizzy);
  await psych.answer.pronounsSelection.he.click();
  await psych.answer.submitButton.click();
  await vizzy.waitForTimeout(5000);
  await vizzy.waitForLoadState('domcontentloaded');
  await expect(psych.psychHeader).toBeVisible();

 
  //education
  await profile.addContent.click();
  await education.addEducation.click();
  await expect(education.educationModal).toBeVisible();
  await education.institute.fill(data.education.institute);
  await education.url.fill(data.education.url);
  await education.degree.fill(data.education.degree);
  await education.grade.fill(data.education.grade);
  await education.fieldOfStudy.fill(data.education.fieldOfStudy);
  await share.startDate.fill(data.education.startDate);
  await share.endDate.fill(data.education.endDate);
  await education.description.fill(data.education.description);
  await share.logo.setInputFiles(image1);
  await share.saveLogo.click();
  await share.saveButton.click();
  await vizzy.waitForLoadState('domcontentloaded');
  await expect(education.educationModal).not.toBeVisible({timeout: 10000});

  //work
  await profile.addContent.click();
  await work.addWork.click();
  await expect(work.workModal).toBeVisible();
  await work.companyName.fill(data.work.companyName);
  await work.companyURl.fill(data.work.companyURL);
  await work.title.fill(data.work.title);
  await work.location.fill(data.work.location);
  await work.description.fill(data.work.description);
  await share.startDate.fill(data.work.startDate);
  await share.endDate.fill(data.education.endDate);
  await share.logo.setInputFiles(image1);
  await share.saveLogo.click();
  await share.saveButton.click();
  await vizzy.waitForLoadState('domcontentloaded');
  await expect(work.workModal).not.toBeVisible({timeout: 10000});


  //project
  await profile.addContent.click();
  await project.addProject.click();
  await expect(project.modal).toBeVisible();
  await project.title.fill(data.project.title);
  await project.description.fill(data.project.description);
  await share.startDate.fill(data.project.startDate);
  await share.endDate.fill(data.project.endDate);
  await jobUtils.uploadingFile('card', share.upload, share.saveImage, data.fileType.card, vizzy, share.weblinkField, share.addLink);
  await vizzy.waitForTimeout(5000);
  await share.saveButton.click();
  await expect(project.modal).not.toBeVisible({timeout: 50000});

  //media card
  await profile.addContent.click();
  await media.addMedia.click();
  await expect(media.modal).toBeVisible();
  await media.prompt.container.click();
  await media.prompt.aGreatRead.click();
  await media.headline.fill(data.media.headline);
  await media.description.fill(data.media.description);
  await jobUtils.uploadingFile('card', share.upload, share.saveImage, data.fileType.card, vizzy, share.weblinkField, share.addLink);
  await vizzy.waitForTimeout(5000);
  await media.saveButton.click();
  await expect(media.modal).not.toBeVisible({timeout: 50000});

  //qa card
  await profile.addContent.click();
  await qa.addQA.click();
  await expect(qa.modal).toBeVisible();
  await qa.question.container.click();
  await qa.question.nextThreeYear.click();
  await qa.answer.fill('this is an answer');
  await jobUtils.uploadingFile('card', share.upload, share.saveImage, data.fileType.tempoaryQA, vizzy, share.weblinkField, share.addLink);
  await vizzy.waitForTimeout(5000);
  await qa.saveButton.click();
  await expect(qa.modal).not.toBeVisible({timeout: 50000});
});