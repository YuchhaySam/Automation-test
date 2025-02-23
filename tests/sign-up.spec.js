import { test, expect, chromium } from '@playwright/test';
import { headerLocators, signUpFieldsLocators, mailinatorLocators } from './locator/landingPage.js';
import { autoGenerationSignup } from './locator/autoGenerationSignup.js';

test('Sign up page', async () => {
  const browser = await chromium.launch({ headless: false }); // Launch Chrome (Chromium)
  const context = await browser.newContext();
  const vizzy = await context.newPage();
  const mailinator = await context.newPage();
  const header = await headerLocators(vizzy);
  const signUpField = await signUpFieldsLocators(vizzy);
  const mailinatorField = await mailinatorLocators(mailinator);
  const autoGeneration = autoGenerationSignup;

  // Generate email and password once
  const email = autoGeneration.emailAutoGenerate();
  const password = autoGeneration.passwordAutoGenerate();
  const lastName = autoGeneration.generateLastName();

  // Navigate to vizzy and fill the sign-up form
  console.log('Navigating to Vizzy...');
  await vizzy.goto('https://staging.vizzy.com/');
  await header.signUpButton.click();

  await signUpField.firstNameField.fill(autoGeneration.firstName);
  console.log('First name filled:', autoGeneration.firstName);

  await signUpField.lastNameField.fill(lastName);
  console.log('Last name filled:', lastName);

  await signUpField.emailField.fill(email);
  console.log('Email filled:', email);

  await signUpField.passwordField.fill(password);
  console.log('Password filled:', password);

  await signUpField.registerButton.click();

  // Navigate to Mailinator and retrieve the verification code
  console.log('Navigating to Mailinator...');
  await mailinator.goto('https://www.mailinator.com/');
  await mailinatorField.emailInputField.fill(email);
  await mailinatorField.emailInputField.press('Enter');
  await mailinatorField.verificationInbox.click();
  console.log('Went inside inbox');

  // Wait for the email content to load and extract the verification code
  await mailinatorField.codelocator.waitFor({ state: 'visible', timeout: 60000 });
  const emailContent = await mailinatorField.codelocator.textContent();
  console.log('Email content:', emailContent);

  // Go back to Vizzy and complete the sign-up process
  await signUpField.verificationCodeInputField.fill(emailContent);
  await signUpField.continueButton.click();

  // Expect to see the bespoke input field
  await expect(signUpField.bespokenInputField).toBeVisible();
  await browser.close();
}, 100000); // Increase the timeout to 100 seconds
