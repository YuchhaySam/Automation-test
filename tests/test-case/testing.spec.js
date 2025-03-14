import {test, expect} from '@playwright/test';
import * as profileLocators from '../locator/profileOverlay.js';
import * as landingPageLocators from '../locator/landingPage.js';
import { testcase } from '../ulti-function/reusableTestCase.js';
import { data } from '../test-data/data.js';
import * as setting from '../locator/settingLocator.js';
import { jobUtils } from '../ulti-function/util.js';

test('testing', async ({page}) => {
  const header = await landingPageLocators.headerLocators(page);
  const signIn = await landingPageLocators.signInFieldLocator(page);
  const settingPage = await setting.settingLocator(page);
  const navBar = settingPage.navBar;
  const profile = await profileLocators.profile(page);
 

  await page.goto(data.url.vizzyStaging);
  await header.loginButton.click();
  await testcase.signIn(signIn.emailField, signIn.passwordField, data.accountStaging.email, data.accountStaging.password, signIn.signInButton);
  await navBar.myApplication.click();
  await jobUtils.clickApplyOrContinue(page);
  await expect(page).toHaveTitle(data.pageTitle.myProfileTitle);
  await profile.bio.hoverElement.hover();
  await profile.bio.addButton.click();
  

});s