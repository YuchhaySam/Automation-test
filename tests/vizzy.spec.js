import { test, expect } from '@playwright/test';

test('Vizzy unauthorized landing page', async ({page})=>{

  //locator of all the element;
  //header
    const vizzyLogo = await page.locator('span.Nav_logo__au6jc');
    const vizzyForBusiness = await page.locator('.DesktopView_desktopOnly___ZyYW > a:nth-child(1)');
    const loginButton = await page.locator('button.Button_reverseTertiary__IoEZ6');
  
  //hero section
    const heroTitle = await page.locator('h1.LandingPage_heading__4jC4e');
    const heroDescription = await page.locator('.LandingPage_textContent__7E7m9 > p:nth-child(2)');
    const heroImage = await page.locator('.LandingPage_mediaContent__yxN4A > img:nth-child(1)');
    const heroCreateProfileButton = await page.locator('.LandingPage_anchorButton__QzsUQ');
    const heroWatchOurVideoButton = await page.locator('button.Button_variantRegularLightBackground__h8TWQ:nth-child(1)');
    const heroPizzaExpressLogo = await page.locator('div.UsedBySection_logo__vtF0y:nth-child(1) > img:nth-child(1)');
    const heroTiffanyLogo = await page.locator('div.UsedBySection_logo__vtF0y:nth-child(2) > img:nth-child(1)');
    const heroLouisVuittonLogo = await page.locator('div.UsedBySection_logo__vtF0y:nth-child(3) > img:nth-child(1)');
    const heroBurberryLogo = await page.locator('div.UsedBySection_logo__vtF0y:nth-child(4) > img:nth-child(1)');


  await page.goto('https://staging.vizzy.com/');
  
});
