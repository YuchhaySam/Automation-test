'use strict'
import {test, expect, chromium} from '@playwright/test';  
import * as landingPage from './locator/landingPage.js';
import * as data from './test-data/data.js';
import * as setting from './locator/settingLocator.js';

test('Create a job process', async ({page}) => {
  const header = await landingPage.headerLocators(page);
  const signInField = await landingPage.signInFieldLocator(page);
  const settingPage = await setting.settingLocator(page);
  const createAndManageJobPage = await setting.createAndManageJob(page);

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

  //create a new job
  await createAndManageJobPage.createNewJobButton.click();

  //job detail
});