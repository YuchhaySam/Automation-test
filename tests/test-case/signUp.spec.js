'use strict'
import { test, expect, chromium } from '@playwright/test';  
import { testcase } from '../ulti-function/reusableTestCase.js';
import { autoGenerationSignup } from '../ulti-function/autoGenerationSignup.js';
import * as landingPage from '../locator/landingPage.js';

test('Sign up page', async () => {
  const browser = await chromium.launch(); // Launch Chrome (Chromium)
  const context = await browser.newContext();
  const vizzy = await context.newPage();
  const mailinator = await context.newPage();
  const header = await landingPage.headerLocators(vizzy);
  const signUpField = await landingPage.signUpFieldsLocators(vizzy);
  const mailinatorField = await landingPage.mailinatorLocators(mailinator);
  const autoGeneration = autoGenerationSignup;

  // Generate email and password once
  const email = autoGeneration.emailAutoGenerate();
  const password = autoGeneration.passwordAutoGenerate();
  const lastName = autoGeneration.generateLastName();

  // Navigate to vizzy and fill the sign-up form
  console.log('Navigating to Vizzy...');
  await vizzy.goto('https://staging.vizzy.com/');
  await header.cookieAllow.click();
  await header.signUpButton.click();
  await testcase.signUpStaging(signUpField, autoGeneration, vizzy, mailinator, mailinatorField, email, password, lastName);

  // Expect to see the bespoke input field
  await expect(signUpField.bespokenInputField).toBeVisible();
  await browser.close();
})



