import {test, expect} from '@playwright/test';

test('Sign up staging', async ({page}) => {
  await page.goto('https://admin.staging.vizzy.com/sign-in');
  await page.locator(`//input[@name='email']`).fill('jaksmokqa@gmail.com');
  await page.locator(`//input[@name='password']`).fill('Abc1234!');
  await page.locator(`//button[@type='submit']`).click();

  await page.waitForSelector(`//h1[normalize-space()='Enter Verification Code']`);
  await page.pause();

  await page.locator(`//button[@type='submit']`).click();
});