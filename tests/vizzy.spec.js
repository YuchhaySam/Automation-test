import { test, expect } from '@playwright/test'; // Ensure this is imported only once
import { headerLocators, heroSectionLocators, exampleProfileLocators, footerLocators, expectedProfiles } from './locator/landingPage.js';

test('Vizzy unauthorized landing page', async ({ page }) => {
  const header = await headerLocators(page);
  const heroSection = await heroSectionLocators(page);
  const exampleProfiles = await exampleProfileLocators(page);
  const footer = await footerLocators(page);

  await page.goto('https://staging.vizzy.com/');

  // header
  await expect.soft(header.vizzyLogo).toBeVisible();
  await expect.soft(header.vizzyForBusiness).toBeVisible();
  await expect.soft(header.loginButton).toBeVisible();

  //hero section
  await expect.soft(heroSection.heroTitle).toBeVisible();
  await expect.soft(heroSection.heroDescription).toHaveText('Create your Vizzy to stand out in job applications or as a personal portfolio and show the world who you are and everything you can do.');
  await expect.soft(heroSection.heroImage).toBeVisible();
  await expect.soft(heroSection.heroCreateProfileButton).toBeVisible();
  await expect.soft(heroSection.heroWatchOurVideoButton).toBeVisible();
  await expect.soft(heroSection.heroPizzaExpressLogo).toBeVisible();
  await expect.soft(heroSection.heroTiffanyLogo).toBeVisible();
  await expect.soft(heroSection.heroLouisVuittonLogo).toBeVisible();
  await expect.soft(heroSection.heroBurberryLogo).toBeVisible();
  await expect.soft(heroSection.heroOctopusLogo).toBeVisible();
  await expect.soft(heroSection.heroFlodeskLogo).toBeVisible();
  // Iterating through example profiles

  for (let i = 0; i < exampleProfiles.length; i++) { 
    const profile = exampleProfiles[i]; 
    const expectedProfile = expectedProfiles[i];
    await expect.soft(profile.name).toHaveText(expectedProfile.name);
    await expect.soft(profile.description).toHaveText(expectedProfile.description); 
    await expect.soft(profile.image).toBeVisible(); 
    await expect.soft(profile.visitProfileLink).toBeVisible(); 
  }
  
});
